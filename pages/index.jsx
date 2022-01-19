const numeral = require('numeral')
// React
import { useMemo, useState, useEffect } from 'react'
import NextLink from 'next/link'
// Lib
import { fetchCurrencies } from '../lib/fetchData'
// Components
import DataTable from '../components/data/DataTable'
import BigTitle from '../components/BigTitle'

const Error = () => (
  <div className="text-primary-red text-sm font-semibold py-4">
    An Error as occured fetching data. Try reloading the page .
  </div>
)

const Home = ({ fetchData, fetchError, interval }) => {
  // TODO: maybe refactor
  const [intervalValue, setIntervalValue] = useState(interval)

  useEffect(() => {
    setIntervalValue(interval)
  }, [interval])

  const data = useMemo(() => fetchData, [fetchData])

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'rank'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: e => numeral(e.value).format('$0,0.00')
      },
      {
        Header: `${intervalValue} Change`,
        accessor: `${intervalValue}.price_change_pct`,
        Cell: e => numeral(e.value).format('0.00%')
      },
      {
        Header: 'Market Cap',
        accessor: 'market_cap',
        Cell: e => numeral(e.value).format('($0.00 a)')
      },
      {
        Header: 'Volume',
        accessor: `${intervalValue}.volume`,
        Cell: e => numeral(e.value).format('($0.00 a)')
      },
      {
        Header: 'Circulatin Supply',
        accessor: 'circulating_supply',
        Cell: e => numeral(e.value).format('($0.00 a)')
      }
    ],
    [intervalValue]
  )

  return (
    <>
      <section className="py-10">
        <div className="max-w-app px-5 mx-auto">
          <BigTitle>Cryptocurrency Prices by Market Cap</BigTitle>
        </div>
      </section>
      <section className="py-10">
        {fetchError && (
          <div className="max-w-app px-5 mx-auto">
            <Error />
          </div>
        )}
        {!fetchError && (
          <div className="max-w-app px-5 mx-auto">
            <DataTable columns={columns} data={data} />
          </div>
        )}
      </section>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const interval = query.interval ? query.interval : '1d'
  const { data, error } = await fetchCurrencies(interval)

  return {
    props: {
      fetchData: data,
      fetchError: error,
      interval: interval
    }
  }
}

export default Home

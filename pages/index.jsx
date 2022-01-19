const numeral = require('numeral')
// React
import { useMemo } from 'react'
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

const Home = ({ fetchData, fetchError }) => {
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
        Header: '1D Change',
        accessor: '1d.price_change_pct',
        Cell: e => numeral(e.value).format('0.00%')
      },
      {
        Header: 'Market Cap',
        accessor: 'market_cap',
        Cell: e => numeral(e.value).format('($0.00 a)')
      },
      {
        Header: 'Volume',
        accessor: '1d.volume',
        Cell: e => numeral(e.value).format('($0.00 a)')
      },
      {
        Header: 'Circulatin Supply',
        accessor: 'circulating_supply',
        Cell: e => numeral(e.value).format('($0.00 a)')
      }
    ],
    []
  )

  return (
    <>
      <section className="py-10">
        <div className="container">
          <BigTitle>Cryptocurrency Prices by Market Cap</BigTitle>
        </div>
      </section>
      <section className="py-10">
        {fetchError && (
          <div className="container">
            <Error />
          </div>
        )}
        {!fetchError && (
          <div className="container">
            <DataTable columns={columns} data={data} />
          </div>
        )}
      </section>
    </>
  )
}

export const getServerSideProps = async context => {
  const { data, error } = await fetchCurrencies()
  return {
    props: {
      fetchData: data,
      fetchError: error
    }
  }
}

export default Home

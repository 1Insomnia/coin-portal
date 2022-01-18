const numeral = require('numeral')
// React
import { useMemo } from 'react'
// Lib
import { fetchCurrencies } from '../lib/fetchData'
// Chakra
import { Box, Heading } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
// Components
import DataTable from '../components/data/DataTable'

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
        accessor: 'name',
        url: true
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
        Cell: e => numeral(e.value).format('0,0')
      }
    ],
    []
  )

  console.log(fetchData)
  console.log(fetchError)

  return (
    <>
      <Box>
        <Heading as="h1" textAlign="center" pb={10}>
          Top Cryptocurrencies by Market Cap
        </Heading>
      </Box>
      <Box>
        {fetchError && (
          <Box>An error as occured fetching data. Try reloading the page.</Box>
        )}
        {!fetchError && <DataTable columns={columns} data={data} />}
      </Box>
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

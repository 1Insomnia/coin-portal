import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

function DataTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
                fontSize="12px"
                position="sticky"
                p="10px"
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                  fontSize="14px"
                  p="10px"
                >
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default DataTable

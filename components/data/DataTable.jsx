import { useTable, useSortBy } from 'react-table'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

function DataTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <div className="overflow-x-auto bg-light-light dark:bg-dark-dark p-4 rounded-md">
      <table {...getTableProps()} className="table-auto w-full border-collapse">
        <thead className=" sticky top-0">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-xs text-left py-3 px-1"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FiChevronUp
                          aria-label="sorted descending"
                          className="inline-block"
                        />
                      ) : (
                        <FiChevronDown
                          aria-label="sorted ascending"
                          className="inline-block"
                        />
                      )
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="text-left py-6 px-1 text-sm"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

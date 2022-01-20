import { useTable, useSortBy } from 'react-table'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

function DataTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-x-auto">
        <table
          {...getTableProps()}
          className="w-full border-collapse table-auto"
        >
          <thead>
            {headerGroups.map(headerGroup => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps()
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map(column => {
                    const { key, ...restColumn } = column.getHeaderProps()
                    return (
                      <th
                        key={key}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        {...restColumn}
                        className="text-xs text-left p-3 uppercase sticky top-0 whitespace-nowrap bg-light-light dark:bg-dark-dark"
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
                    )
                  })}
                </tr>
              )
            })}
          </thead>
          <tbody {...getTableBodyProps} className="divide-y">
            {rows.map(row => {
              prepareRow(row)
              const { key, ...restRowProps } = row.getRowProps()
              return (
                <tr key={key} {...restRowProps}>
                  {row.cells.map(cell => {
                    const { key, ...restCellProps } = cell.getCellProps()
                    return (
                      <td
                        key={key}
                        {...restCellProps}
                        className="text-left py-6 px-3 text-sm whitespace-nowrap uppercase"
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable

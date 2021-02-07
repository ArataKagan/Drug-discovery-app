import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';

function TextFilter({
    column: {filterValue, preFilteredRows, setFilter},
}){
    const count = preFilteredRows.length
    return (
        <input 
            value={filterValue || ''}
            onChange= {e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}


function Table({columns, data}) {
    const defaultColumn = React.useMemo(
        () => ({
            Filter: TextFilter,
        }),
        []
    )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        getRowProps,
        page,
        pageOptions,
        state: {pageIndex, pageSize},
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage
    } = useTable(
            {columns, 
             data,
             defaultColumn,
             initialState: {pageSize: 4}
            }, 
        useFilters,
        useSortBy,
        usePagination
        );

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous Page
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                </button>
                <div>
                    Page{' '}
                    <em>
                        {pageIndex + 1} of {pageOptions.length}
                    </em>
                </div>
            </div>
        </div>
    )    
}

export default Table;
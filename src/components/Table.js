import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper';

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
             initialState: {pageSize: 8}
            }, 
        useFilters,
        useSortBy,
        usePagination
        );

    return (
        <TableContainer component={Paper} style={{width: '95%' }}>
        <div>
            <MaUTable {...getTableProps()}>
                <TableHead style={{backgroundColor: '#bbbbbb' }}>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody  {...getTableBodyProps()}>
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
                </TableBody>
            </MaUTable>
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
        </TableContainer>
    )    
}

export default Table;
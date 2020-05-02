
import React from 'react'
import TableLine from './TableLine'
import { Table } from 'reactstrap'

const TableFull = ({columns, dataTable, determineRowClass}) => (
    <Table hover bordered size="sm" className="col-lg-2">
        <thead>
        <tr>
        {columns.map( (col, idx) => (
            <th key={idx}>
                {col}
            </th>
        ))}
        </tr>
        </thead>
        <tbody>
        {dataTable.map((dataRow,idx) => (
            <TableLine key={idx} columns={columns} dataRow={dataRow} determineRowClass={determineRowClass}></TableLine>
        ))}
        </tbody>
    </Table>
)

export default TableFull

/*

import PropTypes from 'prop-types'
*/

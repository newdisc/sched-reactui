import React from 'react'
import { Table } from 'reactstrap'
//import { Link } from 'react-router-dom'

const RowDetails = ({ columns, determineRowClass, dataRow }) => (
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {columns.map( (col, idx) => (
            <tr key={idx}>
                <td key={idx} className={determineRowClass(dataRow, col)}>
                    {col}
                </td>
                <td key={col} className={determineRowClass(dataRow, col)}>
                    {dataRow[col]}
                </td>
            </tr>
            ))}
            
        </tbody>
    </Table>
)

export default RowDetails;

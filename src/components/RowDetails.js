import React, {useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import { Table } from 'reactstrap'
import { Button } from 'reactstrap'
import { Spinner } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export const getButtonIcon = (isPending) => {
    if (isPending) {
        return (<Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          color="danger"
        />)
    } else {
        return (
            <FontAwesomeIcon icon={faPlay} />
        )
    }
}
const searchRow = (arrayTable, nameValue) => {
    //console.log("Finding row: " + nameValue)getRowClass,
    return arrayTable.find((item) => (item.name === nameValue))
}

const RowDetails = ({ columns, determineRowClass, data, actionButton, runButton, pending }) => {

    let { id } = useParams();
    let ret = (<div>Retrieving {id}</div>)
    let dataRow = searchRow(data, id)
    useEffect(()=>{
        if (undefined === dataRow || 0 === dataRow.length) {
            actionButton()
        }
    }, [dataRow, actionButton])
    if (undefined === dataRow) {
        return ret;
    }
    ret = (
    <div className="container spacetop">
        <div className="col">
            <div>
                <Button color="danger" onClick={() => runButton(id)}>
                    {getButtonIcon(pending)}
                </Button>
                {' '}
            </div>
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
        </div>
    </div>
    )
    return ret;
}

export default RowDetails;

//import {getButtonIcon} from './IntegratedTable'
//import { Link } from 'react-router-dom'
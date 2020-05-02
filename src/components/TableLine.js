
import React from 'react'
import { Link } from 'react-router-dom'

export const genColData = (dataRow, col) => {
  let val = dataRow[col]
  if ("name" === col) {
    return (
      <Link to={location => `${location.pathname}/${val}`}>{val}</Link>
    )
  } else {
    return val
  }
}

const TableLine = ({ columns, determineRowClass, dataRow }) => (
    <tr>
        {columns.map( (col, idx) => (
            <td key={idx} className={determineRowClass(dataRow, col)}>
                {genColData(dataRow, col)}
            </td>
        ))}
    </tr>
)

export default TableLine;

/*
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
const TableLine = ({columns, dataRow}) => (
);
    <br/>
TableLine.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
    <a href={val}>{val}</a>
*/
//import PropTypes from 'prop-types'
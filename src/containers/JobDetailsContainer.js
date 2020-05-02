import { connect } from 'react-redux'
import  RowDetails  from '../components/RowDetails'
import {job_columns, mapDispatchToProps} from './JobListContainer'

const searchRow = (arrayTable, nameValue) => {
    //console.log("Searching for: " + nameValue)
    return arrayTable.find((item) => (item.name === nameValue))
}

const mapStateToProps = (state, ownProps) => {
    //console.log("Searching map for: " + ownProps.jobName)
    return {
        columns: job_columns,
        dataRow: searchRow(state.jobCommands, ownProps.jobName)
    }
}

const JobDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RowDetails)

export default JobDetailsContainer

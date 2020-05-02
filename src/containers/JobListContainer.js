import { connect } from 'react-redux'
import  TableFull  from '../components/TableFull'

export const job_columns = ["name", "fullCommand"];

const mapStateToProps = state => {
    return {
        columns: job_columns,
        dataTable: state.jobCommands
    }
}

export const mapDispatchToProps = state => {
    return {
        determineRowClass: () => {return "";}
    }
}


const JobListContainer = connect(mapStateToProps, mapDispatchToProps)(TableFull)

export default JobListContainer

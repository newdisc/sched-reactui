import { connect } from 'react-redux'
import IntegratedTable from '../components/IntegratedTable'
//import  TableFull  from '../components/TableFull'
import fetchCommands from '../store/fetchCommands'

export const job_columns = ["name", "fullCommand"];


const mapStateToProps = state => {
    return {
        columns: job_columns,
        data: state.jobCommands.commands,
        pending: state.jobCommands.pending,
        error: state.jobCommands.error,
        colorButton: 'primary'
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getRowClass: () => {return ""},
        actionButton: () => {dispatch(fetchCommands('http://localhost:8080/job/list'))},
        determineRowClass: () => {return ""}
    }
}


const JobListContainer = connect(mapStateToProps, mapDispatchToProps)(IntegratedTable)

export default JobListContainer

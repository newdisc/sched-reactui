import { connect } from 'react-redux'
import IntegratedTable from '../components/IntegratedTable'
import fetchTriggers, {runTriggers} from '../store/fetchTriggers'
import fetchLogs from '../store/fetchLogs'

export const trigger_columns = ["parent", "name", "status", "condition", "time_condition" ];
export const getRowClass = (trigger, col) => {
    let rclass = ""
    if ("status" === col ) {
        let jstatus = trigger.status
        switch (jstatus) {
            case "FAILURE":
                rclass = "text-danger"
                break
            case "SUCCESS":
                rclass = "text-success"
                break
            default:
                break
        }
    }
    return rclass
}

const mapStateToProps = state => {
    return {
        columns: trigger_columns,
        data: state.jobTriggers.triggers,
        pending: state.jobTriggers.pending,
        error: state.jobTriggers.error,
        colorButton: 'primary'
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getRowClass: getRowClass,
        determineRowClass: getRowClass,
        actionButton: () => {dispatch(fetchTriggers('/api/trigger/list'))},
        runButton: (name) => {dispatch(runTriggers('/api/trigger/run?triggerName=' + name ))},
        retrieveLogs: (name) => {dispatch(fetchLogs('/api/job/logs/' + name ))}
    }
}

const TriggerListContainer = connect(mapStateToProps, mapDispatchToProps)(IntegratedTable)

export default TriggerListContainer

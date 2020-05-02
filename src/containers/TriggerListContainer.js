import { connect } from 'react-redux'
import  TableFull  from '../components/TableFull'

export const trigger_columns = ["parent", "name", "status", "condition", "time_condition"
        //, "arguments", "target_job", "timezone", "description"
        ];
export const getRowClass = (trigger, col) => {
    let rclass = ""
    if ("status" === col ) {//|| "name" === col
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
        dataTable: state.jobTriggers
    }
}

const mapDispatchToProps = state => {
    return {
        determineRowClass: getRowClass
    }
}

const TriggerListContainer = connect(mapStateToProps, mapDispatchToProps)(TableFull)

export default TriggerListContainer

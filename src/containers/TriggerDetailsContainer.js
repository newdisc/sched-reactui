import { connect } from 'react-redux'
import  RowDetails  from '../components/RowDetails'
import {getRowClass} from './TriggerListContainer'

export const trigger_columns = ["parent", "name", "status", "condition", "time_condition"
        , "arguments", "target_job", "timezone", "description"
        ];
const searchRow = (arrayTable, nameValue) => {
    //console.log("Finding row: " + nameValue)
    return arrayTable.find((item) => (item.name === nameValue))
}

const mapStateToProps = (state, ownProps) => {
    return {
        columns: trigger_columns,
        dataRow: searchRow(state.jobTriggers, ownProps.triggerName)
    }
}

const mapDispatchToProps = state => {
    return {
        determineRowClass: getRowClass
    }
}

const TriggerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RowDetails)

export default TriggerDetailsContainer

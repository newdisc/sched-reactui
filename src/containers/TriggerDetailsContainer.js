import { connect } from 'react-redux'
import  RowDetails  from '../components/RowDetails'
import { mapDispatchToProps} from './TriggerListContainer'

export const trigger_columns = ["parent", "name", "status", "condition", "time_condition"
        , "arguments", "target_job", "timezone", "description"
        ];
        
const mapStateToProps = (state, ownProps) => {
    return {
        columns: trigger_columns,
        data: state.jobTriggers.triggers,
        pending: state.jobTriggers.pending,
        error: state.jobTriggers.error,
    }
}

const TriggerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RowDetails)

export default TriggerDetailsContainer

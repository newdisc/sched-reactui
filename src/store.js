import {createStore} from 'redux'
import triggerJobs from './reducer'
const store = createStore(triggerJobs)

export default store

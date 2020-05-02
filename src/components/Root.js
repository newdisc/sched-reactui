import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, useParams, Redirect, Switch, Route } from 'react-router-dom'
import TriggerListContainer from '../containers/TriggerListContainer'
import JobListContainer from '../containers/JobListContainer'
import TriggerDetailsContainer from '../containers/TriggerDetailsContainer'
import JobDetailsContainer from '../containers/JobDetailsContainer'
import WrapperMain from '../components/WrapperMain'
import RunButton from '../components/RunButtons'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Redirect to="/triggers"/>
        </Route>
        <Route exact path="/triggers" >
          <WrapperMain>
            <TriggerListContainer/>
          </WrapperMain>
        </Route>
        <Route path="/triggers/:id" >
          <WrapperMain>
            <RunButton>
              <TDC/>
            </RunButton>
          </WrapperMain>
        </Route>
        <Route exact path="/jobs">
          <WrapperMain>
            <JobListContainer/>
          </WrapperMain>
        </Route>
        <Route path="/jobs/:id">
          <WrapperMain>
            <JDC/>
          </WrapperMain>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

function TDC() {
  let { id } = useParams();
  return (
    <TriggerDetailsContainer triggerName={id}/>
  );
}

function JDC() {
  let { id } = useParams();
  return (
    <JobDetailsContainer jobName={id}/>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
/* 
 <TriggerDetailsContainer triggerName={id}/>
*/
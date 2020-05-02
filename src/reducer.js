
import { combineReducers } from 'redux'

import {ADD_TRIGGERS, ADD_COMMANDS, RUN_TRIGGER} from './actions'

function jobTriggers(state = [
{
  "status" : "FAILURE",
  "name" : "root",
  "parent" : "",
  "condition" : "",
  "time_condition" : "0\t0/1\t*\t?\t*\t*\t*",
  "arguments" : "arguments Unused",
  "description" : "Daily Run box at5\t0\t?\t*\t1-5",
  "target_job" : "",
  "timezone" : "Europe/London",
  "colorClass": "bg-danger"
}, {
  "status" : "SUCCESS",
  "name" : "echo_trig",
  "parent" : "root",
  "condition" : "sleep_trig",
  "time_condition" : "",
  "arguments" : "abc d e",
  "description" : "Test echo of all arguments - start with box after sleep",
  "target_job" : "EchoCommand",
  "timezone" : "Europe/London",
  "colorClass": "bg-success"
}, {
  "status" : "FAILURE",
  "name" : "invalid",
  "parent" : "root",
  "condition" : "echo_trig",
  "time_condition" : "",
  "arguments" : "abc d e",
  "description" : "Test invalid job",
  "target_job" : "INVALID",
  "timezone" : "Europe/London",
  "colorClass": "bg-danger"
}, {
  "status" : "SUCCESS",
  "name" : "sleep_trig",
  "parent" : "root",
  "condition" : "",
  "time_condition" : "",
  "arguments" : "10",
  "description" : "Test sleep wait - immediate start with box",
  "target_job" : "Sleep",
  "timezone" : "Europe/London",
  "colorClass": "bg-success"
}    
], action) {
    switch (action.type) {
        case ADD_TRIGGERS:
            return [
                ...state,
                ...action.triggers
            ];
        case RUN_TRIGGER:
          console.log("Running Trigger: " + action.trigger)
          break
        default:
          break
    }
    return state;
}

function jobCommands(state = [
{
  "name" : "Set",
  "fullCommand" : "set"
}, {
  "name" : "Sleep",
  "fullCommand" : "ping 127.0.0.1 -n"
}, {
  "name" : "Sample",
  "fullCommand" : "Nothing"
}, {
  "name" : "Dir",
  "fullCommand" : "dir"
}, {
  "name" : "EchoCommand",
  "fullCommand" : "echo %USERNAME%"
}
], action) {
    switch (action.type) {
        case ADD_COMMANDS:
            return [
                ...state,
                ...action.jobs
            ]
        default:
            return state;
    }
}

const triggerJobs = combineReducers({
    jobTriggers,
    jobCommands
})

export default triggerJobs

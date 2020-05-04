
export const ADD_TRIGGERS = 'ADD_TRIGGERS'
export const ADD_COMMANDS = 'ADD_COMMANDS'
export const RUN_TRIGGER = 'RUN_TRIGGER'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const FETCH_TRIGGERS_PENDING = 'FETCH_TRIGGERS_PENDING'
export function fetchTriggersPending(){
    return {
        type: FETCH_TRIGGERS_PENDING
    }
}

export const FETCH_TRIGGERS_SUCCESS = 'FETCH_TRIGGERS_SUCCESS'
export function fetchTriggersSuccess(triggers) {
    return {
        type: FETCH_TRIGGERS_SUCCESS,
        status: SUCCESS,
        triggers: triggers
    }
}

export const FETCH_TRIGGERS_ERROR = 'FETCH_TRIGGERS_ERROR'
export function fetchTriggersFailure(error) {
    return {
        type: FETCH_TRIGGERS_ERROR,
        status: FAILURE,
        error: error
    }
}

export const FETCH_COMMANDS_PENDING = 'FETCH_COMMANDS_PENDING'
export function fetchCommandsPending(){
    return {
        type: FETCH_COMMANDS_PENDING
    }
}

export const FETCH_COMMANDS_SUCCESS = 'FETCH_COMMANDS_SUCCESS'
export function fetchCommandsSuccess(commands) {
    return {
        type: FETCH_COMMANDS_SUCCESS,
        status: SUCCESS,
        commands: commands
    }
}

export const FETCH_COMMANDS_ERROR = 'FETCH_COMMANDS_ERROR'
export function fetchCommandsFailure(error) {
    return {
        type: FETCH_COMMANDS_ERROR,
        status: FAILURE,
        error: error
    }
}

export const RUN_TRIGGER_PENDING = 'RUN_TRIGGER_PENDING'
export function runTriggersPending(){
    return {
        type: RUN_TRIGGER_PENDING
    }
}

export const RUN_TRIGGER_SUCCESS = 'RUN_TRIGGER_SUCCESS'
export function runTriggersSuccess(triggers) {
    return {
        type: RUN_TRIGGER_SUCCESS,
        status: SUCCESS,
        triggers: triggers
    }
}

export const RUN_TRIGGER_ERROR = 'RUN_TRIGGER_ERROR'
export function runTriggersFailure(error) {
    return {
        type: RUN_TRIGGER_ERROR,
        status: FAILURE,
        error: error
    }
}

export function addTriggers(triggers){
    return {type: ADD_TRIGGERS, triggers}
}

export function addJobs(jobs){
    return {type: ADD_COMMANDS, jobs}
}

export function runTrigger(trigger) {
    return {type: RUN_TRIGGER, trigger}
}


export const ADD_TRIGGERS = 'ADD_TRIGGERS'
export const ADD_COMMANDS = 'ADD_COMMANDS'
export const RUN_TRIGGER = 'RUN_TRIGGER'

export function addTriggers(triggers){
    return {type: ADD_TRIGGERS, triggers}
}

export function addJobs(jobs){
    return {type: ADD_COMMANDS, jobs}
}

export function runTrigger(trigger) {
    return {type: RUN_TRIGGER, trigger}
}

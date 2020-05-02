import React from 'react'
import { Button } from 'reactstrap'
import {runTrigger} from '../actions'

const RunButton = (props) => (
    <div className="col">
        {props.children}
        <div>
            <Button color="danger" onClick={() => runTrigger("root")}>Run</Button>{' '}
        </div>
    </div>
)

export default RunButton
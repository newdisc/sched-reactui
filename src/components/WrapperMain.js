import React from 'react'
import './WrapperMain.css'

const WrapperMain = (props) => (
    <div className="container spacetop">
        {props.children}
    </div>
)

export default WrapperMain
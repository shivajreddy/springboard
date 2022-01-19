import React, { useState } from 'react'

const Box = (props) => {
    return(
        <div id={props.id} data-count={props.count} data-color={props.color} className={props.cls}></div>
    )
}

export default Box;
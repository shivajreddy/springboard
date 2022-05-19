import React from 'react'

function Alert(props) {
  return (
    <>
      <h4>Alert component</h4>
      <>{props.children}</>
    </>
  )
}

export default Alert
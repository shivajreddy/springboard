import React, { useState } from 'react'
import CardPile from './CardPile'

function Table() {
  // resend the prop
  // Auto Draw
  function changeDrawStatus(s) {
    setStatus(!s)
  }

  const [status, setStatus] = useState(false)

  return (
    <div>
      {/* <CardPile handleAutoDraw={changeDrawStatus} currentAutoDrawStatus={false} /> */}
      <CardPile />
    </div>
  )
}

export default Table
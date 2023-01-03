import React, { memo } from 'react'

function Child({counterTwo,setCounterTwo}) {
    console.log("Child Component Rendered")
  return (
    <div>Child Component</div>
  )
}

export default memo(Child);
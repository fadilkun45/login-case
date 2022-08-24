import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Privatepage = () => {
  const user = useSelector((state) => state.login)

  console.log(user)
  
  return (
    <div>Privatepage</div>
  )
}

export default Privatepage
'use client'
import React from 'react'
import { useState } from 'react'

const MoveRight = ({children}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <d1v onMouseEnter={()=>isActive?isActive:setIsActive(true)}  className={isActive ? 'move-right ': 'opacity-0 '} >{children}</d1v>
  )
}

export default MoveRight
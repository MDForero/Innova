'use client'
import React from 'react'
import { useState } from 'react'

const MoveLeft = ({children , isShown}) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <d1v onMouseEnter={()=>isActive?isActive:setIsActive(true)}  className={(isActive ? 'move-left ': 'opacity-0 ' ) + children.props.className} >{children}</d1v>
  )
}

export default MoveLeft
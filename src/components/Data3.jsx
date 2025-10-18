import React, { useContext } from 'react'
import { UserContext } from '../App'

export const Data3 = () => {

  let {user} = useContext(UserContext)
  
  return (
    <div>
        <p>{user.name}</p>
    </div>
  )
}

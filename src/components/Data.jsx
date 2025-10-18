import React, { useState } from 'react'
import { Data2 } from './Data2'

export const Data = () => {

    let [data,setData] = useState(
        {
            name : "Girithran",
            rollno : "24e3005"
        }
    )
  return (
    <div>
        <h1>WELCOME TO OUR COLLEGE</h1>
        <Data2/>
    </div>
  )
}

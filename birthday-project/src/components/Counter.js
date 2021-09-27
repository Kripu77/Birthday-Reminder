import React, {useState} from 'react'
import List from './List'
import {data} from '../data'

const Counter = () => {

    const[users, setUsers] = useState(data);
    return (
       <>
       
       <section className="container">
           
           <List/>
           
           </section>
       </>
    )
}

export default Counter

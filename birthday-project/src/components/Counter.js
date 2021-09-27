import React, {useState} from 'react'
import List from './List'

const Counter = () => {
    return (
       <>
       
       <section className="container">
           <h1> 0 Birthdays Today</h1> 
           <List/>
           <button className="btn"> Clear</button>
           
           </section>
       </>
    )
}

export default Counter

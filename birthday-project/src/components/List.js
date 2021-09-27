import React, {useState} from 'react'
import {data} from "../data";



const List = () => {

    const [users, setUsers] = useState(data);
 
    return (
       <>
       <h1> {users.length} Birthdays Today</h1> 
       {
           users.map((value)=>{
const {id, name, age, image} = value;
return (<div key={id} className='person'> 
<img src={image}/>
<div>
<h4> {name}</h4>
<p> {age} years</p>

 </div>

</div>)

           })
       }
        <button className="btn" onClick={()=> setUsers([])}> Clear</button>
       </>
    )
}

export default List

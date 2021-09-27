import React, {useState} from 'react'
import {data} from "../data";



const List = () => {
// destructure the data coming out from the data array
    const [users, setUsers] = useState(data);
 
    return (
       <>
       {/* users.length will count the total numbers of users who have birthday */}
       <h1> {users.length} Birthdays Today</h1> 
       { //map over each item in the array and print them out
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
        <button className="btn" onClick={()=> setUsers([])} style={{background:"var(--clr-primary-6)"}}> Clear</button>
       </>
    )
}

export default List

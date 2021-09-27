import React, {useState} from 'react'
import {data} from "../data";


const List = () => {

    const [users, setUsers] = useState(data);
 
    return (
       <>
       {
           users.map((value)=>{
const {id, name, age, image} = value;
return (<div key={id}> 
<h1> {name}</h1>
<h2> {age}</h2>



</div>)

           })
       }
       
       </>
    )
}

export default List

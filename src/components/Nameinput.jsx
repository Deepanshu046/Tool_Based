//handling user input 
// state management
import { useState } from "react";

function NameInput(){
    const [name , setName]= useState('')

    return (
        <div>
            <h3>Your Name: {name}</h3>
            <input
                type='text'
                placeholder='Enter your Name '
                onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                }
            />
        </div>
    )

}
export default NameInput
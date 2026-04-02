import{useState} from 'react'
function Counter(){
    const [count , setCount]=useState(0);

    return(
        <div>
            <h2> Count: {count} </h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <div>
            <h2>Hellooooooo</h2>

            
            </div>
             <div>
            <h2>Hellooooooo</h2>

            
            </div>
        </div>
        
    )
}

export default Counter
import React from 'react'

const Component =(props)=>{


    return(
        <div>
            <button onClick={()=>props.children(4)}>+4</button>
        </div>
    )
}

export default Component
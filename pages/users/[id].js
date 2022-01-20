import React from 'react'
import { useRouter }  from 'next/router'

const user = () => {
    const {query : { id }} = useRouter();

 
 
    
    return (
        <div>
            <h2>user name:</h2>
            <h5>user ID: { id && id}</h5>
        </div>
    )
}

export default user
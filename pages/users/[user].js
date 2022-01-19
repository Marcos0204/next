import React from 'react'
import { useRouter }  from 'next/router'

const user = () => {
    const {query : { user }} = useRouter();

 
 
    
    return (
        <div>
            <h2>user name:</h2>
            <h5>user ID: { user && user}</h5>
        </div>
    )
}

export default user
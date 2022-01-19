import React from 'react'
import { useRouter } from 'next/router'

const DetailID = () => {

    const { query : { id } } = useRouter()
    
    return (
        <div>
            <h2>Datails Post</h2>
            <h5>Post ID: { id && id }</h5>
        </div>
    )
}

export default DetailID

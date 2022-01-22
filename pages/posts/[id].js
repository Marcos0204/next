import React from 'react'
import { useRouter } from 'next/router'
import Title from '../../Components/molecules/Title/Title'
import Layout from '../../Components/Layout/Layout'

const DetailID = () => {

    const { query : { id } } = useRouter()
    
    return (
        <Layout>
            <Title>
                Datails Post
            </Title>
            
            <h5>Post ID: { id && id }</h5>
        </Layout>
    )
}

export default DetailID

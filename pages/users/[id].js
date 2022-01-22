import React from 'react'
import { useRouter }  from 'next/router'
import Title from '../../Components/molecules/Title/Title';
import Layout from '../../Components/Layout/Layout';

const user = () => {
    const {query : { id }} = useRouter();

 
 
    
    return (
        <Layout>
            <Title>
                user name:
            </Title>
            <h5>user ID: { id && id}</h5>
        </Layout>
    )
}

export default user
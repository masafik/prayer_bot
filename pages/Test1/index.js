import React, { Component } from 'react';
import { Button } from '@mui/material';
import router, { useRouter } from 'next/router';
import Layout from '../../components/Layout';


function Test() {
    const router = useRouter();
    return (
        <Layout>
            <div>
                <Button variant="contained" onClick={() => {
                    router.push({
                        pathname: '/'
                    },
                        undefined, { shallow: true }
                    )
                }}>Back</Button>
            </div>
        </Layout >

    );
}

export default Test;

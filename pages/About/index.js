import React, { Component } from 'react';
import { Button } from '@mui/material';
import router, { useRouter } from 'next/router';



function Test() {
    const router = useRouter();
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    อยู่นี่ไงงงงงง
                    {/* <Button variant="contained" sx={{ backgroundColor: 'primary.main' }} onClick={() => {
                        router.push({
                            pathname: '/'
                        },
                            undefined, { shallow: true }
                        )
                    }}>Back</Button> */}
                </div>
            </header>
        </div>
    );
}

export default Test;

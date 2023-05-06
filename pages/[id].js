import React, { Component } from 'react';
import { Button } from '@mui/material';
import router, { useRouter } from 'next/router';



function App() {
    const router = useRouter();


    return (
        <div className="App">
            <header className="App-header">
                {router.query.id} จาก [id].js แรก
            </header>
        </div>
    );
}

export default App;

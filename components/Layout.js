import React, { Component } from 'react';
import { Button } from '@mui/material';
import router, { useRouter } from 'next/router';

import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#007105',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
});

function Layout({ children }) {
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            {/* <div className="App">
                <header className="App-header" style={{ backgroundColor: '#007105', position: 'fixed' }}>
                    <>
                        <Button variant="contained" onClick={() => {
                            router.push({
                                pathname: '/Test',
                                query: { sortBy: 'price' }
                            },
                                undefined, { shallow: true }
                            )
                        }}>Test</Button>
                    </>

                    <>
                        <Button variant="contained" onClick={() => {
                            router.push({
                                pathname: '/Test1',
                                query: { sortBy: 'price' }
                            },
                                undefined, { shallow: true }
                            )
                        }}>Test1</Button>
                    </>
                </header>
            </div > */}
            <div style={{ paddingTop: 50 }}>
                {children}
            </div>
        </ThemeProvider >

    );
}

export default Layout;

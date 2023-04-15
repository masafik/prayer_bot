import React, { Component } from 'react';
import { Button, Icon } from '@mui/material';
import router, { useRouter } from 'next/router';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from '../components/Layout';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function App() {
    const router = useRouter();

    const styles = {
        Box: { bgcolor: 'primary.main', color: 'white', borderRadius: 2, margin: 1, padding: 2 }
    }

    let data = [
        { name: 'ซุฮรี' },
        { name: 'อัสรี' },
        { name: 'มัฆริบ' },
        { name: 'sss' },
        { name: 'sss' }
    ]
    return (
        <Layout >
            <React.Fragment >
                <CssBaseline />
                <Container maxWidth="md">
                    {data.map((item, index) => {
                        return (
                            <Box sx={styles.Box}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <AccessTimeIcon sx={{ fontSize: 80 }}></AccessTimeIcon>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <h2>time : </h2>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <h2 style={{ textAlign: 'end', paddingRight: 20 }}>{item.name}</h2>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })}
                </Container>
            </React.Fragment>

        </Layout >

    );



    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             
    //         </header>
    //     </div>
    // );
}

export default App;
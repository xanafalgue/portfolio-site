import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Social from './Social';
import Zoom from '@mui/material/Zoom';
import { StaticImage } from "gatsby-plugin-image";


const useStyles = makeStyles((theme) => ({
    section: {
        height: "90vh"
    },
    content: {
        height: "100%",
        zindex: 100,
        position: "relative"
    },
    container: {
        height: "100%"
    },
    heroImage: {
        opacity: 0.5,
        backgroundColor: "black",
        height: "100%",
        width: "100%", 
        position: "absolute",
        zIndex: 0
    }
}));

export default function Hero() {

    const styles = useStyles();
    const [shouldShow, setShouldShow] = useState(false);
    useEffect(() => setShouldShow(true));

    return(
        <Box className={styles.section}>
            <StaticImage className={styles.heroImage} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <Container className={styles.container} maxWidth="md">
                <Grid 
                    className={styles.content}
                    container 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <Zoom in={shouldShow}>
                    <Grid sm={8} item>
                        <Typography component="h1" variant="h3">Hi, I'm Mike G. I'm a Software Engineer.</Typography>
                        <Typography variant="h5">I create websites and applications using cutting edge technology and best practices.</Typography>
                        <Box my={2}>
                            <Button href="mailto:mike.giustiniani@gmail.com" variant="contained" color="secondary">
                                Contact Me
                            </Button>
                        </Box>
                    </Grid>
                    </Zoom>
                    <Grid item sx={{ display: {xs: 'none', sm: 'block ' } }}>
                        <Social direction="column"/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
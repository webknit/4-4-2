import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Box, Grid, Center, Container, Text, Button } from '@chakra-ui/react';
import Players from '../components/Players';
import Pitch from '../components/Pitch';

import db from '../db/firebase';
import { collection, Firestore, getDocs } from 'firebase/firestore/lite';

// // // Get a list of cities from your database
// async function getCities(db: Firestore) {
//     const citiesCol = collection(db, 'firebase-demo-resturants');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map((doc) => doc.data());
//     console.log(cityList);
//     return cityList;
// }

// getCities(db);

const Home: NextPage = () => {
    return (
        <Grid templateColumns="1fr 1fr" gap={4} my={4}>
            <Box>
                <Pitch />
            </Box>
            <Box>
                <Players />
            </Box>
        </Grid>
    );
};

export default Home;

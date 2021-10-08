import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Box, Container, Text, Button } from '@chakra-ui/react';
import AddPlayer from '../components/AddPlayer';

const Players: NextPage = () => {
    return (
        <div>
            <h1>Players</h1>
        </div>
    );
};

export default Players;

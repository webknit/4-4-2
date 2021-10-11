import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import Header from '../layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Header></Header>
            <Container maxW="container.lg">
                <main>
                    <Component {...pageProps} />
                </main>
            </Container>
        </ChakraProvider>
    );
}
export default MyApp;

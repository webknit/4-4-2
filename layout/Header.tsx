import { Box, Container, Text, Button } from '@chakra-ui/react';

const Header = () => {
    return (
        <div>
            <Box bg="#2e8540" w="100%" p={4}>
                <Container maxW="container.lg">
                    <Text color="white">Four Four Two</Text>
                </Container>
            </Box>
        </div>
    );
};

export default Header;

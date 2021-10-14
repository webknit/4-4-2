import { useState, useRef, useEffect } from 'react';
import {
    Input,
    Stack,
    FormLabel,
    FormControl,
    Select,
    Button,
    Flex,
    Spacer,
    Center,
    VStack,
    Text,
    Box
} from '@chakra-ui/react';

import { collection, addDoc } from 'firebase/firestore/lite';

import db from '../db/firebase';

import { Player } from '../interfaces/player';

const Pitch: React.FC = () => {
    return (
        <Box bg="aquamarine" p={2}>
            <Center mb={8}>
                <Box mr={4} w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            FR
                        </Center>
                        <Text align="center" mt={0} fontSize="sm">
                            Christiano ronaldo cristos
                        </Text>
                    </VStack>
                </Box>

                <Box ml={4} w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            FR
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
            </Center>
            <Flex mb={8}>
                <Box w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            LM
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            CM
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            CM
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box w="25%">
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            RM
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
            </Flex>
            <Flex mb={8}>
                <Box>
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            LB
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
                <Spacer />
                <Box>
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            LB
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            LB
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            LB
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
            </Flex>
            <Center>
                <Box>
                    <VStack>
                        <Center bg="red.400" borderRadius="full" w={10} h={10}>
                            GK
                        </Center>
                        <Text mt={0} fontSize="sm">
                            Name Player
                        </Text>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default Pitch;

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
    Flex,
    Box,
    FormLabel,
    FormControl,
    Select,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    useDisclosure,
    Heading,
    Text,
    Spacer
} from '@chakra-ui/react';

import { collection, addDoc } from 'firebase/firestore/lite';

import db from '../db/firebase';
import AddPlayer from './AddPlayer';

const Players: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Flex align="center" borderBottom="1px" borderColor="gray.200" pb={4} mb={4}>
                <Heading as="h2" size="xl" mb={0}>
                    Players
                </Heading>
                <Spacer />
                <Button onClick={onOpen} colorScheme="pink" size="sm">
                    Add a new player
                </Button>
            </Flex>

            <Box mb={4}>
                <FormControl id="position">
                    <FormLabel>Position</FormLabel>
                    <Select>
                        <option value="England" selected>
                            All
                        </option>
                        <option value="Spain">Goalkeeper</option>
                        <option value="Germany">Left Back</option>
                        <option value="Germany">Right Back</option>
                        <option value="Germany">Center Back</option>
                        <option value="Germany">Left Midfield</option>
                        <option value="Germany">Right Midfield</option>
                        <option value="Germany">Center Midfield</option>
                        <option value="Germany">Forward</option>
                    </Select>
                </FormControl>
            </Box>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Country</Th>
                        <Th>Name</Th>
                        <Th>Position</Th>

                        <Th>Picks</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Image src="/flags/us.svg" alt="Picture of the author" width={30} height={16} />
                        </Td>
                        <Td>Ronaldo</Td>
                        <Td>ST</Td>
                        <Td>23</Td>
                        <Td>
                            <Button colorScheme="pink" size="sm" variant="outline">
                                Select
                            </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <AddPlayer isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Players;

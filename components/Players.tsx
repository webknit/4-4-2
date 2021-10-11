import { useState, useRef } from 'react';
import {
    Input,
    Stack,
    FormLabel,
    FormControl,
    Select,
    Button,
    Flex,
    Checkbox,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Modal,
    useDisclosure
} from '@chakra-ui/react';

import { collection, addDoc } from 'firebase/firestore/lite';

import db from '../db/firebase';
import AddPlayer from './AddPlayer';

const Players: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <h2>Players</h2>

            <Button onClick={onOpen} colorScheme="blue">
                Add a new player
            </Button>

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

            <AddPlayer isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Players;

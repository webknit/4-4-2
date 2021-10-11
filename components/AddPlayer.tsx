import { useState, useRef, useEffect } from 'react';
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
    FormErrorMessage,
    useToast
} from '@chakra-ui/react';

import { collection, addDoc } from 'firebase/firestore/lite';

import db from '../db/firebase';

interface IProps {
    isOpen: boolean;
    onClose: any;
}

interface Player {
    name: string | null;
    position: string[];
    country: string | null;
}

const AddPlayer: React.FC<IProps> = ({ isOpen, onClose }) => {
    const toast = useToast();

    const [player, addPlayer] = useState<Player>({
        name: null,
        position: [],
        country: null
    });

    const [positionSelected, setPositionSelected] = useState<boolean | null>(null);

    const firstRender = useRef(true);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    const addPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!player?.position.includes(e.target.value)) {
            console.log(e.target.value);
            addPlayer({
                name: player!.name,
                position: [...player!.position, e.target.value],
                country: player!.country
            });
        } else {
            addPlayer({
                ...player,
                position: player?.position.filter((item) => item != e.target.value)
            });
        }
    };

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        addPlayer({
            ...player,
            name: e.target.value
        });
    };

    const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        addPlayer({
            ...player,
            country: e.target.value
        });
    };

    const submitPlayer = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!player!.position!.length) {
            setPositionSelected(false);
            return;
        }

        const docRef = await addDoc(collection(db, '4-4-2_players'), player);

        toast({
            title: 'Player added',
            description: `ID: {docRef}`,
            status: 'success',
            duration: 9000,
            isClosable: true
        });
        //console.log('Document written with ID: ', docRef.id);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Player</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={submitPlayer}>
                        <Stack spacing={3}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" onChange={changeName} />
                            </FormControl>
                            <FormControl
                                as="fieldset"
                                isInvalid={positionSelected === false && positionSelected !== null}>
                                <FormLabel as="legend">Position</FormLabel>
                                <Flex flexWrap="wrap" spacing="24px">
                                    <Checkbox value="gk" mr={4} onChange={addPosition}>
                                        Goalkeeper
                                    </Checkbox>
                                    <Checkbox value="lb" mr={4} onChange={addPosition}>
                                        Left back
                                    </Checkbox>
                                    <Checkbox value="rb" mr={4} onChange={addPosition}>
                                        Right back
                                    </Checkbox>
                                    <Checkbox value="cb" mr={4} onChange={addPosition}>
                                        Center back
                                    </Checkbox>
                                    <Checkbox value="lm" mr={4} onChange={addPosition}>
                                        Left midfield
                                    </Checkbox>
                                    <Checkbox value="rm" mr={4} onChange={addPosition}>
                                        Right midfield
                                    </Checkbox>
                                    <Checkbox value="cm" mr={4} onChange={addPosition}>
                                        Center midfield
                                    </Checkbox>
                                    <Checkbox value="fr" mr={4} onChange={addPosition}>
                                        Forward
                                    </Checkbox>
                                </Flex>
                                <FormErrorMessage>You must select a position</FormErrorMessage>
                            </FormControl>
                            <FormControl id="position">
                                <FormLabel>Country</FormLabel>
                                <Select placeholder="Select country" onChange={changeCountry} isRequired>
                                    <option value="">Select country</option>
                                    <option value="Spain">England</option>
                                    <option value="Germany">Spain</option>
                                </Select>
                            </FormControl>
                        </Stack>

                        <Button colorScheme="blue" mt={4} type="submit">
                            Button
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddPlayer;

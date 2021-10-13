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

import { Player } from '../interfaces/player';

interface IProps {
    isOpen: boolean;
    onClose: any;
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

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

        const docRef = await addDoc(collection(db, 'four-four-two_players'), player);

        toast({
            title: 'Player added',
            description: `ID: ${docRef}`,
            status: 'success',
            duration: 9000,
            isClosable: true
        });

        onClose();

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
                                        GK
                                    </Checkbox>
                                    <Checkbox value="lb" mr={4} onChange={addPosition}>
                                        LB
                                    </Checkbox>
                                    <Checkbox value="rb" mr={4} onChange={addPosition}>
                                        RB
                                    </Checkbox>
                                    <Checkbox value="cb" mr={4} onChange={addPosition}>
                                        CB
                                    </Checkbox>
                                    <Checkbox value="lm" mr={4} onChange={addPosition}>
                                        LM
                                    </Checkbox>
                                    <Checkbox value="rm" mr={4} onChange={addPosition}>
                                        RM
                                    </Checkbox>
                                    <Checkbox value="cm" mr={4} onChange={addPosition}>
                                        CM
                                    </Checkbox>
                                    <Checkbox value="fr" mr={4} onChange={addPosition}>
                                        FR
                                    </Checkbox>
                                </Flex>
                                <FormErrorMessage>You must select a position</FormErrorMessage>
                            </FormControl>
                            <FormControl id="position">
                                <FormLabel>Country</FormLabel>
                                <Select placeholder="Select country" onChange={changeCountry} isRequired>
                                    <option value="">Select country</option>
                                    <option value="ar">Argentina</option>
                                    <option value="br">Brazil</option>
                                    <option value="be">Belgium</option>
                                    <option value="co">Columbia</option>
                                    <option value="hr">Croatia</option>
                                    <option value="gb-eng">England</option>
                                    <option value="fr">France</option>
                                    <option value="de">Germany</option>
                                    <option value="it">Italy</option>
                                    <option value="nl">Netherlands</option>
                                    <option value="pt">Portugal</option>
                                    <option value="es">Spain</option>
                                </Select>
                            </FormControl>
                        </Stack>

                        <Button colorScheme="pink" mt={4} type="submit">
                            Add player
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddPlayer;

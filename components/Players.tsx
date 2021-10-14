import { useState, useRef, useEffect } from 'react';
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
    Skeleton,
    Spacer
} from '@chakra-ui/react';

import { collection, Firestore, getDocs } from 'firebase/firestore/lite';

import db from '../db/firebase';
import AddPlayer from './AddPlayer';

import { Player } from '../interfaces/player';

const Players: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [players, setPlayers] = useState<Player[] | []>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[] | []>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const collectData = async () => {
        setLoading(true);
        const col = collection(db, 'four-four-two_players');
        const playersSnapshot = await getDocs(col);
        const playersList = playersSnapshot.docs.map((doc) => doc.data() as Player);
        setLoading(false);
        setPlayers(playersList);
        setFilteredPlayers(playersList);
    };

    const filterPos = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoading(true);
        console.log(players);
        if (e.target.value !== 'all')
            setFilteredPlayers(players.filter((item) => item.position.includes(e.target.value)));
        else collectData();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        collectData();
    }, []);

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
                    <Select onChange={filterPos}>
                        <option value="all" selected>
                            All
                        </option>
                        <option value="gk">Goalkeeper</option>
                        <option value="lb">Left Back</option>
                        <option value="rb">Right Back</option>
                        <option value="cb">Center Back</option>
                        <option value="lm">Left Midfield</option>
                        <option value="rm">Right Midfield</option>
                        <option value="cm">Center Midfield</option>
                        <option value="fr">Forward</option>
                    </Select>
                </FormControl>
            </Box>

            <Skeleton isLoaded={!loading}>
                {filteredPlayers.length ? (
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
                            {filteredPlayers.map((player: Player, i) => (
                                <Tr key={i}>
                                    <Td>
                                        <Image
                                            src={`/flags/${player.country}.svg`}
                                            alt="Picture of the author"
                                            width={30}
                                            height={16}
                                        />
                                    </Td>
                                    <Td>{player.name}</Td>
                                    <Td>
                                        {player.position.map((pos, i) => {
                                            let str = `${i > 0 ? `, ` : ``}${pos}`;
                                            return `${str}`;
                                        })}
                                    </Td>
                                    <Td>{player.picks || 0}</Td>
                                    <Td>
                                        <Button colorScheme="pink" size="sm" variant="outline">
                                            Select
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                ) : (
                    <Box>No players found</Box>
                )}
            </Skeleton>

            <AddPlayer isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Players;

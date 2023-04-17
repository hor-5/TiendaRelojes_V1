import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    VStack,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
    Heading,
    Image,
    Center,
    DrawerFooter,
    Badge
} from '@chakra-ui/react';
import { FaBluetooth, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import { useRef } from 'react'


function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

    const marcas = ['Rolex', 'Tag Heuer', 'Omega', 'Cartier']
    const categorias = ['GMT', 'Diver', 'Elegante', 'Cronografo', 'Deportivo']


    return (
        <>

            <IconButton
                onClick={() => handleClick()}
                m={4}
                colorScheme='blackAlpha'
            ><HamburgerIcon /></IconButton>


            <Drawer onClose={onClose} isOpen={isOpen} size="full" placement='bottom'>
                <DrawerOverlay />
                <DrawerContent style={{ backgroundColor: "rgba(0, 0, 0, 0.98)", color: "white" }}>
                    <DrawerCloseButton />
                    <DrawerHeader > </DrawerHeader>
                    <DrawerBody >
                        <Link href='/' style={{ textDecoration: "none" }}>
                            <Heading m={2} size='md' _hover={{ color: "blue.500" }} onClick={onClose} >Inicio</Heading>
                        </Link>
                        <Link href='/relojes' style={{ textDecoration: "none" }}>
                            <Heading m={2} size='md' _hover={{ color: "blue.500" }} onClick={onClose} >Ver todos los relojes</Heading>
                        </Link>
                        <Accordion defaultIndex={[0]} >

                            <AccordionItem>

                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Heading size='lg' _hover={{ color: "blue.500" }} > Marcas </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4} display='flex' textAlign='left'>
                                    <VStack>

                                        {marcas.map((marca, index) => (
                                            <Link key={index} href={`/marcas/${marca}`} style={{ textDecoration: "none" }}>
                                                <Heading size='md' pl={5} _hover={{ color: "whiteAlpha.500" }} onClick={onClose} >{marca}</Heading>
                                            </Link>
                                        ))}

                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>

                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Heading size='lg' _hover={{ color: "blue.500" }} >Categorias </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4} display='flex' textAlign='left'>
                                    <VStack>
                                        {categorias.map((categoria, index) => (
                                            <Link key={index} href={`/categoria/${ categoria }`} style={{ textDecoration: "none" }}>
                                                <Heading size='md' pl={5} _hover={{ color: "whiteAlpha.500" }} onClick={onClose} >{categoria}</Heading>
                                            </Link>
                                        ))}

                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </DrawerBody>
                    <DrawerFooter>

                        <Button
                            onClick={onClose}
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<AddIcon />}>
                            Asistente en vivo
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};
function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}            
            left='0'
            bottom='0'
            width='100%'
            padding='10px'
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Image src='https://i.ibb.co/wLYHGs2/Tiempo-logo.png' height={20} width={200} />
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2023 Tiempo. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
export default function Layout({ childrenContent }) {

    return (
        <>
            <Box bg={useColorModeValue('blackAlpha.800', 'blue.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href='/' style={{ textDecoration: "none" }}>
                            <Image width={100} height={10} src='https://i.ibb.co/wCVjnZK/Tiempo-blanco.png' />
                        </Link>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <DrawerCart />
                        <Menu />

                    </Flex>
                </Flex>

            </Box>

            <Box paddingBottom='50px'>{childrenContent}</Box>

            <Footer />


        </>
    );
}
function DrawerCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnCart = useRef()

    return (
        <>
            <IconButton
                variant='outline'
                colorScheme='whiteAlpha'
                rounded={'full'}
                icon={<BsCart2 />}
                ref={btnCart}
                onClick={onOpen}
            />
            <Badge colorScheme='purple' rounded='full' mt={6}>2</Badge>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnCart}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Tu Carrito</DrawerHeader>

                    <DrawerBody>
                        <Text>productos...</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme='blue'>Ir a pagar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


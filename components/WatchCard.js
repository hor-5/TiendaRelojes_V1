import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link"

export default function WatchCard({ watch }) {
  const redirect = `/relojes/${watch.idReloj}`;
  return (
    <>
      <Link href={redirect}>
        <Center py={12} mx={4}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${watch.miniatura})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'xl'}
                height={230}
                width={282}
                objectFit={'contain'}
                src={watch.miniatura}
                alt={watch.nombre}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {watch.marca}
              </Text>
              <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
                {watch.nombre}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  $ {watch.precio.toLocaleString('en-US', { style: 'currency', currency: 'ARG', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>

              </Stack>
            </Stack>
          </Box>
        </Center>

      </Link>
    </>
  );
}




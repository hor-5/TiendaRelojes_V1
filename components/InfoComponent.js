import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    Heading,
    Text,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import Link from 'next/link'

  
  const Feature = ({ heading, text }) => {
    return (
      <GridItem>
        <Heading size="sm" fontWeight="600">
          {heading}
        </Heading>
        <Text>{text}</Text>
      </GridItem>
    );
  };
  
  export default function InfoComponent() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <Heading size="md" fontWeight="700">
                Relojes Tiempo
              </Heading>
              <Link href='/relojes'>
              <Button colorScheme="teal" size="md">
                Ver todos los relojes
              </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <Text>
                Animate a experimentar un reloj de alto nivel en tu muñeca, a un precio increible.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Calidad'}
            text={'Los relojes son de calidad AAA, y cuentan con maquinarias mecanicas o electronicas de excelente calidad. Por eso brindamos una garantia de 6 meses contra defectos de fabrica'}
          />
          <Feature
            heading={'Elegancia'}
            text={'Podés disfrutar de los diseños más exclusivos a un precio accesible,vas a encontrar en nuestra web relojes elegantes, deportivos y extravagantes.'}
          />
          <Feature
            heading={'Funcionalidad'}
            text={'Los relojes cuentan con maquinaria de origen japonés, automatica mecanica, cronografo automatico electronico o cronografo quartz según el modelo.'}
          />
          <Feature
            heading={'Sumergibilidad'}
            text={'Los relojes pueden sumergirse en pileta o playa, pero es recomendable hacerlo con recaudo, ya que no cuentan con pruebas de hermeticidad'}
          />
        </Grid>
      </Box>
    );
  }
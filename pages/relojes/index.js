import { Heading,Center, SimpleGrid, Box } from "@chakra-ui/react"
import WatchCard from "@/components/WatchCard"

export default function Categoria({relojes}) {

  return (
    <>
    <Center>
      <Heading>Todos los relojes disponibles</Heading>
    </Center>

      <SimpleGrid columns={[1, null, 3]} spacing='40px' mb={100}>
          {relojes.map((reloj, index) => (
            <Box key={index}>
              <WatchCard watch={reloj} />
            </Box>
          ))}
        </SimpleGrid>
    </>
  )
}

export async function getStaticProps(context) {
  // Obtener los datos de la API
   const res = await fetch(`https://horacio5.bsite.net/relojes`)
  const data = await res.json();

  // Retornar los datos como props
  return {
    props: {
      relojes: data
    },
  };
}
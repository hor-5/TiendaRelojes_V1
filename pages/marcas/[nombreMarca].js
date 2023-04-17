import WatchCard from "@/components/WatchCard"
import { Heading, Center,SimpleGrid,Box } from "@chakra-ui/react"


export default function Marcas({ relojes, marca }) {

  return (
    <>
      <Center>
        <Heading>Relojes {marca}</Heading>

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

export const getStaticPaths = async () => {

  const res = await fetch('https://horacio5.bsite.net/marcas')
  const marcas = await res.json();

  const paths = marcas.map(marca => {
    return {
      params: { nombreMarca: marca.nombre.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}
export async function getStaticProps(context) {
  // Obtener los datos de la API
  const marcaSeleccionada = context.params.nombreMarca
  const res = await fetch(`https://horacio5.bsite.net/relojes/marca/${marcaSeleccionada}`)
  const data = await res.json();

  // Retornar los datos como props
  return {
    props: {
      marca: marcaSeleccionada,
      relojes: data
    },
  };
}



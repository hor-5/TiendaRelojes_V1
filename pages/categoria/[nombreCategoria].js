import { Heading,Center, SimpleGrid, Box } from "@chakra-ui/react"
import WatchCard from "@/components/WatchCard"

export default function Categoria({relojes,categoria}) {

  return (
    <>
    <Center>
      <Heading>Relojes {categoria} disponibles</Heading>
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

  const res = await fetch('https://horacio5.bsite.net/categorias')
  const categorias = await res.json();

  const paths = categorias.map(cat => {
    return {
      params: { nombreCategoria: cat.nombre.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}
export async function getStaticProps(context) {
  // Obtener los datos de la API
  const categoriaSeleccionada = context.params.nombreCategoria
  const res = await fetch(`https://horacio5.bsite.net/relojes/categoria/${categoriaSeleccionada}`)
  const data = await res.json();

  // Retornar los datos como props
  return {
    props: {
      categoria: categoriaSeleccionada,
      relojes: data,
    },
  };
}




import Banner from "@/components/Banner";
import InfoComponent from "@/components/InfoComponent";
import WatchShelf from "@/components/WatchShelf";
import { Heading,Box } from "@chakra-ui/react";


// Ejemplo de datos de relojes

export default function Home({rolex, tagHeuer}){

    return(
        <>
            <Banner/>
            <InfoComponent/>
            <Box p={4}>

                
                <WatchShelf watches={rolex} />
                
            </Box>
        </>
    );
}

export async function getStaticProps() {
  // Obtener los datos de la API
  const res = await fetch('https://horacio5.bsite.net/relojes/marca/Rolex')
  const relojesRolex = await res.json();

  const response = await fetch('https://horacio5.bsite.net/relojes/marca/Tag Heuer')
  const relojesTag = await response.json();

  const res2 = await fetch('https://api.bluelytics.com.ar/v2/latest')
  const dolarBlue = await res2.json();

  // Retornar los datos como props
  return {
    props: {
      rolex: relojesRolex,
      tagHeuer : relojesTag,
      precioDolar: dolarBlue.blue.value_sell
    },
  };
}
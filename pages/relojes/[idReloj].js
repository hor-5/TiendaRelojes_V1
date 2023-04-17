import {
  Image, Text, HStack, Circle, Button, Heading, Stat,
  VStack, StatLabel, StatNumber, StatHelpText, IconButton,Box
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {useRouter} from 'next/router'

export default function ProductPage({ producto, precioDolar, imagenes, min }) {

  const router = useRouter()

  const [images, setImages] = useState(imagenes)
  const [selectedImage, setSelectedImage] = useState(imagenes[0]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const [selectedColor, setSelectedColor] = useState(producto.color_cuadrante);

  useEffect(() => {
    setImages(imagenes)
    setSelectedImage(imagenes[0])
    setSelectedColor(producto.color_cuadrante)
  }, [imagenes, selectedColor])
  return (
    <Box>
      
        <IconButton variant='outline'
          colorScheme='blackAlpha'
          aria-label='Volver'
          fontSize='30px'
          rounded='full'
          m={2}
          icon={<ChevronLeftIcon />} 
          onClick={() => router.back()}
          />
      
      <HStack spacing={8} mb={10} mx={3}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HStack>
            <VStack>
              {images.map((image) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image
                    key={image}
                    src={image}
                    boxSize="100px"
                    objectFit="cover"
                    cursor="pointer"
                    onClick={() => handleImageClick(image)}
                  />
                </motion.div>
              ))}
            </VStack>
            <Image src={selectedImage} boxSize="400px" objectFit="cover" />
          </HStack>
        </motion.div>
        <VStack>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heading fontSize="2xl">{producto.nombre}</Heading>
            <Stat>

              <StatNumber>${producto.precio.toLocaleString('en-US', { style: 'currency', currency: 'ARG', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</StatNumber>
              <StatHelpText>u$s{(producto.precio / precioDolar).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</StatHelpText>
            </Stat>
            <Text fontSize="lg">{`Disponibilidad: ${producto.disponibilidad}`}</Text>
            <Text fontSize="lg">{`Material: ${producto.color_material}`}</Text>
            <Text fontSize="lg">{`Movimiento: ${producto.movimiento}`}</Text>
            <Text fontSize="lg">{`Sumergibilidad: ${producto.sumergibilidad_atm} ATM`}</Text>
            <Text fontSize="lg">{`Bisel ${producto.giro_del_bisel}`}</Text>
            <Text fontSize="lg">Color del fondo </Text>
            <Circle
              size="20px"
              bg={selectedColor}
              border='1px'
              borderColor='gray'
              _hover={{ cursor: "pointer" }}
            />
            <Text>Variantes</Text>
            <HStack>
              {min.map(m =>
                <Link key={m.idReloj} href={`/relojes/${m.idReloj}`}>
                  <Image src={m.miniatura} with="100px" height="100px" />
                </Link>)}




            </HStack>
          </motion.div>

          <Button colorScheme="blue" mb={20}>Agregar al carrito</Button>
        </VStack>
      </HStack>
    </Box>
  )
}

export const getStaticPaths = async () => {

  const res = await fetch(`https://horacio5.bsite.net/relojes`)
  const data = await res.json();

  const paths = data.map(reloj => {
    return {
      params: { idReloj: reloj.idReloj.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps(context) {
  // Obtener los datos de la API
  const relojSeleccionado = context.params.idReloj

  const res = await fetch(`https://horacio5.bsite.net/relojes/${relojSeleccionado}`)
  const data = await res.json();

  const resImg = await fetch(`https://horacio5.bsite.net/relojes/${relojSeleccionado}/imagenes`)
  const imgs = await resImg.json();

  const resMin = await fetch(`https://horacio5.bsite.net/relojes/${data.cod_producto}/skus`)
  const miniaturas = await resMin.json();
  console.log(miniaturas)

  const res2 = await fetch('https://api.bluelytics.com.ar/v2/latest')
  const dolarBlue = await res2.json();

  // Retornar los datos como props
  return {
    props: {
      producto: data,
      precioDolar: dolarBlue.blue.value_sell,
      imagenes: imgs,
      min: miniaturas
    },
  };
}
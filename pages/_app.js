// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/navbar'

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <Layout childrenContent={
      <Component {...pageProps} />
      }/>        
      
    </ChakraProvider>
  )
}


export default MyApp
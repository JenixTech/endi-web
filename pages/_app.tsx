import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    primary: "#FFBBC6",
    secondary: "#FFE9EC",
    accent: "#E91311",
  },
}

const styles = {
  global: {
    "html, body": {
      padding: 0,
      margin: 0,
      backgroundColor: colors.brand.primary
    },
    "main": {
      height: '100%'
    },
    "footer": {
      height: '4rem',
      background: '#ffffff',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    }
  }
}

const fonts = {
  heading: "Roboto",
  body: "Open Sans",
};

const theme = extendTheme({ 
  colors,
  styles,
  // fonts
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp

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
      backgroundColor: colors.brand.secondary
    },
    "header": {
      backgroundColor: colors.brand.secondary,
      boxShadow: "6px 6px 11px 4px rgb(24 24 24 / 7%)",
      position: "sticky",
      top: 0,
      zIndex: 999
    },
    "main": {
      height: '100%'
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

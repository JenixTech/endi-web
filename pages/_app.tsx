import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    primary: "#ffbbc6",
    secondary: "#fdf111",
    accent: "#e91311",
  },
}

const styles = {
  global: {
    "html, body": {
      padding: 0,
      margin: 0,
      backgroundColor: colors.brand.primary
    }
  }
}

const theme = extendTheme({ 
  colors,
  styles
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp

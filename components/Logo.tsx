import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { Size, useWindowSize } from "../hooks/useWindowSize";

export default function Logo({ colored }: { colored: boolean }) {
  const size: Size = useWindowSize();

  const logoImage = colored ? "logo" : "logo-b&w";

  return (
    <Flex
      flexDirection="row"
      alignItems='center'
    >
      <Image
        fallback={<Box maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} />}
        src={`/images/${logoImage}.png`}
        alt="ENdi screenshot on iOS"
        loading="eager"
        height="6rem"
        width="6rem" 
      />
      <Heading color="black">ENdi</Heading>
    </Flex>
  )
}
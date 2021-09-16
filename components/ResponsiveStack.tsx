import { HStack, StackProps, VStack } from "@chakra-ui/layout";

interface ResponsiveStackProps extends StackProps {
  horizontal: boolean
}

const ResponsiveStack = ( { children, stackProps } : { children: React.ReactNode, stackProps: ResponsiveStackProps } ) => {
  const { horizontal, ...props } = stackProps;
  
  if (stackProps.horizontal) {
    return (
      <HStack
        {...props}
      >
        {children}
      </HStack>
    )
  } else {
    return (
      <VStack
        {...props}  
      >
        {children}
      </VStack>
    )
  }
}

export default ResponsiveStack;
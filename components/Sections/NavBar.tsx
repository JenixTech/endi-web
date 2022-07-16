import { Flex, IconButton, Menu, MenuButton, MenuList, HStack, Link, VStack } from '@chakra-ui/react';
import {Size, useWindowSize} from '../../hooks/useWindowSize';
import NextLink from "next/link"
import { useRouter } from 'next/router';
import Logo from '../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
  const size: Size = useWindowSize();
  const router = useRouter();

  const getLinkColor = (page: String) => {
    if (router.asPath === page) {
      return 'brand.accent';
    }
  }

  return (
    <header>
      <nav>
        <Flex
          height='6rem'
          maxWidth='1000px'
          margin='0 auto'
          flexDirection="row"
          paddingX="1rem"
          paddingY='2.5rem'
          alignItems='center'
          justifyContent='space-between'
          fontWeight="medium"
        >
          <NextLink href="/" passHref>
            <Link>
              <Logo colored={true} />
            </Link>
          </NextLink>
          {(size.width && size.width > 710) ? (
            <Flex
              flexDirection="row"
              alignItems='center'
              fontSize="lg"
            >
              <HStack spacing="2.5rem">
                <NextLink href="/" passHref>
                  <Link color={getLinkColor('/')}>Home</Link>
                </NextLink>
                <NextLink href="/faqs" passHref>
                  <Link color={getLinkColor('/faqs')}>FAQs</Link>
                </NextLink>
                <NextLink href="/#contact" passHref>
                  <Link color={getLinkColor('/#contact')}>Contact</Link>
                </NextLink>
              </HStack>
            </Flex>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<GiHamburgerMenu />}
                variant='ghost'
              />
              <MenuList>
                <VStack spacing="2rem" paddingY="1rem">
                  <NextLink href="/" passHref>
                    <Link>Home</Link>
                  </NextLink>
                  <NextLink href="/faqs" passHref>
                    <Link>FAQs</Link>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <Link>Contact</Link>
                  </NextLink>
                </VStack>
              </MenuList>
            </Menu>
          )}

        </Flex>
      </nav>
    </header>
  )
}

import { 
  Flex, 
  Box,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  VStack
} from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '../components/Sections/Footer';
import NavBar from '../components/Sections/NavBar';

export default function FAQs() {
  return (
    <Box>
      <Head>
        <title>ENdi - FAQs</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      <NavBar />
      <Flex 
        flexDirection="column"
        margin='0 auto'
      >
        <Box flexGrow={2}>
          <main>
          <Text 
            fontWeight="bold" 
            fontSize="4xl" 
            color="brand.accent"
            textAlign="center"
            marginTop="3rem"
            marginBottom="1.5rem"
          >
            FAQs
          </Text>
          <Accordion paddingBottom="2rem" allowToggle allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Subscriptions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                ENdi is a subscription based app with two payment options:
                <br />
                <br />
                Yearly: £35.99 per year (£2.99 per month saving 15%)
                <br />
                Monthly: £3.49 per month on a rolling contract
                <br />
                <br />
                Both subscription options come with a 1 month FREE trial and you can upgrade or downgrade your subscription at any time.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Discounts and offers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                We occasionally run promotional discounts and offers. Keep an eye on the app store for more information.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Manage or cancel your subscription
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                You can manage or cancel your subscription renewal either directly through the App Store or through the app itself.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    To edit/cancel your subscription
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                Click on the &lsquo;Settings&lsquo; icon in the main menu then click &lsquo;Manage subscription&lsquo;. This will take you to the App Store where you can manage your subscription.
                <br/>
                <br/>
                Note: You will not receive a refund for the fees you have already paid for your current subscription period, therefor you will have access to the service until the end of your current subscription period.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Account Privacy
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                Your ENdi account is private, we do not have access to any of your personal details. All information (including your display name, image and data) are stored securely on your iCloud account.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Using subscriptions on multiple devices
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                ENdi subscriptions are linked to your iCloud account. To use your subscription on multiple-devices, ensure you are logged in to the same account on each device, and download ENdi again.
                <br/>
                <br/>
                When you open ENdi for the first time, simply click 'Restore Purchases' and wait for your previoud subscription to be confirmed.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Submitting feedback
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                Tap on the Settings icon at the bottom of the app’s Home screen - scroll down to Submit Feedback - Add your feedback and tap ‘Submit’.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Disclaimers and Terms of Service
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                By using ENdi you agreeing that you have read, understood and agree to the Terms of Service, Medical Disclaimer, and Privacy Policy.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background="brand.primary">
                  <Box flex='1' textAlign='left' fontWeight="bold">
                    Data use
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                ENdi collects anonymous data to assisit in application and feature improvements.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <VStack paddingBottom="2rem">
            <Text>Need further help?</Text>
            <Text>Please contact us at info@jenixtech.com</Text>
          </VStack>

          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}

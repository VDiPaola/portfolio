import { Box, Flex, Text, Image, VStack, Container, SlideFade } from '@chakra-ui/react'
import pfp from '../../Resources/Images/linkedin_pfp.webp'

const NAME = process.env.REACT_APP_NAME;

export default function AboutMe() {
  return (
    <Box as="section" id="about" py={16}>
      <Container maxW="container.xl">
        <SlideFade in={true} offsetY="30px" transition={{enter: { duration: 1, ease: "easeOut"}}}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Box
              boxSize={{ base: '250px', md: '300px' }}
              borderRadius="full"
              overflow="hidden"
              boxShadow="xl"
              border="4px solid"
              borderColor="blue.400"
            >
              <Image
                src={pfp}
                alt={NAME}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <VStack
              align="start"
              spacing={6}
              flex={1}
              bg="gray.800"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
            >
              <Text fontSize="xl" fontWeight="bold" color="blue.300">
                Hi, I'm {NAME}
              </Text>
              <Text color="gray.300">
              I’ve been tinkering with code for over a decade, just for the fun of it. Whether it’s building apps, automating random tasks, or trying out new languages/frameworks,
              I’m all about exploring whatever sparks my curiosity. I don’t take it too seriously, just seriously enough to enjoy the process and learn something new every time.
              </Text>
              <Text color="gray.300">
                I am making this site to hold myself more accountable for my projects and with a bit of luck get them into a usuable enough state to ship. 
                I want to make things that I'm proud of so I can die with some dignity.
              </Text>
            </VStack>
          </Flex>
        </SlideFade>
      </Container>
    </Box>
  )
}
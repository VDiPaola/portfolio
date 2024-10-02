
import { Box, Flex, Link, IconButton } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box as="footer" bg="blue.300" color="gray.900" fontWeight={700} py={4} mb={2} width={"80%"} rounded={25}>
        <Flex align="center" justify={"center"}>
            <IconButton
              as={Link}
              href="https://github.com/vdipaola"
              target='_blank'
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="black"
              mr={6}
              size={"lg"}
              fontSize={"24px"}
            />
            <IconButton
              as={Link}
              href="https://twitter.com/enzo_dev"
              target='_blank'
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              colorScheme="black"
              size={"lg"}
              fontSize={"24px"}
            />
          </Flex>
    </Box>
  )
}
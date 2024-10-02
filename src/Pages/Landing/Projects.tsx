import { Box, Heading, VStack, Container, SlideFade } from '@chakra-ui/react'
import ProjectComponent from './ProjectComponent'
import { projectData } from '../../Resources/ProjectData'

export default function Projects() {
  return (
        <Box as="section" id="projects" py={16}>
            <SlideFade in={true} offsetY="20px" transition={{enter: { duration: 0.5, ease: "easeInOut"}}}>
                <Container maxW="container.xl">
                    <Heading
                    as="h2"
                    size="2xl"
                    mb={12}
                    textAlign="center"
                    color="white"
                    fontWeight="bold"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                    Projects
                    </Heading>
                    <VStack spacing={8} align="stretch">
                    {projectData.map((project) => (
                        <ProjectComponent key={project.title} {...project} />
                    ))}
                    </VStack>
                </Container>
            </SlideFade>
        </Box>
  )
}
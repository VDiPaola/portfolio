import React, { useState } from 'react'
import { Box, Heading, Text, Progress, Flex, Badge, Button } from '@chakra-ui/react'
import { ProjectPropsType } from '../../Helpers/Types/ProjectTypes'

const ProjectComponent: React.FC<ProjectPropsType> = ({ title, description, progress, latestUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      borderWidth={1}
      borderColor="gray.700"
      borderRadius="lg"
      p={6}
      bg="gray.800"
      _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s ease' }}
      className="shadow-lg hover:shadow-xl"
      onClick={() => setIsOpen(!isOpen)}
      cursor="pointer"
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h3" size="lg" color="white">
          {title}
        </Heading>
        <Badge colorScheme={progress >= 75 ? 'green' : 'orange'} fontSize="0.8em" px={2} py={1}>
          {progress}% Complete
        </Badge>
      </Flex>
      <Text color="gray.300" mb={4}>
        {description}
      </Text>
      <Progress
        value={progress}
        colorScheme={progress >= 75 ? 'green' : 'orange'}
        borderRadius="full"
        size="sm"
        mb={4}
      />
      {isOpen && latestUpdate && (
        <Box mt={4} p={4} bg="gray.700" borderRadius="md">
          <Text color="white" fontWeight="bold" mb={2}>
            Latest Update: {new Date(latestUpdate.date).toLocaleDateString()}
          </Text>
          <Text color="gray.300">{latestUpdate.description}</Text>
        </Box>
      )}
    </Box>
  )
}

export default ProjectComponent
import { ProjectPropsType } from "../Helpers/Types/ProjectTypes";

export const projectData: ProjectPropsType[] = [
    {
      title: 'Story Craft',
      description: 'Interactive Story creation platform',
      progress: 30,
      latestUpdate: {
          date: '2024-10-03',
          description: 'Improved a lot of the UI/UX with Chakra UI, ready to beta test'
      }
    },
    {
        title: 'Book Illustrator',
        description: 'Populate E-Books with AI generated illustrations',
        progress: 0,
      },
    {
      title: 'AI Dungeon',
      description: 'Multiplayer dungeons and dragons style game with an AI dungeon master',
      progress: 15,
    },
    {
      title: 'Neurolastic',
      description: 'Uses AI to create personalized educational content',
      progress: 5,
      latestUpdate: {
        date: '2024-10-02',
        description: 'Generated starting point with marblism'
    }
    },
    {
      title: 'Gaim',
      description: 'Aim trainer inspired sandbox game',
      progress: 5,
    },
  ]
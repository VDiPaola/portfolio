export type ProjectPropsType = {
    title: string;
    description: string;
    progress: number;
    latestUpdate?: {
        date: string;
        description: string;
    }
  }
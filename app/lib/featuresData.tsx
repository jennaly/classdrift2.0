export type Features = Feature[];

export type Feature = {
  heading: {
    main: string;
    details: string;
  };
  subheading?: {
    main: string;
    details: string;
  };
  image: {
    url: string;
    position?: string;
    alt: string;
    style?: string;
  };
  style?: string;
};
export const features: Features = [
  {
    heading: {
      main: "Fast, beautiful curriculum planning",
      details: "with lessonbooks, customizable content blocks, and more",
    },
    subheading: {
      main: "Track state & district standards",
      details: "Share lessons with students or parents",
    },
    image: {
      url: "/features/lessons.png",
      position: "end",
      alt: "Screenshots of the lessons tab in Classdrift",
      style: "w-full pl-10 lg:mt-16 max-w-[1400px]",
    },
    style: "col-span-2 lg:flex",
  },
  {
    heading: {
      main: "Organize your teaching materials",
      details: "and pull any file in seconds",
    },
    image: {
      url: "/features/materials.png",
      position: "start",
      alt: "Screenshots of the materials tab in Classdrift",
      style: "w-10/12",
    },
  },
  {
    heading: {
      main: "Keep track of todos",
      details: "with tasks and sticky notes",
    },
    image: {
      url: "/features/tasks-notes.png",
      alt: "Screenshots of the tasks and notes tab in Classdrift",
      style: "w-full",
    },
  },
  {
    heading: {
      main: "Monitor student success",
      details: "across all of your classrooms",
    },
    image: {
      url: "/features/students.png",
      alt: "Screenshots of the students tab in Classdrift",
      style: "w-full",
    },
  },
  {
    heading: {
      main: "Sync all of your calendars",
      details: "and organize your events",
    },
    image: {
      url: "/features/calendar.png",
      position: "end",
      alt: "Screenshots of the calendar tab in Classdrift",
      style: "w-10/12",
    },
  },
];

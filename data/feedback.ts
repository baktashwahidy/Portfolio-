export type ClientFeedback = {
  platform: string;
  client: string;
  role?: string;
  rating?: string;
  image: {
    src: string;
    alt: string;
  };
};

export const clientFeedback: ClientFeedback[] = [
  {
    platform: "Upwork",
    client: "Client Name",
    role: "Brand Identity",
    rating: "5.0",
    image: {
      src: "/images/feedback/upwork-01.jpg",
      alt: "Client feedback from Upwork",
    },
  },
  {
    platform: "Upwork",
    client: "Client Name",
    role: "Social Media Design",
    rating: "5.0",
    image: {
      src: "/images/feedback/upwork-02.jpg",
      alt: "Client feedback from Upwork",
    },
  },
  {
    platform: "Fiverr",
    client: "Client Name",
    role: "Logo Design",
    rating: "5.0",
    image: {
      src: "/images/feedback/fiverr-01.jpg",
      alt: "Client feedback from Fiverr",
    },
  },
  {
    platform: "Fiverr",
    client: "Client Name",
    role: "Brand Identity",
    rating: "5.0",
    image: {
      src: "/images/feedback/fiverr-02.jpg",
      alt: "Client feedback from Fiverr",
    },
  },
  {
    platform: "Preply",
    client: "Client Name",
    role: "Freelance Training",
    rating: "5.0",
    image: {
      src: "/images/feedback/preply-01.jpg",
      alt: "Client feedback from Preply",
    },
  },
  {
    platform: "Freelancer",
    client: "Client Name",
    role: "Graphic Design",
    rating: "5.0",
    image: {
      src: "/images/feedback/freelancer-01.jpg",
      alt: "Client feedback from Freelancer",
    },
  },
  {
    platform: "Contra",
    client: "Client Name",
    role: "Branding Project",
    rating: "5.0",
    image: {
      src: "/images/feedback/contra-01.jpg",
      alt: "Client feedback from Contra",
    },
  },
  {
    platform: "LinkedIn",
    client: "Client Name",
    role: "Design Project",
    rating: "5.0",
    image: {
      src: "/images/feedback/linkedin-01.jpg",
      alt: "Client feedback from LinkedIn",
    },
  },
];
export interface TeamMember {
  id: number;
  name: string;
  year: string;
  bio: string;
  image: string;
  links: {
    label: string;
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Javier Torralbo Cortés',
    year: '3º de Ingeniería Informática',
    bio: '',
    image: '/images/Javier.jpeg',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/javiertorralbocortes',
      },
      { label: 'Email', url: 'mailto:javiertorralbocortes@gmail.com' },
    ],
  },
  {
    id: 2,
    name: 'Alejandro Cerezo',
    year: '3º de Ingeniería de Software',
    bio: '',
    image: '/images/Alex.png',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/alexcerezocontreras',
      },
      { label: 'Email', url: 'mailto:' },
    ],
  },
];

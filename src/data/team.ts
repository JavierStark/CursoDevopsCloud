export interface TeamMember {
  id: number;
  name: string;
  year: string;
  profile: string;
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
    profile: 'Estudiante passionate sobre DevOps',
    bio: 'Apasionado por la cultura DevOps, la automatización de procesos y la gestión de infraestructuras. Convencido de que la automatización es la clave para escalar sistemas complejos y reducir errores humanos.',
    image: '/images/javier-placeholder.jpg',
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
    year: '3º de Ingeniería Informática',
    profile: 'Ingeniero Cloud & Kubernetes',
    bio: 'Enfocado en el desarrollo nativo en la nube, arquitecturas distribuidas y orquestación de contenedores. Especializado en construcción de sistemas resilientes y escalables con Kubernetes y AWS.',
    image: '/images/alejandro-placeholder.jpg',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/alexcerezocontreras',
      },
      { label: 'Email', url: 'mailto:' },
    ],
  },
];

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
    bio: 'Apasionado por la cultura DevOps, la automatización de procesos y la gestión de infraestructuras. Convencido de que la automatización es la clave para escalar sistemas complejos y reducir errores humanos.',
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
    bio: 'Enfocado en el desarrollo nativo en la nube, arquitecturas distribuidas y orquestación de contenedores. Especializado en construcción de sistemas resilientes y escalables con Kubernetes y AWS.',
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

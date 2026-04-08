export interface Module {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  speakers?: {
    name: string;
    role: string;
  }[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Fundamentos de Contenerización con Docker',
    date: 'Miércoles 22 de abril',
    duration: '2 horas',
    description:
      'Esta sesión inicial sienta las bases del curso explicando la diferencia entre aislamiento de procesos y virtualización tradicional. Tras una breve introducción a la arquitectura de Docker, nos centraremos en el dominio de la interfaz de línea de comandos (CLI) y el uso de Docker Desktop. Como paso fundamental antes de cualquier automatización, dedicaremos un bloque específico a enseñar cómo configurar Dockerfiles desde cero, analizando la selección de imágenes base, la gestión de capas y las buenas prácticas de seguridad. Finalmente, introduciremos Docker Compose para la orquestación de servicios locales.',
    technologies: ['Docker', 'CLI', 'Docker Desktop', 'Docker Compose'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-1-docker',
  },
  {
    id: 2,
    title: 'Cloud Computing Local con AWS y LocalStack',
    date: 'Miércoles 29 de abril',
    duration: '2 horas',
    description:
      'En este bloque trasladamos el desarrollo a la nube sin salir del entorno local, eliminando barreras de costes y riesgos de facturación. Utilizando LocalStack, simularemos un entorno de Amazon Web Services (AWS) donde los alumnos aprenderán a interactuar con servicios de almacenamiento de objetos mediante S3 y a gestionar bases de datos tanto relacionales (RDS) como NoSQL (DynamoDB). Se profundizará en la lógica "Serverless" mediante el despliegue de funciones Lambda a través de la CLI. De manera opcional, dependiendo del ritmo, exploraremos la conexión con SQS.',
    technologies: ['AWS', 'LocalStack', 'S3', 'DynamoDB', 'Lambda', 'RDS'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-2-aws-localstack',
    speakers: [
      {
        name: 'Especialista en Cloud de AWS',
        role: 'Experto en Arquitecturas Cloud',
      },
    ],
  },
  {
    id: 3,
    title: 'Orquestación de Sistemas con Kubernetes',
    date: 'Miércoles 6 de mayo',
    duration: '2 horas',
    description:
      'El tercer taller eleva la complejidad hacia la gestión de contenedores a gran escala. Simularemos un entorno de Amazon EKS sobre LocalStack para que los alumnos experimenten con un cluster real de Kubernetes. Tras explicar los conceptos de Pods, Deployments y Services, nos enfocaremos plenamente en la herramienta kubectl. La formación será eminentemente diagnóstica: plantearemos problemas reales mediante archivos YAML erróneos o mal configurados que los alumnos deberán corregir. Aprenderán a realizar procesos de debug, análisis de logs y conexión de servicios internos.',
    technologies: ['Kubernetes', 'Amazon EKS', 'kubectl', 'YAML'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-3-kubernetes',
    speakers: [
      {
        name: 'Especialista en Kubernetes',
        role: 'Arquitecto de Sistemas Distribuidos',
      },
    ],
  },
  {
    id: 4,
    title: 'Automatización con GitHub Actions y Terraform (IaC)',
    date: 'Miércoles 13 de mayo',
    duration: '2 horas',
    description:
      'La sesión final integra todos los conocimientos previos en un flujo de trabajo automatizado. Definiremos los conceptos de Integración Continua (CI) y Despliegue Continuo (CD) utilizando GitHub Actions como motor principal. Los alumnos configurarán pipelines para ejecutar tests automáticos ante cada "push" y realizar despliegues en GitHub Pages. Introduciremos el concepto de Infraestructura como Código (IaC) mediante Terraform, mostrando cómo se puede automatizar el aprovisionamiento de recursos. Finalizaremos con una comparativa sobre cómo este flujo local se traslada a una nube real de AWS y pruebas de integración con LocalStack.',
    technologies: ['GitHub Actions', 'Terraform', 'CI/CD', 'GitHub Pages'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-4-cicd-terraform',
  },
];

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
    url?: string;
  }[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Fundamentos de Contenerización con Docker',
    date: 'Miércoles 22 de abril',
    duration: '2 horas',
    description:
      'Esta sesión inicial sienta las bases del curso explicando la diferencia entre aislamiento de procesos y virtualización tradicional. Tras una breve introducción a la arquitectura de Docker, nos centraremos en el dominio de la interfaz de línea de comandos (CLI) y el uso de Docker Desktop. Como paso fundamental antes de cualquier automatización, dedicaremos un bloque específico a enseñar cómo configurar Dockerfiles desde cero, analizando la selección de imágenes base, la gestión de capas y las buenas prácticas de seguridad. Finalmente, introduciremos Docker Compose para la orquestación de servicios locales, donde los alumnos deberán aplicar lo aprendido para dockerizar una aplicación real a partir de un repositorio de código que nosotros les facilitaremos.',
    technologies: ['Docker', 'CLI', 'Docker Desktop', 'Docker Compose'],
    repositoryUrl: 'https://github.com/JavierStark/CursoDevOpsCloud_Docker',
    speakers: [
      {
        name: 'Iñaki Respaldiza',
        role: 'Organizador Docker Sevilla',
        url: 'https://www.linkedin.com/in/irespaldiza/',
      },
    ],
  },
  {
    id: 2,
    title: 'Cloud Computing con AWS',
    date: 'Miércoles 29 de abril',
    duration: '2 horas',
    description:
      'En este bloque exploraremos de manera directa el ecosistema de Amazon Web Services (AWS), centrándonos en los servicios que forman la columna vertebral de la infraestructura en la nube actual. El taller se enfocará en la interacción con servicios esenciales de almacenamiento de objetos mediante S3 y en la gestión de bases de datos tanto relacionales (RDS) como NoSQL (DynamoDB). Se profundizará en la arquitectura "Serverless" mediante el despliegue y configuración de funciones Lambda a través de la interfaz de línea de comandos (CLI), permitiendo una comprensión real de la ejecución de código bajo demanda. De forma opcional, y en función del ritmo del grupo, introduciremos el uso de colas de mensajería con SQS para comprender la comunicación asíncrona en arquitecturas distribuidas modernas.',
    technologies: ['AWS', 'S3', 'RDS', 'DynamoDB', 'Lambda', 'SQS'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-2-aws-localstack',
    speakers: [
      {
        name: 'AWS User Group Málaga',
        role: 'Organizadores AWS User Group Málaga',
        url: 'https://www.linkedin.com/company/aws-ug-m%C3%A1laga/',
      },
    ],
  },
  {
    id: 3,
    title: 'Orquestación de Sistemas con Kubernetes',
    date: 'Miércoles 6 de mayo',
    duration: '2 horas',
    description:
      'El tercer taller eleva la complejidad hacia la gestión de contenedores a gran escala mediante el ecosistema de Kubernetes. Tras explicar los conceptos fundamentales de la arquitectura, como Pods, Deployments y Services, nos enfocaremos plenamente en el dominio de la herramienta kubectl para la administración del cluster. La formación tendrá un enfoque eminentemente diagnóstico: plantearemos retos basados en problemas reales mediante archivos de configuración YAML con errores que los alumnos deberán identificar y corregir. A través de este proceso práctico, aprenderán a realizar tareas de depuración, análisis de logs y conexión de servicios internos, desarrollando así competencias críticas para el despliegue y mantenimiento de infraestructuras complejas.',
    technologies: ['Kubernetes', 'kubectl', 'YAML', 'Pods', 'Deployments', 'Services'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-3-kubernetes',
    speakers: [
      {
        name: '[Nombres por confirmar]',
        role: 'Miembros CNCF Málaga',
        url: 'https://community.cncf.io/cloud-native-malaga/'
      },
    ],
  },
  {
    id: 4,
    title: 'Automatización con GitHub Actions y Terraform (IaC)',
    date: 'Miércoles 13 de mayo',
    duration: '2 horas',
    description:
      'La sesión final integra todos los conocimientos previos en un flujo de trabajo automatizado. Definiremos los conceptos de Integración Continua (CI) y Despliegue Continuo (CD) utilizando GitHub Actions como motor principal. Los alumnos configurarán pipelines para ejecutar tests automáticos ante cada "push" y realizar despliegues en GitHub Pages. Como novedad fundamental, introduciremos ligeramente el concepto de Infraestructura como Código (IaC) mediante Terraform, mostrando cómo se puede automatizar el aprovisionamiento de recursos. Finalizaremos con una comparativa sobre cómo este flujo local se trasladaría al despliegue automático en la nube.',
    technologies: ['GitHub Actions', 'Terraform', 'CI/CD', 'GitHub Pages'],
    repositoryUrl: 'https://github.com/javierTorrebloCortez/modulo-4-cicd-terraform',
    speakers: [
      {
        name: 'Jorge Hidalgo',
        role: 'Organizador de OpenSouthCode y MálagaJUG',
        url: 'https://www.linkedin.com/in/deors/',
      },
    ],
  },
];

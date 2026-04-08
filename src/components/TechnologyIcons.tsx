interface TechnologyIconsProps {
  technologies: string[];
  size?: 'sm' | 'md' | 'lg';
}

const getLabel = (tech: string): string => {
  const labels: Record<string, string> = {
    Docker: 'Docker',
    AWS: 'AWS',
    Kubernetes: 'K8s',
    'Amazon EKS': 'EKS',
    Terraform: 'Terraform',
    LocalStack: 'LocalStack',
    S3: 'S3',
    DynamoDB: 'DynamoDB',
    Lambda: 'Lambda',
    RDS: 'RDS',
    SQS: 'SQS',
    kubectl: 'kubectl',
    YAML: 'YAML',
    'GitHub Pages': 'Pages',
    'GitHub Actions': 'Actions',
    'CI/CD': 'CI/CD',
    CLI: 'CLI',
    'Docker Desktop': 'Desktop',
    'Docker Compose': 'Compose',
  };

  return labels[tech] || tech;
};

const getTechEmoji = (tech: string): string => {
  const emojis: Record<string, string> = {
    Docker: '🐳',
    AWS: '☁️',
    Kubernetes: '☸️',
    'Amazon EKS': '☁️',
    Terraform: '🏗️',
    LocalStack: '🗂️',
    S3: '📦',
    DynamoDB: '💾',
    Lambda: '⚡',
    RDS: '🗄️',
    SQS: '📨',
    kubectl: '⚙️',
    YAML: '📋',
    'GitHub Pages': '📄',
    'GitHub Actions': '🤖',
    'CI/CD': '🔄',
    CLI: '💻',
    'Docker Desktop': '🖥️',
    'Docker Compose': '📚',
  };

  return emojis[tech] || '🔧';
};

export default function TechnologyIcons({
  technologies,
  size = 'md',
}: TechnologyIconsProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <>
      {technologies.map((tech) => (
        <div
          key={tech}
          className={`${sizeClasses[size]} bg-gray-700 border border-gray-600 rounded-lg flex items-center gap-2 text-gray-200 hover:bg-gray-600 transition`}
          title={tech}
        >
          <span className="flex-shrink-0">{getTechEmoji(tech)}</span>
          <span className="whitespace-nowrap">{getLabel(tech)}</span>
        </div>
      ))}
    </>
  );
}

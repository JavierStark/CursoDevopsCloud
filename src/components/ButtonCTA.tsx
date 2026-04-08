import Link from 'next/link';

interface ButtonCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}

export default function ButtonCTA({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonCTAProps) {
  const baseClasses = 'inline-block px-6 py-3 rounded font-semibold transition duration-200 text-center';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-100 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-500" />}
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
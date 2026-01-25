import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "mb-16",
        align === 'center' && "text-center",
        align === 'left' && "text-left",
        align === 'right' && "text-right",
        className
      )}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "max-w-4xl text-lg font-medium text-rich-text/60 leading-relaxed",
          align === 'center' && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

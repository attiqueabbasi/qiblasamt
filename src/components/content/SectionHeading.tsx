interface SectionHeadingProps {
  title: string;
  align?: 'center' | 'start';
}

export default function SectionHeading({ title, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="text-2xl font-extrabold text-text sm:text-3xl">{title}</h2>
    </div>
  );
}

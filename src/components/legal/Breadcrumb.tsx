import Container from '../Container';

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="border-b border-border bg-white py-3 dark:bg-bg">
      <Container width="wide">
        <nav aria-label="مسار التصفح" className="flex items-center gap-2 text-sm text-text-secondary">
          <a href="/" className="hover:text-primary">
            الرئيسية
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-text">{current}</span>
        </nav>
      </Container>
    </div>
  );
}

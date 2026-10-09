
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 border-b border-line pb-5">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-teal">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
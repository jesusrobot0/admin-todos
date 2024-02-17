interface Props {
  title: string;
  description?: string;
}

export function TitlePage({ title, description }: Props) {
  return (
    <div>
      <h1 className="mb-2 text-3xl capitalize text-[#222]">{title}</h1>
      <p className="xl text-[#848b9a]">{description}</p>
    </div>
  );
}

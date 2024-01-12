interface props {
  params: {
    slug: string;
  };
}

export default function PageProduct({ params: { slug } }: props) {
  return (
    <>
      <h1 className="text-xl font-medium">Productos {slug}</h1>
    </>
  );
}

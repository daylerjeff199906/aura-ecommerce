import { ListSection } from "./(sections)/listSection";

export default function ProductsPage() {
  return (
    <>
      <h1 className="text-xl font-medium">Productos</h1>
      <section className="py-6">
        <ListSection />
      </section>
    </>
  );
}

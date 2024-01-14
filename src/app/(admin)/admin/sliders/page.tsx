import { FrmSlider } from "./(sections)/frmSlider";
import { ListSection } from "./(sections)/listSection";
export default function PageSliders() {
  return (
    <div className="pb-12">
      <h1 className="text-xl font-medium">Sliders</h1>
      <section className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FrmSlider />
          <ListSection />
        </div>
      </section>
    </div>
  );
}

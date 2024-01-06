import { FiltersSection } from "./FiltersSection";
import { ListSection } from "./ListSection";
import { SearchSection } from "./SearchSection";

export const IndexPage = () => {
  return (
    <>
      <div className="sticky top-20 max-h-screen sm:top-20 z-30 ">
        <SearchSection />
      </div>
      <div className="flex w-full pb-6  lg:pb-8 gap-6  bg-white container">
        <FiltersSection />
        <ListSection />
      </div>
    </>
  );
};

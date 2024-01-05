import { FiltersSection } from "./FiltersSection";
import { ListSection } from "./ListSection";
import { SearchSection } from "./SearchSection";

export const IndexPage = () => {
  return (
    <>
      <div className="sticky top-16 max-h-screen sm:top-24 z-30 ">
        <SearchSection />
      </div>
      <div className="flex w-full pb-6  lg:pb-8 gap-6  bg-white container max-w-7xl">
        <FiltersSection />
        <ListSection />
      </div>
    </>
  );
};

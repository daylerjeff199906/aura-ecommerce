import { Accordion, AccordionItem } from "@nextui-org/react";

export const FiltersSection = () => {
  return (
    <aside className="hidden lg:block lg:max-w-[14rem] xl:max-w-[16rem] w-full sm:sticky sm:h-screen  sm:top-48">
      <Accordion>
        <AccordionItem title="Categorías">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Categoría 1</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Categoría 2</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Categoría 3</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Categoría 4</label>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

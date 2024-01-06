// import { useLogicPrograms } from "@/providers/programsProvider";
import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { IconSearch, IconListDetails, IconCategory } from "@tabler/icons-react";
import { useFilterFromUrl } from "@/hooks";

export const SearchSection = () => {
  // const { setFilters } = useLogicPrograms();
  const { getParams } = useFilterFromUrl();

  const isGallery = getParams("type_list", "");
  const textSearch = getParams("search", "");

  return (
    <div className="bg-white pt-6">
      <div className="py-4 w-full">
        <div className="flex w-full gap-2 sm:gap-6 items-center container">
          <div className="hidden lg:block w-full lg:max-w-[14rem] xl:max-w-[16rem]">
            <h1 className="text-sm font-medium sm:text-lg text-zinc-600 w-full">
              Filtros
            </h1>
          </div>
          <div className="flex w-full gap-2 sm:gap-4 items-center">
            <Input
              fullWidth
              isClearable
              startContent={<IconSearch size={20} />}
              radius="sm"
              placeholder="Buscar"
              variant="bordered"
              value={textSearch}
              // onValueChange={(value) => {
              //   setFilters("search", value);
              // }}
              size="sm"
            />
            <div className="hidden sm:block">
              <ButtonGroup radius="sm" size="md">
                <Button
                  startContent={<IconCategory size={20} />}
                  // onClick={() => {
                  //   setFilters("type_list", "");
                  // }}
                  color={isGallery === "" ? "danger" : "default"}
                  variant={isGallery !== "" ? "bordered" : undefined}
                  radius="none"
                >
                  Galeria
                </Button>
                <Button
                  startContent={<IconListDetails size={20} />}
                  // onClick={() => {
                  //   setFilters("type_list", "list");
                  // }}
                  color={isGallery === "list" ? "danger" : "default"}
                  variant={isGallery !== "list" ? "bordered" : undefined}
                  radius="none"
                >
                  Lista
                </Button>
              </ButtonGroup>
            </div>
            <div className="block sm:hidden">
              <ButtonGroup radius="sm" size="lg">
                <Button
                  startContent={<IconCategory size={16} />}
                  isIconOnly
                  color={isGallery === "" ? "danger" : "default"}
                  variant={isGallery !== "" ? "bordered" : undefined}
                  radius="none"
                  // onClick={() => {
                  //   setFilters("type_list", "");
                  // }}
                />
                <Button
                  startContent={<IconListDetails size={16} />}
                  isIconOnly
                  color={isGallery === "list" ? "danger" : "default"}
                  variant={isGallery !== "list" ? "bordered" : undefined}
                  radius="none"
                  // onClick={() => {
                  //   setFilters("type_list", "list");
                  // }}
                />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

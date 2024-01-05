import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useFilterFromUrl = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParams = (nameParams: string, defaultValue: string) => {
    const value = searchParams.get(nameParams);
    if (value === null) {
      return defaultValue;
    }
    return value;
  };

  const updateFilter = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value === "") {
        params.delete(name);
      } else {
        if (name === "currentPage") {
          params.set(name, value);
        } else {
          params.delete("currentPage");
          params.set(name, value);
        }
      }

      const queryString = params.toString();
      router.push(`${pathname}?${queryString}`);
    },
    [searchParams, router, pathname]
  );

  return {
    getParams,
    updateFilter,
  };
};

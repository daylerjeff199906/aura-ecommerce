import { AdvertisementSection } from "./(sections)/advertisementSection";
import { Banner } from "./(sections)/bannerSection";
import { CategoriesSection } from "./(sections)/categoriesSection";
import { RecentProducts } from "./(sections)/recentProducts";
import { StoreSection } from "./(sections)/storeSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <RecentProducts />
      <AdvertisementSection />
      <CategoriesSection />
      {/* <StoreSection /> */}
    </>
  );
}

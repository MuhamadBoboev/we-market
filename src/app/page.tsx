import { mainPageMetadata } from "@shared/const/seo/metadata";
import { MainBanner } from "@widgets/mainBanner";
import { ProductList } from "@widgets/products/ui";

export const metadata = mainPageMetadata

export default function Home() {
  return (
    <main>
      <MainBanner />
      <ProductList />
    </main>
  );
}

import { Wrapper } from "@shared/ui/Wrapper";
import { MainBanner } from "@widgets/mainBanner";
import { ProductList } from "@widgets/products/ui";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <ProductList />
    </main>
  );
}

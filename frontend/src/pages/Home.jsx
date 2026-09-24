import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PromoGrid from "../components/PromoGrid";
import Footer from "../components/Footer";
import StoreLocator from "../components/StoreLocator";
import { stores } from "../data/stores";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <PromoGrid />
      </main>
      <StoreLocator stores={stores} />

      <Footer />
    </>
  );
}

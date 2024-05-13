import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import HeroBlock from "@/components/hero-block/HeroBlock";
import TermsGrid from "@/components/terms-grid/TermsGrid";

export default function Home() {
  return (
    <main>
      <HeroBlock />
      <GalleryGrid />
      <TermsGrid />
    </main>
  );
}

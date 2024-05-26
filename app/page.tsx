import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import HeroBlock from "@/components/hero-block/HeroBlock";
import TermsGrid from "@/components/terms-grid/TermsGrid";


export default function Home() {
  return (
    <main>
      <HeroBlock />
      <GalleryGrid
        type={"three"}
        data={[
          {
            title: "Web Design",
            desktopImg: "/assets/home/desktop/image-web-design-large.jpg",
            mobileImg: "/assets/home/desktop/image-web-design-small.jpg",
            link: "/web-design"
          },
          {
            title: "App Design",
            desktopImg: "/assets/home/desktop/image-app-design.jpg",
            mobileImg: "/assets/home/desktop/image-app-design.jpg",
            link: "/app-design"
          },
          {
            title: "Graphic Design",
            desktopImg: "/assets/home/desktop/image-graphic-design.jpg",
            mobileImg: "/assets/home/desktop/image-graphic-design.jpg",
            link: "/graphic-design"
          }
        ]}
      />
      <TermsGrid />
    </main>
  );
}

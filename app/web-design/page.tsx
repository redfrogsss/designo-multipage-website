import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import SectionHeader from "@/components/section-header/SectionHeader";

export default function WebDesignPage() {
    return (
        <main>
            <SectionHeader title="Web Design" desc="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
            <GalleryGrid
                type={"two"}
                data={[
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
        </main>
    );
}
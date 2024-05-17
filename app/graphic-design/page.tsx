
import CardList from "@/components/card-list/CardList";
import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import SectionHeader from "@/components/section-header/SectionHeader";

export default function GraphicDesignPage() {
    return (
        <main>
            <SectionHeader title="Graphic Design" desc="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
            <CardList
                data={[
                    {
                        href: "#!",
                        img: "/assets/graphic-design/desktop/image-change.jpg",
                        title: "Tim Brown",
                        desc: "A book cover designed for Tim Brown’s new release, ‘Change’"
                    },
                    {
                        href: "#!",
                        img: "/assets/graphic-design/desktop/image-boxed-water.jpg",
                        title: "Boxed Water",
                        desc: "A simple packaging concept made for Boxed Water"
                    },
                    {
                        href: "#!",
                        img: "/assets/graphic-design/desktop/image-science.jpg",
                        title: "Science!",
                        desc: "A poster made in collaboration with the Federal Art Project"
                    },
                ]}

            />
            <GalleryGrid
                type={"two"}
                data={[
                    {
                        title: "App Design",
                        desktopImg: "/assets/home/desktop/image-app-design.jpg",
                        mobileImg: "/assets/home/desktop/image-app-design.jpg",
                        link: "/graphic-design"
                    },
                    {
                        title: "Web Design",
                        desktopImg: "/assets/home/desktop/image-web-design-large.jpg",
                        mobileImg: "/assets/home/desktop/image-web-design-small.jpg",
                        link: "/web-design"
                    },
                ]}
            />
        </main>
    );
}
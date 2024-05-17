import CardList from "@/components/card-list/CardList";
import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import SectionHeader from "@/components/section-header/SectionHeader";

export default function WebDesignPage() {
    return (
        <main>
            <SectionHeader title="Web Design" desc="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
            <CardList
                data={[
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-express.jpg",
                        title: "Express",
                        desc: "A multi-carrier shipping website for ecommerce businesses"
                    },
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-transfer.jpg",
                        title: "Transfer",
                        desc: "Site for low-cost money transfers and sending money within seconds"
                    },
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-photon.jpg",
                        title: "Photon",
                        desc: "A state-of-the-art music player with high-resolution audio and DSP effects"
                    },
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-builder.jpg",
                        title: "Builder",
                        desc: "Connects users with local contractors based on their location"
                    },
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-blogr.jpg",
                        title: "Blogr",
                        desc: "Blogr is a platform for creating an online blog or publication"
                    },
                    {
                        href: "#!",
                        img: "/assets/web-design/desktop/image-camp.jpg",
                        title: "Camp",
                        desc: "Get expert training in coding, data, design, and digital marketing"
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
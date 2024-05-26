
import CardList from "@/components/card-list/CardList";
import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import SectionHeader from "@/components/section-header/SectionHeader";

export default function AppDesignPage() {
    return (
        <main>
            <SectionHeader title="App Design" desc="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />
            <CardList
                data={[
                    {
                        href: "https://github.com/redfrogsss/designo-multipage-website",
                        img: "/assets/app-design/desktop/image-airfilter.jpg",
                        title: "AirFilter",
                        desc: "Solving the problem of poor indoor air quality by filtering the air"
                    },
                    {
                        href: "https://github.com/redfrogsss/designo-multipage-website",
                        img: "/assets/app-design/desktop/image-eyecam.jpg",
                        title: "Eyecam",
                        desc: "Product that lets you edit your favorite photos and videos at any time"
                    },
                    {
                        href: "https://github.com/redfrogsss/designo-multipage-website",
                        img: "/assets/app-design/desktop/image-faceit.jpg",
                        title: "FaceIT",
                        desc: "Get to meet your favorite internet superstar with the faceit app"
                    },
                    {
                        href: "https://github.com/redfrogsss/designo-multipage-website",
                        img: "/assets/app-design/desktop/image-todo.jpg",
                        title: "Todo",
                        desc: "A todo app that features cloud sync with light and dark mode"
                    },
                    {
                        href: "https://github.com/redfrogsss/designo-multipage-website",
                        img: "/assets/app-design/desktop/image-loopstudios.jpg",
                        title: "Loopstudios",
                        desc: "A VR experience app made for Loopstudios"
                    },
                ]}

            />
            <GalleryGrid
                type={"two"}
                data={[
                    {
                        title: "Web Design",
                        desktopImg: "/assets/home/desktop/image-web-design-large.jpg",
                        mobileImg: "/assets/home/desktop/image-web-design-small.jpg",
                        link: "/web-design"
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
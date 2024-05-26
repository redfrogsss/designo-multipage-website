import FadeInBottom from "../utils/FadeInBottom"
import GalleryGridItem from "./GalleryGridItem"

export default function GalleryGrid({
    type = "three",
    data = [
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
            link: "#!"
        },
        {
            title: "Graphic Design",
            desktopImg: "/assets/home/desktop/image-graphic-design.jpg",
            mobileImg: "/assets/home/desktop/image-graphic-design.jpg",
            link: "#!"
        }
    ]
}: {
    type: "three" | "two",
    data: {
        title: string
        desktopImg: string
        mobileImg: string
        link: string
    }[]
}
) {
    return (
        <section className={`gallery-grid component-gap${type == "two" ? " gallery-grid--two-col" : ""}`}>
            <div className="page-container">
                <FadeInBottom>
                    {type === "three" && <div className="gallery-grid__inner">
                        <div className="gallery-grid__left">
                            <GalleryGridItem
                                key={0}
                                type="tall"
                                desktopImg={data[0].desktopImg}
                                mobileImg={data[0].mobileImg}
                                title={data[0].title}
                                link={data[0].link}
                            />
                        </div>
                        <div className="gallery-grid__right">
                            <GalleryGridItem
                                type="normal"
                                desktopImg={data[1].desktopImg}
                                title={data[1].title}
                                link={data[1].link}
                            />
                            <GalleryGridItem
                                type="normal"
                                desktopImg={data[2].desktopImg}
                                title={data[2].title}
                                link={data[2].link}
                            />
                        </div>
                    </div>
                    }
                    {type === "two" && <div className="gallery-grid__inner">
                        <GalleryGridItem
                            key={0}
                            type="normal"
                            desktopImg={data[0].desktopImg}
                            mobileImg={data[0].mobileImg}
                            title={data[0].title}
                            link={data[0].link}
                        />
                        <GalleryGridItem
                            type="normal"
                            desktopImg={data[1].desktopImg}
                            title={data[1].title}
                            link={data[1].link}
                        />
                    </div>
                    }
                </FadeInBottom>
            </div>
        </section>
    );
}
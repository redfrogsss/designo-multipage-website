import Image from "next/image";

export default function GalleryGridItem(
    {
        link = "#!",
        type = "normal",
        desktopImg = "/assets/home/desktop/image-web-design-large.jpg",
        title = "Web Design"
    }: {
        link: string,
        type?: "normal" | "tall",
        desktopImg: string,
        title: string
    }
) {
    return (
        <a href={link} className={`gallery-grid-item ${type == "tall" ? "gallery-grid-item--tall" : ""}`}>
            <div className="gallery-grid-item__pic-layer">
                <Image src={desktopImg} alt="image web desktop large" fill={true} className="gallery-grid-item__pic" />
            </div>
            <div className="gallery-grid-item__text-layer">
                <div className="gallery-grid-item__text-wrapper">
                    <span className="gallery-grid-item__title ">{title}</span>
                    <span className="gallery-grid-item__desc">View Projects<span className="gallery-grid-item__desc-arrow"></span></span>
                </div>
            </div>
        </a>
    );
}
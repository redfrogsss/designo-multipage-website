import GalleryGridItem from "./GalleryGridItem"

export default function GalleryGrid() {
    return (
        <section className="gallery-grid component-gap">
            <div className="page-container">
                <div className="gallery-grid__inner">
                    <div className="gallery-grid__left">
                        <GalleryGridItem
                            type="tall"
                            desktopImg="/assets/home/desktop/image-web-design-large.jpg"
                            mobileImg= "/assets/home/desktop/image-web-design-small.jpg"
                            title="Web Design"
                            link="#!"
                        />
                    </div>
                    <div className="gallery-grid__right">
                        <GalleryGridItem
                            type="normal"
                            desktopImg="/assets/home/desktop/image-app-design.jpg"
                            title="App Design"
                            link="#!"
                        />
                        <GalleryGridItem
                            type="normal"
                            desktopImg="/assets/home/desktop/image-graphic-design.jpg"
                            title="Graphic Design"
                            link="#!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
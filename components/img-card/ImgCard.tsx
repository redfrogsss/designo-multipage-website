export default function ImgCard({ img, tabletImg = img, mobileImg = img, title, desc, reverse = false }: { img: string; mobileImg?: string; tabletImg?: string; title: string; desc: string, reverse?: boolean }) {
    return (
        <div className={`img-card component-gap${reverse ? " img-card--reverse" : ""}`}>
            <div className="page-container">
                <div className="img-card__inner">
                    <div className="img-card__left">
                        <picture className="img-card__pic">
                            <source media="(max-width: 991px)" srcSet={tabletImg}></source>
                            <source media="(max-width: 640px)" srcSet={mobileImg}></source>
                            <img src={img} alt={title} className="img-card__img" />
                        </picture>
                    </div>
                    <div className="img-card__right">
                        <h2 className="img-card__title">{title}</h2>
                        <div className="img-card__desc" dangerouslySetInnerHTML={{__html: desc}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function LocationGridItem({
    img,
    title,
    btnText,
    href
}: {
    img: string;
    title: string;
    btnText: string;
    href: string;
}) {
    return (
        <div className="location-grid-item">
            <picture className="location-grid-item__pic">
                <img src={img} alt={title} className="location-grid-item__img" />
            </picture>
            <p className="location-grid-item__title">{title}</p>
            <a href={href} className="location-grid-item__btn btn">{btnText}</a>
        </div>
    );
}
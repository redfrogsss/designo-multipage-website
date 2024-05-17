export default function CardListItem ({
    href = "#!",
    img = "/assets/home/desktop/image-web-design-large.jpg",
    title = "Express",
    desc = "A multi-carrier shipping website for ecommerce businesses"
} : {
    href: string;
    img: string;
    title: string;
    desc: string;
}) {
    return (
        <a href={href} className="card-list-item">
            <picture className="card-list-item__pic">
                <img src={img} alt={title} className="card-list-item__img" />
            </picture>
            <div className="card-list-item__content">
                <h3 className="card-list-item__title">{title}</h3>
                <p className="card-list-item__desc">{desc}</p>
            </div>
        </a>
    )
}
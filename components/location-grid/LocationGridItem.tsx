import Link from "next/link";
import FadeInBottom from "../utils/FadeInBottom";

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
        <FadeInBottom>
            <div className="location-grid-item">
                <picture className="location-grid-item__pic">
                    <img src={img} alt={title} className="location-grid-item__img" />
                </picture>
                <p className="location-grid-item__title">{title}</p>
                <Link href={href} className="location-grid-item__btn btn">{btnText}</Link>
            </div>
        </FadeInBottom>
    );
}
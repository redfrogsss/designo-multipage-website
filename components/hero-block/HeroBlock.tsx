import Image from "next/image";
import FadeInBottom from "../utils/FadeInBottom";

interface HeroBlockProps {
    title: string;
    desc: string;
    img: string;
    btnText: string;
    btnHref: string;
}

export default function HeroBlock(
    {
        title = "Award-winning custom designs and digital branding solutions",
        desc = "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
        img = "/assets/home/desktop/image-hero-phone.png",
        btnText = "Learn More",
        btnHref = "#!"
    }: HeroBlockProps
) {

    return (
        <div className="hero-block">
            <div className="page-container">
                <FadeInBottom>
                    <div className="hero-block__inner">
                        <div className="hero-block__left">
                            <h1 className="hero-block__title">
                                {title}
                            </h1>
                            <p className="hero-block__desc">
                                {desc}
                            </p>
                            <a href={btnHref} className="hero-block__btn btn btn--dark">{btnText}</a>
                        </div>
                        <div className="hero-block__right">
                            <picture className="hero-block__pic">
                                <Image fill={true} src={img} alt={title} className="hero-block__img" />
                            </picture>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
    );
}
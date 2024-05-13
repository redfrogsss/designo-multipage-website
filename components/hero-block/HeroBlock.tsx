import Image from "next/image";

export default function HeroBlock() {
    return (
        <div className="hero-block">
            <div className="page-container">
                <div className="hero-block__inner">
                    <div className="hero-block__left">
                        <h1 className="hero-block__title">
                            Award-winning custom designs and digital branding solutions
                        </h1>
                        <p className="hero-block__desc">
                            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                        </p>
                        <a href="#!" className="hero-block__btn btn btn--dark">Learn More</a>
                    </div>
                    <div className="hero-block__right">
                        <picture className="hero-block__pic">
                            <Image fill={true} src="/assets/home/desktop/image-hero-phone.png" alt="Image Hero Phone" className="hero-block__img" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
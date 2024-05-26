import FadeInBottom from "../utils/FadeInBottom"

export default function AboutBlock () {
    return (
        <div className="about-block">
            <div className="page-container">
                <FadeInBottom>
                    <div className="about-block__inner">
                        <div className="about-block__left">
                            <h2 className="about-block__title">About Us</h2>
                            <p className="about-block__desc">
                                Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                            </p>
                        </div>
                        <div className="about-block__right">
                            <picture className="about-block__pic">
                                <source media="(max-width: 640px)" srcSet="/assets/about/mobile/image-about-hero.jpg" />
                                <source media="(max-width: 991px)" srcSet="/assets/about/tablet/image-about-hero.jpg" />
                                <img className="about-block__img" src="/assets/about/desktop/image-about-hero.jpg" alt="About us" />
                            </picture>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
    );
}
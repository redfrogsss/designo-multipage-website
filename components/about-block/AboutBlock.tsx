import FadeInBottom from "../utils/FadeInBottom"

export default function AboutBlock ({
    title = "",
    desc = "",
    desktopImg = "",
    tabletImg = "",
    mobileImg = "",
}: {
    title: string;
    desc?: string;
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
}) {
    return (
        <div className="about-block">
            <div className="page-container">
                <FadeInBottom>
                    <div className="about-block__inner">
                        <div className="about-block__left">
                            <h2 className="about-block__title">{title}</h2>
                            <p className="about-block__desc">{desc}</p>
                        </div>
                        <div className="about-block__right">
                            <picture className="about-block__pic">
                                <source media="(max-width: 640px)" srcSet={mobileImg} />
                                <source media="(max-width: 991px)" srcSet={tabletImg} />
                                <img className="about-block__img" src={desktopImg} alt="About us" />
                            </picture>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
    );
}
import TermsGridItem from "./TermsGridItem";
import FadeInBottom from "../utils/FadeInBottom";

export default function TermsGrid({
    data = [
        {
            img: "assets/home/desktop//illustration-passionate.svg",
            heading: "Passionate",
            desc: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        },
        {
            img: "assets/home/desktop//illustration-resourceful.svg",
            heading: "Resourceful",
            desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        },
        {
            img: "assets/home/desktop//illustration-friendly.svg",
            heading: "Friendly",
            desc: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        }
    ]
}: {
    data: {
        img: string,
        heading: string,
        desc: string
    }[]
}) {
    return (
        <section className="terms-grid component-gap">
            <div className="page-container">
                <FadeInBottom>
                    <div className="terms-grid__inner">
                        {data.map((item, index) => {
                            return <TermsGridItem key={index} img={item.img} heading={item.heading} desc={item.desc} />
                        })}
                    </div>
                </FadeInBottom>
            </div>
        </section>
    );
}
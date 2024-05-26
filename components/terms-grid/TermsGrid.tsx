import TermsGridItem from "./TermsGridItem";
import FadeInBottom from "../utils/FadeInBottom";

export default function TermsGrid() {
    return (
        <section className="terms-grid component-gap">
            <div className="page-container">
                <FadeInBottom>
                    <div className="terms-grid__inner">
                        <TermsGridItem
                            img="assets/home/desktop//illustration-passionate.svg"
                            heading="Passionate"
                            desc="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                        />
                        <TermsGridItem
                            img="assets/home/desktop//illustration-resourceful.svg"
                            heading="Resourceful"
                            desc="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                        />
                        <TermsGridItem
                            img="assets/home/desktop//illustration-friendly.svg"
                            heading="Friendly"
                            desc="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                        />
                    </div>
                </FadeInBottom>

            </div>
        </section>
    );
}
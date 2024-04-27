import FooterBlock from "./FooterBlock";
import FooterSection from "./FooterSection";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="page-container">
                    <FooterBlock />
                </div>
            </div>
            <div className="footer__bottom">
                <FooterSection />
            </div>
        </footer>
    );
}
import FooterBlock from "./FooterBlock";
import FooterSection from "./FooterSection";

export default function Footer () {
    return (
        <footer className="footer">
            <FooterBlock />
            <div className="footer__bottom">
                <FooterSection />
            </div>
        </footer>
    );
}
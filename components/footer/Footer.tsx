import { getSiteSetting } from "@/helpers/getSiteSetting";
import FooterBlock from "./FooterBlock";
import FooterSection from "./FooterSection";

export default async function Footer () {

    const siteSetting = await getSiteSetting();

    return (
        <footer className="footer">
            <FooterBlock 
                title={siteSetting.footerBlock.title}
                desc={siteSetting.footerBlock.desc}
                btnText={siteSetting.footerBlock.btnText}
                btnPath={siteSetting.footerBlock.btnPath}
            />
            <div className="footer__bottom">
                <FooterSection />
            </div>
        </footer>
    );
}
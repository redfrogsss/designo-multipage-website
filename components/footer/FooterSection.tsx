import { getSiteSetting } from "@/helpers/getSiteSetting";
import Link from "next/link";

export default async function FooterSection() {

    const siteSetting = await getSiteSetting();

    return (
        <footer className="footer-section">
            <div className="page-container">
                <div className="footer-section__inner">
                    <div className="footer-section__nav">
                        <Link href="/" className="footer-section__pic">
                            <img src={siteSetting.siteLogoDark} alt={siteSetting.sitename} className="footer-section__img" />
                        </Link>
                        <div className="footer-section__page-row">
                            {siteSetting.menuItem.map((item: any, index: number) => (
                                <Link key={index} href={item.path} className="footer-section__page">{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-section__contact">
                        <div className="footer-section__address" dangerouslySetInnerHTML={{__html: siteSetting.leftContent}}></div>
                        <div className="footer-section__address" dangerouslySetInnerHTML={{__html: siteSetting.rightContent}}></div>
                        <div className="footer-section__social-row">
                            {siteSetting.facebook && <Link href={siteSetting.facebook} target="_blank" className="footer-section__social-link" aria-label="Facebook">
                                <span className="icon-icon-facebook" aria-hidden="true"></span>
                            </Link>}
                            {siteSetting.youtube && <Link href={siteSetting.youtube} target="_blank" className="footer-section__social-link" aria-label="Youtube">
                                <span className="icon-icon-youtube" aria-hidden="true"></span>
                            </Link>}
                            {siteSetting.twitter && <Link href={siteSetting.twitter} target="_blank" className="footer-section__social-link" aria-label="Twitter">
                                <span className="icon-icon-twitter" aria-hidden="true"></span>
                            </Link>}
                            {siteSetting.pinterest && <Link href={siteSetting.pinterest} target="_blank" className="footer-section__social-link" aria-label="Pinterest">
                                <span className="icon-icon-pinterest" aria-hidden="true"></span>
                            </Link>}
                            {siteSetting.instagram && <Link href={siteSetting.instagram} target="_blank" className="footer-section__social-link" aria-label="Instagram">
                                <span className="icon-icon-instagram" aria-hidden="true"></span>
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
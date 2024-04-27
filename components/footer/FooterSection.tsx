import Link from "next/link";

export default function FooterSection() {
    return (
        <footer className="footer-section">
            <div className="page-container">
                <div className="footer-section__inner">
                    <div className="footer-section__nav">
                        <picture className="footer-section__pic">
                            <img src="/assets/shared/desktop/logo-light.png" alt="DESIGNO Logo" className="footer-section__img" />
                        </picture>
                        <div className="footer-section__page-row">
                            <Link href="/about" className="footer-section__page">Our Company</Link>
                            <Link href="/about" className="footer-section__page">Location</Link>
                            <Link href="/about" className="footer-section__page">Contact</Link>
                        </div>
                    </div>
                    <div className="footer-section__contact">
                        <p className="footer-section__address">
                            <strong>Designo Central Office</strong><br />
                            3886 Wellington Street<br />
                            Toronto, Ontario M9C 3J5
                        </p>
                        <p className="footer-section__address">
                            <strong>
                                Contact Us (Central Office)<br/>
                                P : +1 253-863-8967<br/>
                                M : contact@designo.co
                            </strong>
                        </p>
                        <div className="footer-section__social-row">
                            <a href="#!" className="footer-section__social-link" aria-label="Facebook">
                                <span className="icon-icon-facebook" aria-hidden="true"></span>
                            </a>
                            <a href="#!" className="footer-section__social-link" aria-label="Youtube">
                                <span className="icon-icon-youtube" aria-hidden="true"></span>
                            </a>
                            <a href="#!" className="footer-section__social-link" aria-label="Twitter">
                                <span className="icon-icon-twitter" aria-hidden="true"></span>
                            </a>
                            <a href="#!" className="footer-section__social-link" aria-label="Pinterest">
                                <span className="icon-icon-pinterest" aria-hidden="true"></span>
                            </a>
                            <a href="#!" className="footer-section__social-link" aria-label="Instagram">
                                <span className="icon-icon-instagram" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
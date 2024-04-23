import Link from "next/link";

export default function NavBar () {
    return (
        <header className="navbar">
            <div className="page-container">
                <div className="navbar__inner">
                    <div className="navbar__left">
                        <picture className="navbar__pic">
                            <img src="/assets/shared/desktop/logo-dark.png" alt="DESIGNO Logo" className="navbar__img"/>
                        </picture>
                    </div>
                    <div className="navbar__right">
                        <Link href="/about" className="navbar__link navbar__link--desktop">Our Company</Link>
                        <Link href="/about" className="navbar__link navbar__link--desktop">Location</Link>
                        <Link href="/about" className="navbar__link navbar__link--desktop">Contact</Link>
                        <Link href="/about" className="navbar__link navbar__link--mobile navbar__link--icon"><span className="icon-icon-hamburger"></span></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
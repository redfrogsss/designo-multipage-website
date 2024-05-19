import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./NavBarMobileDropdown"

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="page-container">
                <div className="navbar__inner">
                    <a href="/" className="navbar__left">
                        <picture className="navbar__pic">
                            <img src="/assets/shared/desktop/logo-dark.png" alt="DESIGNO Logo" className="navbar__img" />
                        </picture>
                    </a>
                    <div className="navbar__right">
                        <Link href="/about" className="navbar__link navbar__link--desktop">Our Company</Link>
                        <Link href="/location" className="navbar__link navbar__link--desktop">Location</Link>
                        <Link href="/contact" className="navbar__link navbar__link--desktop">Contact</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="navbar__link navbar__link--mobile navbar__link--icon"><span className="icon-icon-hamburger"></span></DropdownMenuTrigger>
                            <DropdownMenuContent className="navbar__dropdown">
                                <DropdownMenuItem className="navbar__dropdown-item"><Link href="/about"><span>Our Company</span></Link></DropdownMenuItem>
                                <DropdownMenuItem className="navbar__dropdown-item"><Link href="/location"><span>Locations</span></Link></DropdownMenuItem>
                                <DropdownMenuItem className="navbar__dropdown-item"><Link href="/contact"><span>Contact</span></Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
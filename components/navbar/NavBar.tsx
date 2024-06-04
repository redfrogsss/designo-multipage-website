import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./NavBarMobileDropdown"
import { getSiteSetting } from "@/helpers/getSiteSetting";

export default async function NavBar() {

    const siteSetting = await getSiteSetting();

    return (
        <header className="navbar">
            <div className="page-container">
                <div className="navbar__inner">
                    <a href="/" className="navbar__left">
                        <picture className="navbar__pic">
                            <img src={siteSetting?.siteLogo} alt={siteSetting?.sitename} className="navbar__img" />
                        </picture>
                    </a>
                    <div className="navbar__right">
                        {siteSetting?.menuItem.map((item: any, index: any) => (
                            <Link key={index} href={item.path} className="navbar__link navbar__link--desktop">{item.title}</Link>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="navbar__link navbar__link--mobile navbar__link--icon"><span className="icon-icon-hamburger"></span></DropdownMenuTrigger>
                            <DropdownMenuContent className="navbar__dropdown">
                                {siteSetting?.menuItem.map((item: any, index: any) => (
                                    <DropdownMenuItem key={index} className="navbar__dropdown-item"><Link href={item.path}><span>{item.title}</span></Link></DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
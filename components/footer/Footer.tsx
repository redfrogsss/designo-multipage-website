"use client"

import { useEffect } from "react";
import FooterBlock from "./FooterBlock";
import FooterSection from "./FooterSection";
import { usePathname } from 'next/navigation'

export default function Footer () {

    const pathname = usePathname();

    return (
        <footer className={`footer${pathname == "/contact" ? " component-gap" : ""}`}>
            {pathname != '/contact' && <div className="footer__top">
                <div className="page-container">
                    <FooterBlock />
                </div>
            </div>}
            <div className="footer__bottom">
                <FooterSection />
            </div>
        </footer>
    );
}
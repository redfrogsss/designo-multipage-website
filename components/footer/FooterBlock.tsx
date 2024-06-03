'use client'

import Link from "next/link";
import FadeInBottom from "../utils/FadeInBottom";
import { usePathname } from "next/navigation";

export default function FooterBlock({
    title = "Let's talk about <br>your project",
    desc = "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",
    btnText = "Get In Touch",
    btnPath = "/contact"
}: {
    title: string,
    desc: string,
    btnText: string,
    btnPath: string
}) {
    
    const pathname = usePathname();

    if (pathname === "/contact") return null;
    
    return (
        <div className="footer__top">
            <div className="page-container">
                <FadeInBottom>
                    <div className="footer-blk component-gap">
                        <div className="footer-blk__left">
                            <p className="footer-blk__title" dangerouslySetInnerHTML={{__html: title}}></p>
                            <p className="footer-blk__desc">
                                {desc}
                            </p>
                        </div>
                        <div className="footer-blk__right">
                            <Link href={btnPath} className="footer-blk__btn btn btn--dark">{btnText}</Link>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
        
    );
}
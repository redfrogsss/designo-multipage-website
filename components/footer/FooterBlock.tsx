'use client'

import Link from "next/link";
import FadeInBottom from "../utils/FadeInBottom";
import { usePathname } from "next/navigation";

export default function FooterBlock() {
    
    const pathname = usePathname();

    if (pathname === "/contact") return null;
    
    return (
        <div className="footer__top">
            <div className="page-container">
                <FadeInBottom>
                    <div className="footer-blk component-gap">
                        <div className="footer-blk__left">
                            <p className="footer-blk__title">Let&apos;s talk about <br />your project</p>
                            <p className="footer-blk__desc">
                                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                            </p>
                        </div>
                        <div className="footer-blk__right">
                            <Link href="/contact" className="footer-blk__btn btn btn--dark">Get In Touch</Link>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
        
    );
}
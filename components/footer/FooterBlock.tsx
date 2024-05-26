import Link from "next/link";
import FadeInBottom from "../utils/FadeInBottom";

export default function FooterBlock() {
    return (
        <FadeInBottom>
            <div className="footer-blk">
                <div className="footer-blk__left">
                    <p className="footer-blk__title">Let&apos;s talk about <br />your project</p>
                    <p className="footer-blk__desc">
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </p>
                </div>
                <div className="footer-blk__right">
                    <Link href="#!" className="footer-blk__btn btn btn--dark">Get In Touch</Link>
                </div>
            </div>
        </FadeInBottom>
    );
}
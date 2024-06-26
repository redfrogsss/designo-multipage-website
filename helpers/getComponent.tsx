import AboutBlock from "@/components/about-block/AboutBlock";
import CardList from "@/components/card-list/CardList";
import ContactForm from "@/components/contact-form/ContactForm";
import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import HeroBlock from "@/components/hero-block/HeroBlock";
import ImgCard from "@/components/img-card/ImgCard";
import LocationGrid from "@/components/location-grid/LocationGrid";
import OfficeCardsRow from "@/components/office-cards-row/OfficeCardsRow";
import SectionHeader from "@/components/section-header/SectionHeader";
import TermsGrid from "@/components/terms-grid/TermsGrid";

import { getImg } from "./getImg";
import { getRichText } from "./getRichText";

async function getComponent(data: any, key: number) {

    let props = {}, res, resData;

    switch (data.__component) {
        case "component.hero-block":
            props = {
                title: data.title,
                desc: data.desc,
                img: getImg(data.img) ?? "",
                btnText: data.btn_text,
                btnHref: data.btn_href.data?.attributes.path ?? ""
            }
            return <HeroBlock {...props as any} />;

        case "component.gallery-grid":
            props = {
                type: data.type,
                data: data.Items.map((item: any) => {
                    return {
                        title: item.title,
                        desktopImg: getImg(item.img) ?? "",
                        mobileImg: getImg(item.mobile_img) ?? "",
                        link: item.page.data?.attributes.path ?? ""
                    }
                })
            }
            return <GalleryGrid {...props as any} />

        case "component.terms-grid":
            props = {
                data: data.Items.map((item: any) => {
                    return {
                        img: getImg(item.img) ?? "",
                        heading: item.title ?? "",
                        desc: item.desc ?? ""
                    };
                })
            }

            return <TermsGrid key={key} {...props as any} />

        case "component.section-header":
            props = {
                title: data.title,
                desc: data.desc
            }
            return <SectionHeader key={key} {...props as any} />

        case "component.about-block":
            props = {
                title: data.title,
                desc: data.desc,
                desktopImg: getImg(data.desktopImg) ?? "",
                tabletImg: getImg(data.tabletImg) ?? "",
                mobileImg: getImg(data.mobileImg) ?? ""
            }
            return <AboutBlock key={key} {...props as any} />
            
        case "collections.web-design":
            if (data.enable == false) return null;
            res = await fetch(`${process.env.cms_path}web-designs?populate=deep`);
            resData = await res.json();
            
            props = {
                data: resData.data.map((item: any, index: number) => {
                    return {
                        title: item.attributes.title,
                        desc: item.attributes.desc,
                        img: getImg(item.attributes.img) ?? "",
                        page: item.attributes.page?.data?.attributes.path ?? ""
                    }
                })
            };

            return <CardList key={key} {...props as any}/>
            
        case "collections.app-design":
            if (data.enable == false) return null;
            res = await fetch(`${process.env.cms_path}app-designs?populate=deep`);
            resData = await res.json();
            
            props = {
                data: resData.data.map((item: any, index: number) => {
                    return {
                        title: item.attributes.title,
                        desc: item.attributes.desc,
                        img: getImg(item.attributes.img) ?? "",
                        page: item.attributes.page?.data?.attributes.path ?? ""
                    }
                })
            };

            return <CardList key={key} {...props as any}/>
            
        case "collections.graphic-design":
            if (data.enable == false) return null;
            res = await fetch(`${process.env.cms_path}graphic-designs?populate=deep`);
            resData = await res.json();
            
            props = {
                data: resData.data.map((item: any, index: number) => {
                    return {
                        title: item.attributes.title,
                        desc: item.attributes.desc,
                        img: getImg(item.attributes.img) ?? "",
                        page: item.attributes.page?.data?.attributes.path ?? ""
                    }
                })
            };

            return <CardList key={key} {...props as any}/>
        
        case "component.image-card":
            props = {
                title: data.title,
                desc: getRichText(data.desc) ?? "",
                img: getImg(data.img) ?? "",
                tabletImg: getImg(data.tabletImg) ?? undefined,
                mobileImg: getImg(data.mobileImg) ?? undefined,
                reverse: data.reverse
            }
            return <ImgCard key={key} {...props as any} />
            
        case "component.location-grid":
            props = {
                data: data.Items.map((item: any) => {
                    return {
                        img: getImg(item.img) ?? "",
                        title: item.title,
                        btnText: item.btnText,
                        href: item.page.data?.attributes.path ?? ""
                    }
                })
            }
            return <LocationGrid key={key} {...props as any} />

        case "component.office-card-row":
            props = {
                title: data.title,
                leftContent: getRichText(data.leftContent) ?? "",
                rightContent: getRichText(data.rightContent) ?? "",
                location: getImg(data.location) ?? "",
                reverse: data.reverse
            }

            return <OfficeCardsRow key={key} {...props as any} />
        
        case "collections.contact-form":
            return <ContactForm key={key} />
            
        default:
            return null;
    }
}

export { getComponent }
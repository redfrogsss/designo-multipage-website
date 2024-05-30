import AboutBlock from "@/components/about-block/AboutBlock";
import CardList from "@/components/card-list/CardList";
import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import HeroBlock from "@/components/hero-block/HeroBlock";
import ImgCard from "@/components/img-card/ImgCard";
import SectionHeader from "@/components/section-header/SectionHeader";
import TermsGrid from "@/components/terms-grid/TermsGrid";

function getImg(img: any) {
    if (img == undefined) return;
    return `${process.env.cms_root}${img.data.attributes.url}`;
}

function getRichText(data: any) {
    if (data == undefined) return;
    let html = "";


    data.forEach((item: any) => {
        if (item.type == "paragraph") {
            item.children.forEach((child: any) => {
                if (child.type == "text") {
                    html += `<p>${child.text == "" ? "&nbsp;" : child.text}</p>`;
                }
            });
        }
        
        if (item.type == "heading") {
            let tag = `h${item.level}`;
            
            item.children.forEach((child: any) => {
                if (child.type == "text") {
                    html += `<${tag}>${child.text == "" ? "&nbsp;" : child.text}</${tag}>`;
                }
            });
        }
    });

    return html;
}

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
            return <HeroBlock key={key} {...props} />;

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
            return <GalleryGrid key={key} {...props} />

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

            return <TermsGrid key={key} {...props} />

        case "component.section-header":
            props = {
                title: data.title,
                desc: data.desc
            }
            return <SectionHeader key={key} {...props} />

        case "component.about-block":
            props = {
                title: data.title,
                desc: data.desc,
                desktopImg: getImg(data.desktopImg) ?? "",
                tabletImg: getImg(data.tabletImg) ?? "",
                mobileImg: getImg(data.mobileImg) ?? ""
            }
            return <AboutBlock key={key} {...props} />
            
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

            return <CardList key={key} {...props}/>
            
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

            return <CardList key={key} {...props}/>
            
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

            return <CardList key={key} {...props}/>
        
        case "component.image-card":
            props = {
                title: data.title,
                desc: getRichText(data.desc) ?? "",
                img: getImg(data.img) ?? "",
                tabletImg: getImg(data.tabletImg) ?? undefined,
                mobileImg: getImg(data.mobileImg) ?? undefined
            }
            return <ImgCard key={key} {...props} />
            
        default:
            return null;
    }
}

export { getComponent }
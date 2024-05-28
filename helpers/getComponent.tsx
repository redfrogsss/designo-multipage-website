import GalleryGrid from "@/components/gallery-grid/GalleryGrid";
import HeroBlock from "@/components/hero-block/HeroBlock";

function getImg(img: any) {
    if (img == undefined) return;
    return `${process.env.cms_root}${img.data.attributes.url}`;
}

function getComponent(data: any, key: number) {

    let props = {};

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
            
        default:
            return null;
    }
}

export { getComponent }
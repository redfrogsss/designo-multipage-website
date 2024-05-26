import HeroBlock from "@/components/hero-block/HeroBlock";

function getImg(img: any) {
    if (img == undefined) return;
    return `${process.env.cms_root}${img.data.attributes.url}`;
}

function getComponent(data: any, key: number) {
    switch (data.__component) {

        case "component.hero-block":
            const props = {
                title: data.title,
                desc: data.desc,
                img: getImg(data.img) ?? "",
                btnText: data.btn_text,
                btnHref: data.btn_href.data?.attributes.path ?? "#!"
            }
            return <HeroBlock key={key} {...props} />;
            
        default:
            return null;
    }
}

export { getComponent }
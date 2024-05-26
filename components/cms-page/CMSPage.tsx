import HeroBlock from "../hero-block/HeroBlock";

async function getPage(path: string = "") {
    const filterRes = await fetch(`${process.env.cms_path}pages?filters[path]=/${path}`);
    const res = await fetch(`${process.env.cms_path}pages/${(await filterRes.json()).data[0].id}?populate[Contents][populate]=*`);
    return res.json()
}

function getImg (img: any) {
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
                btnHref: data.btn_href.data.attributes.path
            }
            return <HeroBlock key={key} {...props}/>;
        default:
            return null;
    }
}

function getPageContent(pageData: any) {
    return (
        <>
            {pageData.Contents.map((entries: any, key: number) => {
                return getComponent(entries, key);
            })}
        </>
    )
}

export default async function CMSPage({ path = "" }: { path: string }) {

    const data = await getPage(path);
    const pageData = data.data.attributes;

    return (
        <>
            {JSON.stringify(pageData)}
            {getPageContent(pageData)}
        </>
    )
}
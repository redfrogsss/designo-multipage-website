import { getImg } from "./getImg";
import { getRichText } from "./getRichText";

async function getSiteSetting() {
    try {
        const res = await fetch(`${process.env.cms_path}site-setting?populate=deep`);

        if (!res.ok) throw new Error("Failed to fetch site setting");
        
        const json = await res.json();

        const setting = {
            sitename: json.data.attributes.sitename,
            siteDesc: json.data.attributes.siteDesc,
            leftContent: getRichText(json.data.attributes.leftContent) ?? "",
            rightContent: getRichText(json.data.attributes.rightContent) ?? "",
            siteLogo: getImg(json.data.attributes.siteLogo) ?? "",
            siteLogoDark: getImg(json.data.attributes.siteLogoDark) ?? "",

            menuItem: json.data.attributes.menuItem.map((item: any) => {
                return {
                    title: item.name,
                    path: item.page.data.attributes.path
                }
            }),

            facebook: json.data.attributes.facebook,
            youtube: json.data.attributes.youtube,
            twitter: json.data.attributes.twitter,
            pinterest: json.data.attributes.pinterest,
            instagram: json.data.attributes.instagram,

            footerBlock: {
                title: json.data.attributes.footerBlock.title,
                desc: json.data.attributes.footerBlock.desc,
                btnText: json.data.attributes.footerBlock.btnText,
                btnPath: json.data.attributes.footerBlock.page.data.attributes.path,
            }
        }

        return setting;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export { getSiteSetting }
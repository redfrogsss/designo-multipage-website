import { getImg } from "./getImg";
import { getRichText } from "./getRichText";
import SiteSetting from "@/app/type/SiteSetting";

async function getSiteSetting() {
    try {
        const res = await fetch(`${process.env.cms_path}site-setting?populate=deep`);
        const json = await res.json();

        const setting: SiteSetting = {
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
        }

        return setting;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export { getSiteSetting }
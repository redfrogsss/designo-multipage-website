import { getComponent } from "@/helpers/getComponent";

async function getPage(path: string = "") {
    try {
        const filterRes = await fetch(`${process.env.cms_path}pages?filters[path]=/${path}`);
        const res = await fetch(`${process.env.cms_path}pages/${(await filterRes.json()).data[0].id}?populate[Contents][populate]=*`);
        return res.json()
    } catch (error) {
        console.error(error);
        return undefined;
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
    if (data == undefined) return (<></>);
    const pageData = data.data.attributes;

    return (
        <>
            {/* {JSON.stringify(pageData)} */}
            {getPageContent(pageData)}
        </>
    )
}
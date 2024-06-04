import { getComponent } from "@/helpers/getComponent";
import { getPage } from "@/helpers/getPage";

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

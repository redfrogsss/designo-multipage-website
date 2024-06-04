import CMSPage from "@/components/cms-page/CMSPage";
import { getPage } from "@/helpers/getPage";
import { getSiteSetting } from "@/helpers/getSiteSetting";
import { Metadata } from "next";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            <CMSPage path={params.slug} />
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data = await getPage(params.slug);
    if (data == undefined) return ({});
    const pageData = data.data.attributes;

    const siteSetting = await getSiteSetting();

    const pageTitle = pageData.title + " | " + siteSetting?.sitename ?? "";

    return {
        title: pageTitle,
    }
}

export const runtime = 'edge';

import CMSPage from "@/components/cms-page/CMSPage";

export default function HomePage({ params }: { params: { slug: string } }) {
    return (
        <main>
            <CMSPage path={params.slug} />
        </main>
    );
}
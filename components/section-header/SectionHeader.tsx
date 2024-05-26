import FadeInBottom from "../utils/FadeInBottom";

export default function SectionHeader({
    title = "",
    desc = "",
}: {
    title: string;
    desc?: string;
}) {
    return (
        <FadeInBottom>
            <div className="section-header">
                <div className="page-container">
                    <div className="section-header__inner">
                        <h1 className="section-header__title">{title}</h1>
                        {desc.length > 0 && <p className="section-header__desc">{desc}</p>}
                    </div>
                </div >
            </div>
        </FadeInBottom>
    );
}
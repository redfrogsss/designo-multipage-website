export default function OfficeContentCard({
    title,
    leftContent,
    rightContent
}: {
    title: string;
    leftContent: string;
    rightContent: string;
}) {
    return (
        <div className="office-content-card">
            <p className="office-content-card__title">
                {title}
            </p>
            <div className="office-content-card__content">
                <p className="office-content-card__content-left" dangerouslySetInnerHTML={{ __html: leftContent }}>
                </p>
                <p className="office-content-card__content-right" dangerouslySetInnerHTML={{ __html: rightContent }}>
                </p>
            </div>
        </div>
    );
}
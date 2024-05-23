import OfficeContentCard from "./OfficeContentCard";

interface dataInterface {
    title: string,
    leftContent: string,
    rightContent: string,
    location: string,
    reverse: boolean
};

const defaultData: dataInterface = {
    title: "",
    leftContent: "",
    rightContent: "",
    location: "",
    reverse: false,
}

export default function officecardsrow(data: dataInterface = defaultData) {
    return (
        <div className={`component-gap office-cards-row${data.reverse ? " office-cards-row--reverse" : ""}`}>
            <div className="page-container">
                <div className="office-cards-row__inner">
                    <div className="office-cards-row__left">
                        <OfficeContentCard title={data.title} leftContent={data.leftContent} rightContent={data.rightContent} />
                    </div>
                    <div className="office-cards-row__right">
                        <picture className="office-cards-row__pic">
                            <img src={data.location} alt={data.title} className="office-cards-row__img" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
import LocationGridItem from "./LocationGridItem";

export default function LocationGrid ({
    data
}: {
    data: {
        img: string;
        title: string;
        btnText: string;
        href: string;
    }[];
}) {
    return (
        <div className="location-grid component-gap">
            <div className="page-container">
                <div className="location-grid__inner">
                    {data.map((d, i) => <LocationGridItem 
                        key={i}
                        img={d.img}
                        title={d.title}
                        btnText={d.btnText}
                        href={d.href}
                    />)}
                </div>
            </div>
        </div>
    );
}
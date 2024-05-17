import CardListItem from "./CardListItem";

export default function CardList({
    data = [
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Express",
            desc: "A multi-carrier shipping website for ecommerce businesses"
        },
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Transfer",
            desc: "Site for low-cost money transfers and sending money within seconds"
        },
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Photon",
            desc: "A state-of-the-art music player with high-resolution audio and DSP effects"
        },
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Builder",
            desc: "Connects users with local contractors based on their location"
        },
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Blogr",
            desc: "Blogr is a platform for creating an online blog or publication"
        },
        {
            href: "#!",
            img: "/assets/home/desktop/image-web-design-large.jpg",
            title: "Camp",
            desc: "Get expert training in coding, data, design, and digital marketing"
        },
    ]
} : {
    data: {
        href: string;
        img: string;
        title: string;
        desc: string;
    }[];
}) {
    return (
        <div className="card-list component-gap">
            <div className="page-container">
                <div className="card-list__inner">
                    {data.map((item, index) => (
                        <CardListItem
                            key={index}
                            href={item.href}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
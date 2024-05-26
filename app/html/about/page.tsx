import AboutBlock from "@/components/about-block/AboutBlock";
import ImgCard from "@/components/img-card/ImgCard";
import LocationGrid from "@/components/location-grid/LocationGrid";

export default function AboutPage() {
    return (
        <main>
            <AboutBlock />
            <ImgCard
                img="/assets/about/desktop/image-world-class-talent.jpg"
                tabletImg="/assets/about/tablet/image-world-class-talent.jpg"
                mobileImg="/assets/about/mobile/image-world-class-talent.jpg"
                title="World-class talent"
                desc="<p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p><p><br></p><p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>"
            />
            <LocationGrid
                data={[
                    {
                        img: "/assets/shared/desktop/illustration-canada.svg",
                        title: "Canada",
                        btnText: "See Location",
                        href: "/location"
                    },
                    {
                        img: "/assets/shared/desktop/illustration-australia.svg",
                        title: "Australia",
                        btnText: "See Location",
                        href: "/location"
                    },
                    {
                        img: "/assets/shared/desktop/illustration-united-kingdom.svg",
                        title: "United Kingdom",
                        btnText: "See Location",
                        href: "/location"
                    },
                ]}
            />
            <ImgCard
                img="/assets/about/desktop/image-real-deal.jpg"
                tabletImg="/assets/about/tablet/image-real-deal.jpg"
                mobileImg="/assets/about/mobile/image-real-deal.jpg"
                title="The real deal"
                desc="<p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                <p><br></p>
                <p>
                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                </p>"
                reverse={true}
            />
        </main>
    );
}
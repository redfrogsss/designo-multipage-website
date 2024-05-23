import LocationGrid from "@/components/location-grid/LocationGrid";

export default function ContentPage () {
    return (
        <main>
            <LocationGrid
                data={[
                    {
                        img: "/assets/shared/desktop/illustration-canada.svg",
                        title: "Canada",
                        btnText: "See Location",
                        href: "#!"
                    },
                    {
                        img: "/assets/shared/desktop/illustration-australia.svg",
                        title: "Australia",
                        btnText: "See Location",
                        href: "#!"
                    },
                    {
                        img: "/assets/shared/desktop/illustration-united-kingdom.svg",
                        title: "United Kingdom",
                        btnText: "See Location",
                        href: "#!"
                    },
                ]}
            />
        </main>
    )
}
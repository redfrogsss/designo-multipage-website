import LocationGrid from "@/components/location-grid/LocationGrid";
import ContactForm from "@/components/contact-form/ContactForm";

export default function ContentPage () {
    return (
        <main>
            <ContactForm />
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
        </main>
    )
}
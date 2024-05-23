import OfficeCardsRow from "@/components/office-cards-row/OfficeCardsRow";

export default function LocationPage() {
    return (
        <main>
            <OfficeCardsRow
                title="Canada"
                leftContent="<b>Designo Central Office</b><br>3886 Wellington Street<br>Toronto, Ontario M9C 3J5"
                rightContent="<b>Contact</b><br>P : +1 253-863-8967<br>M : contact@designo.co"
                location="/assets/locations/desktop/image-map-canada.png"
                reverse={false}
            />
            
            <OfficeCardsRow
                title="Australia"
                leftContent="<b>Designo AU Office</b><br>19 Balonne Street<br>New South Wales 2443"
                rightContent="<b>Contact</b><br>P : (02) 6720 9092<br>M : contact@designo.au"
                location="/assets/locations/desktop/image-map-australia.png"
                reverse={true}
            />
            
            <OfficeCardsRow
                title="United Kingdom"
                leftContent="<b>Designo UK Office</b><br>13  Colorado Way<br>Rhyd-y-fro SA8 9GA"
                rightContent="<b>Contact</b><br>P : 078 3115 1400<br>M : contact@designo.uk"
                location="/assets/locations/desktop/image-map-canada.png"
                reverse={false}
            />
        </main>
    );
}
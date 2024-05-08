export default function TermsGridItem({ img, heading, desc }) {
    return (
        <div className="terms-grid-item">
            <figure className="terms-grid-item__img-wrapper">
                <img src={img} alt="" className="terms-grid-item__img" />
            </figure>
            <h2 className="terms-grid-item__heading">
                {heading}
            </h2>
            <p className="terms-grid-item__desc">
                {desc}
            </p>
        </div>
    );
}
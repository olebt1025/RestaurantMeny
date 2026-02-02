
const MenyKort = ({ rett }) => {
    return (
        <div className = "meny-kort">
            <h3>{rett.tittel}</h3>
            <p className= "kategori">{rett.kategori}</p>
            <p>
                <strong>ingredienser:</strong> {rett.ingredisenser}
            </p>
            <p className="pris">{rett.pris}</p>
        </div>
    );

};

export default MenyKort;
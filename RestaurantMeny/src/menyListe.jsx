const MenyListe = ({ meny }) => {
    return (
        <>
        {meny.map((rett) => (
                <div key={rett.id}>
                    <h3>{rett.tittel}</h3>
                    <p>{rett.ingredienser}</p>
                    <strong>{rett.pris}</strong>
                    <p>{rett.kategori}</p>
                </div>
            ))}
        </>
    );
};

export default MenyListe;


import MenyKort from "./MenyKort";

const MenyListe = ({ meny }) => {
  let forrigeKategori = "";

  return (
    <div className="meny-grid">
      {meny.map((rett) => {
        const nyKategori =
          rett.kategori !== forrigeKategori;
        forrigeKategori = rett.kategori;

        return (
          <div key={rett.id}>
            {nyKategori && (
              <h2 className="kategori-overskrift">
                {rett.kategori}
              </h2>
            )}

            <MenyKort rett={rett} />
          </div>
        );
      })}
    </div>
  );
};

export default MenyListe;
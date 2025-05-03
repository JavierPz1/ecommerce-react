import './Count.css';

function Count({ stock, contador, setContador }) {


    const modifierCount = (operacion) => {
        if (operacion === "+" && contador < stock) {
                setContador(contador + 1);
        }
        if (operacion === "-" && contador > 1) {
                setContador(contador - 1);
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem" }}>
            <div style={{ display: "flex", width: "10rem", padding: "0.5rem", justifyContent: "space-around", alignItems: "center" }}>
                <button className="btn btn-secondary" onClick={() => modifierCount("-")} disabled={contador === 1} >-</button>
                <span>{contador}</span>
                <button className="btn btn-secondary" onClick={() => modifierCount("+")} disabled={contador === stock} >+</button>
            </div>
        </div>
    )
};

export default Count;
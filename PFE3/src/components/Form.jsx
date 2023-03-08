import { useState } from "react";
import Card from './Card'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [piloto, setPiloto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [isErrorPar, setIsErrorPar] = useState(false);
  const [showCard, setShowCard] = useState(false);


  const isValidPiloto = (piloto.length >= 3 && piloto.charAt(0) !== ' ') ;
  const isValidEquipo = (equipo.length >= 6);

  function elegirPar (e){
     e.preventDefault();

     if (isValidPiloto & isValidEquipo){
        setIsErrorPar(false);
        setShowCard(true);
     } else {
        setIsErrorPar(true);     
     }
  }

  const onPilotoChange = (e) => {
    setPiloto(e.target.value);
  };

  const onEquipoChange = (e) => {
    setEquipo(e.target.value);
  };
 return (
    <>
      <h1>Ingresa el nombre de un piloto y un equipo de Formula 1</h1>
      <form onSubmit={elegirPar}>
        <div>
          <input
            type="text"
            placeholder="Escriba el nombre de un piloto"
            value={piloto}
            onChange={onPilotoChange}
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Escriba nombre de un equipo"
            value={equipo}
            onChange={onEquipoChange}
          />
        </div>
        <div>
        {isErrorPar && <p>Por favor chequea que la información sea correcta!</p>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      {showCard &&  !isErrorPar &&(
       Card({piloto, equipo})
      )}
    </>
  );
}

export default Form;

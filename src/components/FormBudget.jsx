import { useState } from "react";
import ErrorLabel from "./ErrorLabel";

const FormBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const [ message, setMessage ] = useState('');
  

  const handleBudget = ( e ) => {
    e.preventDefault();

    if(!budget || budget <= 0) {
      setMessage('No es un presupuesto valido');
      return;
    }
    setMessage('');
    setIsValidBudget(true);
  }

  return (
    <div className="container-budget container shadow">

      <form onSubmit={ handleBudget } className="form">
        <div className="field">
          <label>Definir Presupuesto</label>
          <input
            className="new-budget"
            type="number"
            min={1}
            placeholder="Añade tu presupuesto"
            value={ budget }
            onChange={ (e) => setBudget(Number(e.target.value)) }
          />
        </div>

        <input
          type="submit"
          value="Añadir"
        />

        { message && <ErrorLabel type='error' message={ message } />}
      </form>
    </div>
  )
}

export default FormBudget;
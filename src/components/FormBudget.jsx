import { useState } from "react";
import ErrorLabel from "./ErrorLabel";

const FormBudget = ({ budget, setBudget }) => {

  const [ message, setMessage ] = useState('');

  const handleBudget = ( e ) => {
    e.preventDefault();

    if(!Number(budget) || Number(budget) <= 0) {
      setMessage('No es un presupuesto valido');
      return;
    }
    setMessage('');
    console.log('Todo bien')
  }

  return (
    <div className="container-budget container shadow">

      <form onSubmit={ handleBudget } className="form">
        <div className="field">
          <label>Definir Presupuesto</label>
          <input
            className="new-budget"
            type="text"
            placeholder="Añade tu presupuesto"
            value={ budget }
            onChange={ (e) => setBudget(e.target.value) }
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
import { useState, useEffect } from "react";
import { formatToDollars } from "../helpers";

const ControlBudget = ({ budget, expenses }) => {

  const [ available, setAvailable ] = useState(0);
  const [ spent, setSpent ] = useState(0);

  useEffect( () => {
    const totalSpent = expenses.reduce( ( total, expense ) => total + expense.qty, 0 );
    setSpent(totalSpent);
  }, [ expenses ])


  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Gráfica aquí</p>
      </div>

      <div className="content-budget">
        <p>
          <span>Presupuesto: </span> { formatToDollars( budget ) }
        </p>

        <p>
          <span>Disponible: </span> { formatToDollars( available ) }
        </p>

        <p>
          <span>Gastado: </span> { formatToDollars( spent ) }
        </p>
      </div>
    </div>
  )
}

export default ControlBudget;
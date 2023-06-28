import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { formatToDollars } from "../helpers";

const ControlBudget = ({ budget, expenses }) => {

  const [ percent, setPercent ] = useState(0);
  const [ available, setAvailable ] = useState(0);
  const [ spent, setSpent ] = useState(0);

  useEffect( () => {
    const totalSpent = expenses.reduce( ( total, expense ) => total + expense.qty, 0 );
    const totalAvailable = budget - totalSpent;
    const porcentUpdated = ( ( (budget - totalAvailable) / budget ) * 100 ).toFixed(1);
  
    setSpent(totalSpent);
    setAvailable(totalAvailable);
    if(porcentUpdated > 0) {
      setTimeout(() => {
        setPercent(porcentUpdated);
      }, 1000);
    }
  }, [ expenses ])

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6',
          })} 
          value={percent}
          text={`${percent}% Gastado`}
        />
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
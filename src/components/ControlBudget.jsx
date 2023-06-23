
const ControlBudget = ({ budget }) => {

  /**
   * 
   * @param {Number} qty 
   * @returns {String}
   */
  const formatToDollars = ( qty ) => {
    return qty.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

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
          <span>Disponible: </span> { formatToDollars( 0 ) }
        </p>

        <p>
          <span>Gastado: </span> { formatToDollars( 0 ) }
        </p>
      </div>
    </div>
  )
}

export default ControlBudget;
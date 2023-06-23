
const FormBudget = () => {
  return (
    <div className="container-budget container shadow">
        
        <form className="form">
            <div className="field">
                <label>Definir Presupuesto</label>
                <input
                    className="new-budget"
                    type="text"
                    placeholder="Añade tu presupuesto"
                />
            </div>

            <input 
                type="submit" 
                value="Añadir" 
            />
        </form>
    </div>
  )
}

export default FormBudget;
import ControlBudget from "./ControlBudget";
import FormBudget from "./FormBudget";

const Header = ({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget, 
  expenses,
  setExpenses
}) => {
  return (
    <header>
      <h1>Control de Presupuesto</h1>

      { isValidBudget ? (
        <ControlBudget 
        budget={ budget }
        setBudget={ setBudget }
        expenses={ expenses }
        setExpenses={ setExpenses }
        setIsValidBudget={ setIsValidBudget }
        />
      ) : (
        <FormBudget
          budget={ budget }
          setBudget={ setBudget }
          setIsValidBudget={ setIsValidBudget }
        />
      )}
    </header>
  )
}

export default Header;
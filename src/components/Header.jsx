import ControlBudget from "./ControlBudget";
import FormBudget from "./FormBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses }) => {
  return (
    <header>
      <h1>Control de Presupuesto</h1>

      { isValidBudget ? (
        <ControlBudget 
        budget={ budget }
        expenses={ expenses }
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
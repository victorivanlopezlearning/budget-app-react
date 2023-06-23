import ControlBudget from "./ControlBudget";
import FormBudget from "./FormBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Control de Presupuesto</h1>

      { isValidBudget ? (
        <ControlBudget 
        budget={ budget }
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
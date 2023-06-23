import FormBudget from "./FormBudget";

const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Control de Presupuesto</h1>

      <FormBudget
        budget={ budget }
        setBudget={ setBudget }
      />
    </header>
  )
}

export default Header;
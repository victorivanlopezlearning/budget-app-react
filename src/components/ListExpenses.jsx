import Expense from "./Expense";

const ListExpenses = ({ expenses, setExpenseToUpdate }) => {
  return (
    <div className="list-expenses container">
      <h2>{ expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {expenses.map( expense => (
        <Expense 
          key={ expense.id }
          expense={ expense }
          setExpenseToUpdate={ setExpenseToUpdate }

        />
      ))}

    </div>
  )
}

export default ListExpenses;
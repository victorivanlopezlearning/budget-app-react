import Expense from "./Expense";

const ListExpenses = ({
  expenses, 
  setExpenseToUpdate, 
  deleteExpense, 
  filter, 
  expensesFiltered 
}) => {
  return (
    <div className="list-expenses container">

      {
        filter ? (
          <>
            <h2>{ expensesFiltered.length ? 'Gastos' : 'No se encontraron gastos'}</h2>
            {expensesFiltered.map( expense => (
              <Expense 
                key={ expense.id }
                expense={ expense }
                setExpenseToUpdate={ setExpenseToUpdate }
                deleteExpense={ deleteExpense }
      
              />
            ))}
          </>
        ) : (
          <>
            <h2>{ expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {expenses.map( expense => (
                <Expense
                  key={ expense.id }
                  expense={ expense }
                  setExpenseToUpdate={ setExpenseToUpdate }
                  deleteExpense={ deleteExpense }
                />
            ))}
          </>
        )
      }
    </div>
  )
}

export default ListExpenses;
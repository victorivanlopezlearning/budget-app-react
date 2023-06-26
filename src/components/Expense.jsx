
import { formatDate } from '../helpers'

const Expense = ({ expense}) => {

  const { category, nameExpense, qty, id, date } = expense;

  return (
    <div className="expense shadow">
      <div className="content-expense">
        <div className="description-expense">
          <p className="category">{ category }</p>
          <p className="name-expense">{ nameExpense }</p>
          <p className='date-expense'>Agregado el: <span>{ formatDate(date) }</span></p>
        </div>
      </div>
      <p className='qty-expense'>${ qty }</p>
    </div>
  )
}

export default Expense;
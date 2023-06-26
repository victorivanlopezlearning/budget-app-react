import { formatDate } from '../helpers'

import IconEntertainment from '../assets/img/icon_entertainment.svg';
import IconFood from '../assets/img/icon_food.svg';
import IconHealth from '../assets/img/icon_health.svg';
import IconHome from '../assets/img/icon_home.svg';
import IconSaving from '../assets/img/icon_saving.svg';
import IconSubscriptions from '../assets/img/icon_subscriptions.svg';
import IconVarious from '../assets/img/icon_various.svg';

const dictionaryIcons = {
  entertainment: IconEntertainment,
  food: IconFood,
  health: IconHealth,
  home: IconHome,
  saving: IconSaving,
  subscriptions: IconSubscriptions,
  various: IconVarious,
}

const Expense = ({ expense}) => {
  
  const { category, nameExpense, qty, id, date } = expense;

  return (
    <div className="expense shadow">
      <div className="content-expense">
        <img src={ dictionaryIcons[category] } alt={`Icono ${ category }`} />
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
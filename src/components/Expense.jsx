import { 
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
 } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from '../helpers';

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

const Expense = ({ expense, setExpenseToUpdate }) => {
  
  const { category, nameExpense, qty, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseToUpdate(expense)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => console.info('swipe action triggered')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense;
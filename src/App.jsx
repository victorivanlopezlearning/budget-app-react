import { useState } from 'react';
import Header from './components/Header';
import IconNewExpense from './assets/img/new-expense.svg';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);

  return (
    <div>
      <Header 
        budget={ budget }
        setBudget={ setBudget }
        isValidBudget={ isValidBudget }
        setIsValidBudget= { setIsValidBudget }
      />

      { isValidBudget && (
        <div className='new-expense'>
          <img src={ IconNewExpense } alt="Icon new expense" />
        </div>
      ) }
    </div>
  )
}

export default App;

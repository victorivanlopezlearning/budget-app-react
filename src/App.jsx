import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { generateUniqueId } from './helpers';
import IconNewExpense from './assets/img/new-expense.svg';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ isValidBudget, setIsValidBudget ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ animateModal, setAnimateModal ] = useState(false);

  const [ expenses, setExpenses ] = useState([]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  }

  const saveExpense = ( expense ) => {
    expense.id = generateUniqueId();
    setExpenses([...expenses, expense]);

  }

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
          <img 
            src={ IconNewExpense } 
            alt="Icon new expense"
            onClick={ handleNewExpense } 
          />
        </div>
      ) }

      { modal && <Modal 
                    setModal={ setModal } 
                    animateModal={ animateModal }
                    setAnimateModal= { setAnimateModal }
                    saveExpense={ saveExpense }
                  />}

    </div>
  )
}

export default App;

import { useState } from 'react';
import Header from './components/Header';
import ListExpenses from './components/ListExpenses';
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
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

  }

  return (
    <div className={ modal && 'fix'}>
      <Header 
        budget={ budget }
        setBudget={ setBudget }
        isValidBudget={ isValidBudget }
        setIsValidBudget= { setIsValidBudget }
      />

      { isValidBudget && (
        <>
          <main>
            <ListExpenses 
              expenses={ expenses }
            />
          </main>
          <div className='new-expense'>
            <img 
              src={ IconNewExpense } 
              alt="Icon new expense"
              onClick={ handleNewExpense } 
            />
          </div>
        </>
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

import { useState, useEffect } from 'react';
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

  const [ expenseToUpdate, setExpenseToUpdate ] = useState({});

  useEffect(() => {
    if(Object.keys(expenseToUpdate).length > 0) {
      showModal();
    }
  }, [ expenseToUpdate ]);
  

  const handleNewExpense = () => {
    showModal();
    setExpenseToUpdate({});
  }

  const showModal = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300)
  }

  const saveExpense = ( expense ) => {
    if(expense.id) {
      updateExpense(expense);

    } else {
      createExpense(expense);
    }
  }

  const createExpense = ( expense ) => {
    expense.id = generateUniqueId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);
  }

  const updateExpense = ( expense ) => {
    const expensesUpdated = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState );
    setExpenses(expensesUpdated); 
  };

  /**
   * Detele Expense
   * @param {String} id 
   */
  const deleteExpense = ( id ) => {
    const expensesUpdated = expenses.filter( expense => expense.id !== id);
    setExpenses(expensesUpdated); 
  }

  return (
    <div className={ modal ? 'fix' : undefined}>
      <Header 
        budget={ budget }
        setBudget={ setBudget }
        isValidBudget={ isValidBudget }
        setIsValidBudget= { setIsValidBudget }
        expenses={ expenses }
      />

      { isValidBudget && (
        <>
          <main>
            <ListExpenses 
              expenses={ expenses }
              setExpenseToUpdate={ setExpenseToUpdate }
              deleteExpense={ deleteExpense }
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
                    expenseToUpdate={ expenseToUpdate }
                    setExpenseToUpdate={ setExpenseToUpdate }
                  />}

    </div>
  )
}

export default App;

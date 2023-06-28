import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ListExpenses from './components/ListExpenses';
import Modal from './components/Modal';
import { generateUniqueId } from './helpers';
import IconNewExpense from './assets/img/new-expense.svg';

function App() {

  const [ budget, setBudget ] = useState( () => Number(localStorage.getItem('budget')) ?? 0 );

  const [ isValidBudget, setIsValidBudget ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ animateModal, setAnimateModal ] = useState(false);

  const [ expenses, setExpenses ] = useState(() => JSON.parse(localStorage.getItem('expenses')) ?? []);

  const [ expenseToUpdate, setExpenseToUpdate ] = useState({});

  const [ filter, setFilter ] = useState('');
  const [ expensesFiltered, setExpensesFiltered ] = useState([]);

  useEffect(() => {
    if(Object.keys(expenseToUpdate).length > 0) {
      showModal();
    }
  }, [ expenseToUpdate ]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [ budget ])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? 0);
  }, [ expenses ])

  useEffect(() => {
    if(budget > 0) {
      setIsValidBudget(true);
    }
  }, [])

  useEffect(() => {
    if(filter) {
      const expensesFiltered = expenses.filter( expense => expense.category === filter );
      
      setExpensesFiltered(expensesFiltered);
    }
  }, [ filter ])
  

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
    setExpenseToUpdate({});
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
        setExpenses={ setExpenses }
      />

      { isValidBudget && (
        <>
          <main>
            <Filters 
              filter={ filter }
              setFilter={ setFilter }
            />
            <ListExpenses 
              expenses={ expenses }
              setExpenseToUpdate={ setExpenseToUpdate }
              deleteExpense={ deleteExpense }
              filter={ filter }
              expensesFiltered={ expensesFiltered }
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

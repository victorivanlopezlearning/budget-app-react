import { useState, useEffect } from 'react';
import ErrorLabel from './ErrorLabel';
import CloseModalSVG from '../assets/img/close-modal.svg';

const Modal = ({ 
  setModal, 
  animateModal, 
  setAnimateModal, 
  saveExpense, 
  expenseToUpdate,
  setExpenseToUpdate
}) => {

  const [ message, setMessage ] = useState('');

  const [ nameExpense, setNameExpense ] = useState('');
  const [ qty, setQty ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ date, setDate ] = useState('');
  const [ id, setId ] = useState('');

  useEffect(() => {
    if(Object.keys(expenseToUpdate).length > 0) {
      setNameExpense(expenseToUpdate.nameExpense);
      setQty(expenseToUpdate.qty);
      setCategory(expenseToUpdate.category);
      setDate(expenseToUpdate.date);
      setId(expenseToUpdate.id);
    }
  }, [])
  

  const handleHiddeModal = () => {
    setAnimateModal(false);
    setExpenseToUpdate({});
    setModal(false);

    // setTimeout(() => {
    // }, 300);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([ nameExpense, qty, category ].includes('')) {
      setMessage('Todos los campos son obligatorios');
      return;
    }
    setMessage('');
    saveExpense({ nameExpense, qty, category, id, date });
    handleHiddeModal();
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img 
          src={ CloseModalSVG } 
          alt="Icon Close Modal"
          onClick={ handleHiddeModal }
        />
      </div>

      <form 
        className={`form ${ animateModal ? 'animate' : 'close' }`}
        onSubmit={ handleSubmit }
      >
        <legend>{expenseToUpdate.nameExpense ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        { message && <ErrorLabel message={ message }  type='error' /> }

        <div className='field'>
          <label htmlFor="nameExpense">Nombre Gasto</label>

          <input 
            type="text" 
            id="nameExpense" 
            name="nameExpense"
            placeholder='Añade el nombre del gasto'
            value={ nameExpense } 
            onChange={ (e) => setNameExpense(e.target.value)}
          />
        </div>

        <div className='field'>
          <label htmlFor="qty">Cantidad</label>

          <input 
            type="number" 
            id="qty" 
            name="qty"
            placeholder='Añade la cantidad del gasto: ej. 300'
            value={ qty }
            onChange={ (e) => setQty(Number(e.target.value))}
          />
        </div>

        <div className='field'>
          <label htmlFor="category">Categoría</label>

          <select 
            name="category" 
            id="category"
            value={ category }
            onChange={ (e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="home">Hogar</option>
            <option value="food">Comida</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="various">Gastos Varios</option>
          </select>
        </div>

        <input 
          type="submit" 
          value={expenseToUpdate.nameExpense ? 'Guardar Cambios' : 'Añadir Gasto'} 
        />
      </form>
    </div>
  )
}

export default Modal;
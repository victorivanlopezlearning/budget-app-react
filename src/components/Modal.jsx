import CloseModalSVG from '../assets/img/close-modal.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

  const handleHiddenModal = () =>{
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img 
          src={ CloseModalSVG } 
          alt="Icon Close Modal"
          onClick={ handleHiddenModal }
        />
      </div>

      <form className={`form ${ animateModal ? 'animate' : 'close' }`}>
        <legend>Nuevo Gasto</legend>

        <div className='field'>
          <label htmlFor="name">Nombre Gasto</label>

          <input 
            type="text" 
            id="name" 
            name="name"
            placeholder='Añade el nombre del gasto' 
          />
        </div>

        <div className='field'>
          <label htmlFor="qty">Cantidad</label>

          <input 
            type="number" 
            id="qty" 
            name="qty"
            placeholder='Añade la cantidad del gasto: ej. 300' 
          />
        </div>

        <div className='field'>
          <label htmlFor="category">Categoría</label>

          <select name="category" id="category">
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="various">Gastos Varios</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir Gasto" 
        />
      </form>
    </div>
  )
}

export default Modal;
import { useState, useEffect } from 'react';

const Filters = ({ filter, setFilter}) => {
  return (
    <div className='filters shadow container'>
      <form>
        <div className='field'>
          <label htmlFor="filters">Filtar Gastos</label>

          <select 
            name="filters" 
            id="filters"
            value={ filter }
            onChange={ (e) => setFilter(e.target.value) }
          >
            <option value="">-- Todas las Categorías --</option>
            <option value="saving">Ahorro</option>
            <option value="home">Hogar</option>
            <option value="food">Comida</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="various">Gastos Varios</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters;

/**
 * Date formatting
 * @param {Number} date number of milliseconds
 * @returns {String}
 */
export const formatDate = ( date ) => {
  const objDate = new Date(date);

  const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
  };

  return objDate.toLocaleDateString('es-MX', options);
}
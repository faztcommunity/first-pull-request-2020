/**
 * Example of the REVERSE method
 * The reverse() method reverses an array in place. 
 * The first array element becomes the last, and the last array element becomes the first.
 * 
 * Sintaxis
 * array.reverse()
 * 
 * Returned value
 * the inverted array
 *  
 */

/**
 * return days of week or weekend inverted
 * @param {integer} option - specify which days we return
 * @returns {string} - Days
 */
const days = (option) => {

    const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekend = ['Saturday', 'Sunday'];

    return (option == 1) ? `Work Days: ${workDays.reverse()}` : `Weekend Days: ${weekend.reverse()}`;
};

// console.log(days(1));
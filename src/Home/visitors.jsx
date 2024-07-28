// import React, { useState, useEffect } from 'react';

// function VisitorCounter() {
//     // State variable for counter
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         let storedCounter = localStorage.getItem('visitorCounter');
//         if (storedCounter === null) {
//             storedCounter = 0;
//         } else {
//             storedCounter = parseInt(storedCounter);
//         }

//         setCounter(storedCounter + 1);

//         localStorage.setItem('visitorCounter', storedCounter.toString());
//     }, []);

//     return (
//         <div>
//             <h1>Welcome to Our Website</h1>
//             <p>Total Visitors: {counter}</p>
//         </div>
//     );
// }

// export default VisitorCounter;

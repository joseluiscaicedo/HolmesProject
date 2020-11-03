import React, { useState, useEffect } from 'react';

// function useDatos(url) {
//   const [data, setData] = useState({});
//   async function getData() {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();

//       setData(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   useEffect(() => {
//     getData(url);
//   }, []);

//   return data;
// }

// export default useDatos;

function Datos() {
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch(' https://api-holmes.herokuapp.com/users');
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return <div>data</div>;
}

export default Datos;


import LogoImage from "../assets/images/logo.png";

const Header = ({ onFilterInputChange }) => {
  return (
    <header className="text-3xl font-bold flex justify-between bg-green-800 fixed w-full">
      <img className='w-60 h-20 pl-10' src={LogoImage} alt="logo" />
      <div className="flex items-center mr-10">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          className="mr-3 p-2 rounded border-2 border-green-600"
          onChange={(e) => onFilterInputChange(e.target.value)}
        />
        <button className='p-2 rounded text-white text-2xl bg-green-600'>Filtrar</button>
      </div>
    </header>
  );
};

export default Header;



// import React, { useState } from 'react';
// import LogoImage from "../assets/images/logo.png";

// const Header = ({ onFilterInputChange }) => {
//   const [filterValue, setFilterValue] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setFilterValue(value);
//     onFilterInputChange(value); // Llama a la función de filtrado del componente padre pasando el valor del filtro
//   };

//   return (
//     <header className="text-3xl font-bold flex justify-between bg-green-800 fixed w-full">
//       <img className='w-60 h-20 pl-10' src={LogoImage} alt="logo" />
//       <div className="flex items-center mr-10">
//         <input
//           type="text"
//           placeholder="Filtrar por nombre"
//           className="mr-3 p-2 rounded border-2 border-green-600"
//           value={filterValue}
//           onChange={handleInputChange}
//         />
//         <button className='p-2 rounded text-white text-2xl bg-green-600'>Filtrar</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
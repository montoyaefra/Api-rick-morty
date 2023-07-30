import React, { useState, useCallback } from 'react';

const Aside = ({ onFilterChange }) => {
  const initialFilters = {
    status: [],
    gender: [],
    species: []
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleCheckboxChange = useCallback((filterType, value) => {
    const updatedFilters = {
      ...filters,
      [filterType]: filters[filterType].includes(value)
        ? filters[filterType].filter((filterValue) => filterValue !== value)
        : [...filters[filterType], value]
    };
    console.log("Updated filters:", updatedFilters);
    setFilters(updatedFilters); // Actualiza los filtros en el estado local del componente
    onFilterChange(updatedFilters); // Llama a la función de cambio de filtro desde el componente padre
  }, [filters, onFilterChange]);

            
 return( 
 <aside id="default-sidebar" className="fixed top-0 left-0 z-20 w-31 h-screen transition-transform -translate-x-full sm:translate-x-0" >
     <div className="h-full px-3 my-20 py-8 overflow-y-auto dark:bg-green-900">
          
          <h5 className='text-white text-3xl px-10 font-bold'>status</h5>
          <div className="flex items-center flex justify-center mt-5">
              <input id="link-checkbox" onChange={() => handleCheckboxChange('status', 'Alive')} type="checkbox" value="alive" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Alive
              </label>
          </div>
  
          <div className="flex items-center flex justify-center mt-2">
              <input id="link-checkbox" type="checkbox" value="dead" onChange={() => handleCheckboxChange('status', 'Dead')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Dead</label>
          </div>
  
          <div className="flex items-center flex justify-center mt-2 mb-4">
              <input id="link-checkbox" type="checkbox" value="unknown" onChange={() => handleCheckboxChange('status', 'unknown')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Unknow</label>
          </div>
  
          <h5 className='text-white text-3xl px-10 font-bold'>Genger</h5>
  
          <div className="flex items-center flex justify-center mt-5">
              <input id="link-checkbox" type="checkbox" value="female" onChange={() => handleCheckboxChange('gender', 'Female')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Female</label>
          </div>
  
          <div className="flex items-center flex justify-center mt-2">
              <input id="link-checkbox" type="checkbox" value="male" onChange={() => handleCheckboxChange('gender', 'Male')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Male</label>
          </div>
  
          <div className="flex items-center flex justify-center mt-2 mb-4">
              <input id="link-checkbox" type="checkbox" value="unknow" onChange={() => handleCheckboxChange('gender', 'unknown')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Unknow</label>
          </div>
  
          <h5 className='text-white text-3xl px-10 font-bold'>Species</h5>
  
          <div className="flex items-center flex justify-center mt-5">
              <input id="link-checkbox" type="checkbox" value="animal" onChange={() => handleCheckboxChange('species', 'Animal')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Animal</label>
          </div>
  
          <div className="flex items-center flex justify-center mt-2">
              <input id="link-checkbox" type="checkbox" value="human" onChange={() => handleCheckboxChange('species', 'Human')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="link-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Human</label>
          </div>
  
     </div>
  </aside>
)};

export default Aside;

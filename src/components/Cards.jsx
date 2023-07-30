import React from 'react';

function Cards({ data }) {
  return (
    <div className='flex flex-wrap pt-20 ml-20 pl-20'>
      {data.length === 0 ? (
        <p className='text-2xl text-gray-600 ml-20'>Cargando...</p>
      ) : data.length === 0 ? (
        <p className='text-2xl text-gray-600 ml-20'>No se encontraron personajes.</p>
      ) : (
        data.map((character) => (
          <div key={character.id} className='card p-4 sm:ml-16' style={{ width: '200px' }}>
            <img className='rounded-full w-40 h-40  mb-4' src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}




export default Cards
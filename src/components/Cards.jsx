import React from 'react';

function Cards({ data, filterText }) {
  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className='flex flex-wrap pt-20 ml-20 pl-20'>
      {filteredData.length === 0 ? (
        <p className='text-2xl text-gray-600 ml-20'>No se encontraron personajes.</p>
      ) : (
        filteredData.map((character) => (
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

export default Cards;





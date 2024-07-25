import React from 'react';
import ObjectCard from './ObjectCard';
import { landscapes, persons } from './objectsData';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Persons</h1>
      <div className="object-grid">
        {persons.map((object) => (
          <ObjectCard key={object.id} object={object} />
        ))}
      </div>
   
     <div>
       <h1>LandScape</h1>
       <div className="object-grid">
         {landscapes.map((object) => (
           <ObjectCard key={object.id} object={object} />
         ))}
       </div>
       </div>
     </div>
  );
};

export default App;

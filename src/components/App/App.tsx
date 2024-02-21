import React, { useState } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function App() {
  function getFormattedDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  }

  const [selectedDate, setSelectedDate] = useState<string>(getFormattedDate(new Date()));

  return (
    <div className="App">
      <Navigation date={selectedDate} />
      <Main />
    </div>
  );
}

export default App;

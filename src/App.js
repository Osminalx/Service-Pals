import './Styles/App.css';
<<<<<<< HEAD
import Event from './Components/Event';
import Header from './Components/Header/Header';
=======
import Events from './Components/Events';
import AddEvent from './Components/AddEvent';
import { useState } from 'react';
>>>>>>> 78251b3f2e061c55464d59be12f165f5ef2d1d39

function App() {
  const [showAddEvents, setShowAddEvents] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      Titulo: 'Limpieza de playa',
      Organizador: 'Beach clean.inc',
      Fecha: '25/12/2022',
      Hora: '17:30',
      Descripcion:
        'Vamos a limpiar una playa desde el amanecer hasta el anochecer',
    },
    {
      id: 2,
      Titulo: 'Paseos caninos',
      Organizador: 'Doggy Rescue',
      Fecha: '13/11/2022',
      hora: '15:25',
      Descripcion:
        'Hay que pasear a los perritos por la ciudad para qur tengacn un día libre ',
    },
    {
      id: 3,
      Titulo: 'Limpieza de Río',
      Organizador: 'River cleaners',
      Fecha: '15/11/2022',
      Hora: '13:40',
      Descripcion:
        'Vamos a limpiar el río que tenemos más cerca de toda nuestra comunidad',
    },
  ]);

  const addEvent = (event) => {
    const id = id + 1;
    const newEvent = { id, ...event };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className='App'>
<<<<<<< HEAD
      <Header/>
      <Event />
=======
      <Events
        events={events}
        onAdd={() => setShowAddEvents(!showAddEvents)}
        showAdd={showAddEvents}
      />
      {showAddEvents && <addEvent onAdd={addEvent} />}
      {events.length > 0 ? (
        <Events events={events} onDelete={deleteEvent} />
      ) : (
        'No hay eventos de momento'
      )}
>>>>>>> 78251b3f2e061c55464d59be12f165f5ef2d1d39
    </div>
  );
}

export default App;

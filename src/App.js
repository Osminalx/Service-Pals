import './Styles/App.css';
import Header from './Components/Header/Header';
import Events from './Components/Events/Events';
import AddEvent from './Components/AddEvent';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);
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
        'Hay que pasear a los perritos por la ciudad para que tengacn un día libre ',
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

  const addEvent2 = (event) => {
    const id = +1;
    const newEvent = { id, ...event };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const onClose = () => setShowAddEvent(false);

  return (
    <div className='App'>
      <Header />

      <AddEvent
        handleClose={onClose}
        openval={showAddEvent}
        onAdd={addEvent2}
      />

      {events.length > 0 ? (
        <Events events={events} onAdd={addEvent2} />
      ) : (
        'No hay eventos disponibles'
      )}
      <Footer
        onAdd={() => setShowAddEvent(!showAddEvent)}
        showAddEvent={showAddEvent}
      />
    </div>
  );
}

export default App;

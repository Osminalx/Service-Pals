import Event from '../Event/Event'
import MultiActionAreaCard from '../Event/EventMui'
import "../Events/Events.css"

const Events = ({events,onDelete,onAdd}) => {
  return (
    <div className='cardsContainer'>
    {events.map((event)=>{

       return  <MultiActionAreaCard key= {event.id} event={event}/>
    })}
    </div>
  )
}

export default Events
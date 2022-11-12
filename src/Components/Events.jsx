import Event from './Event'

const Events = ({events,onDelete,onAdd}) => {
  return (
    <div >
    {events.map((event)=>{

       return  <Event key= {event.id} event={event}/>
    })}
    </div>
  )
}

export default Events
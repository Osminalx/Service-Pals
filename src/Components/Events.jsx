import Event from './Event'

const Events = ({events,onDelete,onAdd}) => {
  return (
    <>
    {events.map((event)=>{

       return  <Event key= {event.id} event={event}/>
    })}
    </>
  )
}

export default Events
import React from 'react'
import './Picker.css'


export default function Picker() {

    const [rooms, setRooms] = React.useState([])

    function handleClick(event) {
        const newRoom = {
            id: rooms.length,
            x: event.clientX -15,
            y: event.clientY-15,
        }
        setRooms([...rooms, newRoom])
        console.log(rooms)
    }


    return (
        <div
        className='picker'
        
        onClick={handleClick}
        >
        {rooms.map((room) => (
            <div className='room'
            key={room.id}
            style={{
                left: room.x,
                top: room.y,
            }}
            />
        ))}
            

        </div>
    )
    }
import React from "react";
import "./Picker.css";

export default function Picker() {
  function handleClick(event) {
    const roomId = event.target.id;
    console.log(`Room ${roomId} was clicked`);
  }
  const allRooms = [
    { id: 0, x: 895, y: 668 },
    { id: 1, x: 975, y: 251 },
    { id: 2, x: 658, y: 100 },
    { id: 3, x: 452, y: 86 },
    { id: 4, x: 267, y: 263 },
    { id: 5, x: 230, y: 708 },
    { id: 6, x: 377, y: 432 },
    { id: 7, x: 558, y: 266 },
    { id: 8, x: 673, y: 935 },
  ];

  return (
    <div className="picker">
      {allRooms.map((room) => (
        <div
          className="room"
          key={room.id}
          style={{
            left: room.x,
            top: room.y,
          }}
          id={room.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

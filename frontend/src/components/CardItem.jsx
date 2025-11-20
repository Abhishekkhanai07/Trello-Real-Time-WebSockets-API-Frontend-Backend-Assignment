import React from 'react';

export default function CardItem({ card, onDelete, onEdit }) {
  return (
    <div className="card">
      <div>{card.name}</div>
      <div>
        <button className="btn" style={{marginRight:6}} onClick={() => {
          const newName = prompt('New name', card.name);
          if (newName) onEdit(card.id, newName);
        }}>Edit</button>
        <button className="btn" onClick={() => onDelete(card.id)}>Delete</button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import CardItem from './CardItem';

export default function ListColumn({ list, boardId, onAdd, onDelete, onEdit }) {
  const [name, setName] = useState('');
  return (
    <div className="column">
      <h3>{list.name}</h3>
      <div>
        {list.cards.map(c => <CardItem key={c.id} card={c} onDelete={onDelete} onEdit={onEdit} />)}
      </div>
      <input className="input" placeholder="New card name" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="btn" onClick={() => { if (!name) return alert('Enter name'); onAdd(boardId, list.id, name); setName(''); }}>Add</button>
    </div>
  );
}

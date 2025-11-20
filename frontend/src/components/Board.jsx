import React from 'react';
import ListColumn from './ListColumn';

export default function Board({ board, onAdd, onDelete, onEdit }) {
  return (
    <div>
      <h2>{board.name}</h2>
      <div style={{display:'flex', gap:12}} className="board">
        {board.lists.map(list => (
          <ListColumn key={list.id} list={list} boardId={board.id} onAdd={onAdd} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}

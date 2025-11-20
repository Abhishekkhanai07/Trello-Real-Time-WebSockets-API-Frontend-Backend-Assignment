import React, { useEffect, useState } from 'react';
import { getBoards, createTask, updateTask, deleteTask } from './api';
import socket from './socket';
import Board from './components/Board';

export default function App() {
  const [boards, setBoards] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    load();
    socket.on('cardCreated', (data) => {
      addEvent('cardCreated', data);
      load();
    });
    socket.on('cardUpdated', (data) => {
      addEvent('cardUpdated', data);
      load();
    });
    socket.on('cardDeleted', (data) => {
      addEvent('cardDeleted', data);
      load();
    });
    return () => socket.off();
  }, []);

  async function load() {
    const b = await getBoards();
    setBoards(b || []);
  }

  function addEvent(type, data) {
    setEvents(prev => [{ id: Date.now(), when: new Date().toLocaleTimeString(), type, data }, ...prev].slice(0,20));
  }

  async function handleAdd(boardId, listId, name) {
    await createTask(boardId, listId, name);
  }

  async function handleEdit(id, newName) {
    await updateTask(id, newName);
  }

  async function handleDelete(id) {
    await deleteTask(id);
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
       <div>
  <h1 className="header-title">Trello Realtime Demo (Mock)</h1>
  <div className="board">{/* columns */}</div>
</div>

      </div>
      <div className="app">
        <div style={{flex:1}}>
          {boards.map(board => (
            <Board key={board.id} board={board} onAdd={handleAdd} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
        <div className="events">
          <div className="small">Realtime Events</div>
          <div>
            {events.length === 0 && <div className="small">No events yet</div>}
            {events.map(e => (
              <div key={e.id} style={{padding:'6px 0', borderBottom:'1px solid #eee'}}>
                <div style={{fontSize:12, color:'#333'}}>{e.type} <span style={{color:'#999'}}>({e.when})</span></div>
                <div style={{fontSize:12, color:'#666'}}>{JSON.stringify(e.data)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

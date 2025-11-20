const fs = require('fs');
const path = require('path');
const { broadcast } = require('../websocket/socket');

const dbPath = path.join(__dirname, '..', 'db.json');

function readDB() { return JSON.parse(fs.readFileSync(dbPath, 'utf8')); }
function writeDB(data) { fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); }

exports.createTask = (req, res) => {
  const { boardId, listId, name } = req.body;
  const db = readDB();
  const board = db.boards.find(b => b.id === boardId);
  if (!board) return res.status(404).json({ error: 'Board not found' });
  const list = board.lists.find(l => l.id === listId);
  if (!list) return res.status(404).json({ error: 'List not found' });

  const card = { id: "card_" + Date.now(), name: name || 'New Card' };
  list.cards.push(card);
  writeDB(db);
  broadcast('cardCreated', { boardId, listId, card });
  res.json(card);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const db = readDB();
  let updated = null;
  db.boards.forEach(board => {
    board.lists.forEach(list => {
      list.cards.forEach(card => {
        if (card.id === id) {
          card.name = name || card.name;
          updated = { boardId: board.id, listId: list.id, card };
        }
      });
    });
  });
  if (!updated) return res.status(404).json({ error: 'Card not found' });
  writeDB(db);
  broadcast('cardUpdated', updated);
  res.json(updated.card);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const db = readDB();
  let removed = false;
  db.boards.forEach(board => {
    board.lists.forEach(list => {
      const before = list.cards.length;
      list.cards = list.cards.filter(c => c.id !== id);
      if (list.cards.length < before) removed = true;
    });
  });
  if (!removed) return res.status(404).json({ error: 'Card not found' });
  writeDB(db);
  broadcast('cardDeleted', { id });
  res.json({ success: true });
};

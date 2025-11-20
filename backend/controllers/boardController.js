const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db.json');

function readDB() { return JSON.parse(fs.readFileSync(dbPath, 'utf8')); }
function writeDB(data) { fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); }

exports.getBoards = (req, res) => {
  const db = readDB();
  res.json(db.boards);
};

exports.createBoard = (req, res) => {
  const { name } = req.body;
  const db = readDB();
  const board = {
    id: "board_" + Date.now(),
    name: name || 'New Board',
    lists: [
      { id: "todo_" + Date.now(), name: "To Do", cards: [] },
      { id: "doing_" + Date.now(), name: "Doing", cards: [] },
      { id: "done_" + Date.now(), name: "Done", cards: [] }
    ]
  };
  db.boards.push(board);
  writeDB(db);
  res.json(board);
};

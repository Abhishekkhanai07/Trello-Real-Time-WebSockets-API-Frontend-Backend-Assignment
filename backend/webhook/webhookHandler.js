const { broadcast } = require('../websocket/socket');

exports.handleGet = (req, res) => {
  return res.status(200).send("OK");
};

exports.handleHead = (req, res) => {
  return res.status(200).send("OK");
};

exports.handlePost = (req, res) => {
  const body = req.body || {};
  const action = body.action || {};
  const type = action.type;

  const event = {
    type,
    data: action,
    raw: body
  };

  if (type === 'createCard') {
    broadcast('cardCreated', event);
  } else if (type === 'updateCard') {
    broadcast('cardUpdated', event);
  } else if (type === 'deleteCard') {
    broadcast('cardDeleted', event);
  } else if (type === 'createBoard' || type === 'updateBoard') {
    broadcast('boardUpdated', event);
  } else {
    broadcast('trelloEvent', event);
  }

  return res.status(200).send("OK");
};

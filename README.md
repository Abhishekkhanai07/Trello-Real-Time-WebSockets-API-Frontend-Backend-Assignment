<h1>📌 Trello Real-Time WebSockets + API Board</h1>

<p>
A complete <b>Real-Time Trello-style Task Board</b> built for the 
<b>Inscripts Frontend Internship Assignment 2025</b>.  
This system integrates <b>Trello REST APIs</b>, <b>WebSockets</b>, and 
<b>Trello Webhooks</b> to deliver instant updates across multiple users.
</p>

<hr>

<h2>📸 Output Screenshots</h2>

<p>Replace these with your real screenshots:</p>

<img src="YOUR_SCREENSHOT_1" width="800" />
<br><br>

<img src="YOUR_SCREENSHOT_2" width="800" />
<br><br>

<img src="YOUR_SCREENSHOT_3" width="800" />
<br><br>

<hr>

<h2>📄 Project Overview</h2>

<p>
A real-time task management dashboard built to replicate core Trello features:
</p>

<ul>
    <li>Real-time updates across all clients using WebSockets</li>
    <li>CRUD operations synced directly with Trello API</li>
    <li>Trello webhook integration for event-driven updates</li>
    <li>Clean React UI for task management across lists</li>
    <li>Fully separated frontend and backend architecture</li>
</ul>

<hr>

<h2>📌 Project Objectives</h2>

<ul>
    <li>Create a Trello-style kanban board (lists & cards)</li>
    <li>Add, update, delete tasks using Trello REST API</li>
    <li>Create boards programmatically</li>
    <li>Use WebSockets for real-time multi-user sync</li>
    <li>Use Trello Webhooks to reflect remote changes instantly</li>
    <li>Follow modular and scalable folder structure</li>
</ul>

<hr>

<h2>🛠️ Tools & Technologies</h2>

<ul>
    <li><b>Frontend:</b> React + Vite</li>
    <li><b>Backend:</b> Node.js + Express</li>
    <li><b>Real-Time:</b> Socket.IO WebSockets</li>
    <li><b>API Integration:</b> Trello REST API</li>
    <li><b>Webhook System:</b> Trello Webhooks → Express → WebSockets</li>
    <li><b>Networking:</b> ngrok for public webhook testing</li>
    <li><b>Styling:</b> CSS / TailwindCSS</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
trello-realtime-assignment/
│── frontend/
│   ├── components/
│   │     ├── Board.jsx
│   │     ├── List.jsx
│   │     ├── Card.jsx
│   ├── pages/
│   │     ├── Home.jsx
│   ├── hooks/
│   │     ├── useWebSocket.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│── backend/
│   ├── routes/
│   │     ├── tasks.js
│   │     ├── boards.js
│   ├── services/
│   │     ├── trelloAPI.js
│   ├── websocket/
│   │     ├── socketHandler.js
│   ├── webhook.js
│   ├── server.js
│   └── .env
│
└── README.md
</pre>

<hr>

<h2>⚙️ Methodology</h2>

<ol>

<li><b>Frontend Task Board UI</b></li>
<ul>
<li>Trello-style lists and draggable cards</li>
<li>React components for Board, List, and Card</li>
<li>Axios used for communicating with backend APIs</li>
<li>Socket.IO client listens for real-time updates</li>
</ul>

<li><b>WebSocket Integration</b></li>
<ul>
<li>Backend broadcasts task events to all connected clients</li>
<li>Live UI updates without page refresh</li>
<li>Supports task create/update/delete</li>
</ul>

<li><b>Trello API Integration</b></li>
<ul>
<li>Create tasks → Trello POST /cards</li>
<li>Update tasks → Trello PUT /cards/{id}</li>
<li>Delete tasks → Trello DELETE /cards/{id}</li>
<li>Create board → Trello POST /boards</li>
</ul>

<li><b>Trello Webhooks</b></li>
<ul>
<li>Trello sends events to backend's webhook URL</li>
<li>Backend normalizes event data</li>
<li>Broadcasts events to frontend via WebSockets</li>
</ul>

</ol>

<hr>

<h2>🚀 How to Run</h2>

<ol>

<li><b>Clone the Repository</b></li>
<ul>
<li>git clone https://github.com/YOUR_USERNAME/Trello-Real-Time-WebSockets-Project.git</li>
</ul>

<li><b>Backend Setup</b></li>
<ul>
<li>cd backend</li>
<li>npm install</li>
<li>Create <code>.env</code> file with:</li>
</ul>

<pre>
PORT=5000
TRELLO_KEY=your_key
TRELLO_TOKEN=your_token
TRELLO_BOARD_ID=your_board_id
WEBHOOK_CALLBACK_URL=https://your-ngrok-url/webhook
</pre>

<li><b>Start Backend</b></li>
<ul>
<li>npm start</li>
</ul>

<li><b>Expose Backend via ngrok (for webhooks)</b></li>
<ul>
<li>ngrok http 5000</li>
</ul>

<li><b>Register Trello Webhook</b></li>
<pre>
curl -X POST "https://api.trello.com/1/webhooks/?key=YOUR_KEY&token=YOUR_TOKEN" \
-d "description=Trello Webhook" \
-d "callbackURL=YOUR_NGROK_URL/webhook" \
-d "idModel=YOUR_BOARD_ID"
</pre>

<li><b>Frontend Setup</b></li>
<ul>
<li>cd frontend</li>
<li>npm install</li>
<li>npm run dev</li>
</ul>

</ol>

<hr>

<h2>🧪 API Testing (Postman)</h2>

<ul>
    <li><b>POST /api/tasks</b> – Create task</li>
    <li><b>PUT /api/tasks/:id</b> – Update task</li>
    <li><b>DELETE /api/tasks/:id</b> – Delete task</li>
    <li><b>POST /api/boards</b> – Create board</li>
</ul>

<p>Use your Postman collection provided in the repo.</p>

<hr>

<h2>🔄 Real-Time Demo</h2>

<ol>
<li>Open two browser windows</li>
<li>Create or update a task in one window</li>
<li>Observe instant update in the second window</li>
<li>Delete or drag tasks to see real-time interaction</li>
</ol>

<hr>

<h2>🗑 Removing Webhook</h2>

<pre>
DELETE https://api.trello.com/1/webhooks/WEBHOOK_ID?key=YOUR_KEY&token=YOUR_TOKEN
</pre>

<hr>

<h2>🙋‍♂️ Author</h2>

<p>
<b>Abhishek Khanai</b><br>
Frontend Developer • Real-Time Applications<br>
GitHub: 
<a href="https://github.com/Abhishekkhanai07">Abhishekkhanai07</a>
</p>

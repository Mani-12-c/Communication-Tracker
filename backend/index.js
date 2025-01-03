const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const companyRoutes = require('./routes/company');
const methodRoutes = require('./routes/company');
const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user')
const Connected = require('./config/db')


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
Connected()


// Routes
app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/methods', methodRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

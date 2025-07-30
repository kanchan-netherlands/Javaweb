const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Contact = mongoose.model('Contact', new mongoose.Schema({ name: String }));

app.post('/api/contact', async (req, res) => {
  const { name } = req.body;
  const entry = new Contact({ name });
  await entry.save();
  res.send({ message: 'Saved to Cosmos DB' });
});

app.listen(3000, () => console.log('Node server running'));

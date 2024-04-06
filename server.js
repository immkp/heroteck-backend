const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email, phone } = req.body;
    // Log the submitted data
    console.log('Submitted Data:', { name, email, phone });
    res.status(200).json({ success: true });
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

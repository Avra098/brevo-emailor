const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const event = req.body.event;
  const email = req.body.email;
  const messageId = req.body.messageId;
  const timestamp = req.body.timestamp;

  console.log(` Event: ${event}`);
  console.log(` Email: ${email}`);
  console.log(` Message ID: ${messageId}`);
  console.log(` Timestamp: ${timestamp}`);

  // Handle specific events
  switch (event) {
    case 'delivered':
      console.log(' Email delivered');
      break;
    case 'opened':
      console.log(' Email opened');
      break;
    case 'click':
      console.log(` Link clicked: ${req.body.url}`);
      break;
    case 'unsubscribe':
      console.log(' User unsubscribed');
      break;
    case 'spam':
      console.log(' Spam complaint received');
      break;
    default:
      console.log(' Other event:', event);
  }

  res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
  console.log(` Webhook listener running at http://localhost:${PORT}/webhook`);
});

module.exports = { startWebhookServer };

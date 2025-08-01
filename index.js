const { sendEmail } = require('./emailSender');
const { startWebhookServer } = require('./webhookServer');

module.exports = {
  sendEmail,
  startWebhookServer,
};

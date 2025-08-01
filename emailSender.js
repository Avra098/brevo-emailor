require("dotenv").config();
const Brevo = require("@getbrevo/brevo");

const apiInstance = new Brevo.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Main function exported
async function sendEmail({ to, sender, templateId, params }) {
  const sendSmtpEmail = {
    to: [{ email: to }],
    sender: sender,
    templateId: templateId,
    params: params,
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(" Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error(" Error sending email:", error.response?.body || error.message);
    throw error;
  }
}

module.exports = {
  sendEmail,
};

require("dotenv").config();
const Brevo = require("@getbrevo/brevo");

const apiInstance = new Brevo.TransactionalEmailsApi();

const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;


const sendSmtpEmail = {
  to: [to],
  sender,
  templateId,
  params,
};


apiInstance.sendTransacEmail(sendSmtpEmail).then(
  function (data) {
    console.log(" Email sent successfully:", data);
  },
  function (error) {
    console.error(" Error sending email:", error.response?.body || error.message);
  }
);

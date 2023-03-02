import sgMail from '@sendgrid/mail';

function sendMailSendGrid(data:sgMail.MailDataRequired) {
  const apiKey = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(apiKey);
  return sgMail.send(data);
}
export default sendMailSendGrid;

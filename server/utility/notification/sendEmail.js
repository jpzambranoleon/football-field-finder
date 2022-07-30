const sgMail = require("@sendgrid/mail");

module.exports = function SendEmail(content, recipient, subject) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: recipient,
    from: "teamfindertest@protonmail.com",
    subject: `Team Finder - ${subject}`,
    text: "Team Finder notification",
    html: `<h1>${content}</h1>`,
  };
  return sgMail.send(msg);
};

const sendEmail = async ({ email }) => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email, // Change to your recipient
    from: 'citrushack@gmail.com', // Change to your verified sender
    subject: 'Cutie Hack Update',
    html: '<div><img src="https://cdn.foldnfly.com/images/lounge/steer2.jpg" /></div>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

export { sendEmail }
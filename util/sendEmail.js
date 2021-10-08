const sendEmail = async ({ 
  email,
  template_id,
  name,
  members,
  invite_code,
  newcomer
}) => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email, // Change to your recipient
    from: 'citrushack@gmail.com', // Change to your verified sender
    dynamic_template_data: {
      "first_name": name,
      "members": members,
      "invite_code": invite_code,
      "newcomer": newcomer
    },
    template_id: template_id
  }
  sgMail
    .send(msg)
    .then(() => {
      // console.log('Email sent')
    })
    .catch((error) => {
      // console.error(error)
    })
}

export { sendEmail }
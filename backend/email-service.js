const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'auxmercadeo@ubiqgroup.com',
    pass: process.env.EMAIL_PASSWORD, // Configura esta variable de entorno con la contraseña
  },
});

function sendLeadAssignmentEmail(to, lead) {
  const mailOptions = {
    from: 'auxmercadeo@ubiqgroup.com',
    to,
    subject: `Nuevo Lead Asignado: ${lead.nombre} ${lead.apellido}`,
    html: `
      <h3>Hola,</h3>
      <p>Se te ha asignado un nuevo lead con la siguiente información:</p>
      <ul>
        <li><strong>Nombre:</strong> ${lead.nombre} ${lead.apellido}</li>
        <li><strong>Empresa:</strong> ${lead.empresa || 'N/A'}</li>
        <li><strong>Correo:</strong> ${lead.correo}</li>
        <li><strong>Teléfono:</strong> ${lead.telefono}</li>
        <li><strong>Proyecto:</strong> ${lead.proyecto}</li>
        <li><strong>Presupuesto:</strong> ${lead.presupuesto}</li>
        <li><strong>Descripción:</strong> ${lead.descripcion}</li>
      </ul>
      <p>Por favor, revisa el CRM para más detalles.</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendLeadAssignmentEmail };

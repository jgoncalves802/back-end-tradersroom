import nodemailer from 'nodemailer';

export async function sendEmail(email: string, url: string, name: string) {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });
  const mailOptions = {
    from: {
      name: 'Equipe TradersRoom',
      address: 'equipe@tradersroom.com.br', 
    },
    to: email,
    subject: "Recuperação de Senha",
    html: `
    <style>
    .message-content {
      font-family: Arial, Helvetica, sans-serif;
      max-width: 600px;
      font-size: 18px;
      line-height: 21px;
    }
    </style>
    
    <div class="menssage-content">
      <p>Olá ${name}</p>
      <p>Parece que uma troca de senha para sua conta foi solicitada.</p>
      <p>Se foi você então click no botão abaixo.</p>
      <a href="${url}">
        <button>Resetar Senha</button>
      </a> 
      <p>Se não foi você, então descarte este e-mail!</p>
      <p>
        Obrigado!<br/>
        <strong>Equipe TradersRoom</strong>
      </p>
    </div>`,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
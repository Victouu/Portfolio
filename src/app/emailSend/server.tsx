import express, { Request, Response } from 'express';
import nodemailer, { Transporter } from 'nodemailer';

const app = express();
app.use(express.json());

// Configurer Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rouevictor@gmail.com',
    pass: '444429260',
  },
});

// Route pour gérer les soumissions de formulaire
app.post('/envoyer-email', (req: Request, res: Response) => {
  const { nom, email, sujet, message } = req.body;

  // Composer le corps de l'e-mail
  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'votre_adresse_email@gmail.com',
    subject: `Nouveau message de ${nom}: ${sujet}`,
    text: `Nom: ${nom}\nEmail: ${email}\nSujet: ${sujet}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});


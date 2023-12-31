//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 

console.log("Hello, Dcoder!")
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/signup', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'EndereÃ§o de e-mail invÃ¡lido.' });
  }

  try {
    // LÃ³gica para salvar o e-mail no banco de dados ou arquivo

    // Agendar o envio do e-mail promocional apÃ³s 24 horas
    setTimeout(async () => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aneto1772@gmail.com',
          pass: 'andreneto1519',
        },
      });

    const mailOptions = {
    from: 'aneto1772@gmail.com',
    to: email,
    subject: 'Pacote exclusivo de receitas para suas refeições!',
    html: `
      <p style="color: #333; font-family: Arial, sans-serif;">Transforme suas refeições diárias em experiências incríveis! Descubra nosso pacote exclusivo de receitas para criar pratos deliciosos e simples em casa. Torne cada refeição uma celebração!</p>
      <p style="color: #007bff; font-family: Arial, sans-serif;">Confira nosso <a href="https://go.hotmart.com/J89117275I" style="color: #007bff; text-decoration: underline;">link de venda</a> para mas ções.</p>
    `,
  
    res.status(200).json({ message: 'E-mail registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar o e-mail:', error);
    res.status(500).json({ error: 'Erro ao processar o e-mail.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
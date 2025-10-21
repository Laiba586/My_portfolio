import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5174

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields.' })
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    })

    const to = process.env.TO_EMAIL || 'swellbliss184@gmail.com'

    const info = await transport.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER || 'no-reply@example.com'}>`,
      to,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
    })

    return res.json({ message: 'Email sent successfully.', id: info.messageId })
  } catch (err) {
    console.error('Contact error:', err)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`)
})

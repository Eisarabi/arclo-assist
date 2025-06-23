export default function handler(req, res) {
  const { message, lang } = req.body;

  const reply =
    lang === 'de'
      ? `Du hast gefragt: "${message}". Ich bin Arclo im Testmodus.`
      : `You asked: "${message}". I'm Arclo running in test mode.`;

  res.status(200).json({ reply });
}

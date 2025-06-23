export default function handler(req, res) {
  const { message, lang } = req.body;

  const reply =
    lang === 'de'
      ? `Du hast gefragt: "${message}". Leider ist GPT im Testmodus.`
      : `You asked: "${message}". GPT is currently in test mode.`;

  res.status(200).json({ reply });
}


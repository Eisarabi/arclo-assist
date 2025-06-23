export default async function handler(req, res) {
  const { message, lang } = req.body;

  const systemPrompt = lang === 'de'
    ? "Du bist Arclo, eine freundliche digitale Assistentin für Menschen mit Behinderung. Antworte klar und respektvoll auf Deutsch."
    : "You are Arclo, a friendly digital assistant for people with disabilities. Answer clearly and respectfully in English.";

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ]
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices?.[0]?.message?.content });
}

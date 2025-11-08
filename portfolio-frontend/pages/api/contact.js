export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body || {};

  // For now just log — replace with SendGrid / AWS SES / API later
  console.log("Contact form:", { name, email, message });

  // Return success
  res.status(200).json({ ok: true });
}

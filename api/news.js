export default async function handler(req, res) {
  // Allow all origins for your frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { q = "latest" } = req.query; // default = latest
  const apiKey = process.env.GNEWS_API_KEY; // store key in env variable

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${q}&lang=en&max=5&apikey=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}

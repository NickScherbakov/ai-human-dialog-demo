import express from "express";
import path from "path";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// TODO: Replace with your actual credentials
const APP_ID = "<YOUR_APP_ID>";
const USER_KEY = "<YOUR_USER_KEY>";

app.use(express.static(path.join(__dirname, "public")));

app.get("/generateJWT", (req, res) => {
  const payload = { appId: APP_ID, platform: "web" };
  const options = { expiresIn: 60 * 5 }; // 5 minutes
  try {
    const clientToken = jwt.sign(payload, USER_KEY, options);
    res.json({ appId: payload.appId, token: clientToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
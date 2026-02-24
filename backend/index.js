// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

function requireEnv(name) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env: ${name}`);
    return v;
}

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Portfolio backend code is running!",
        sendEmailEndpoint: "/send-email (POST)",
    });
});

app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const service_id = requireEnv("EMAILJS_SERVICE_ID");
        const template_id = requireEnv("EMAILJS_TEMPLATE_ID");
        const user_id = requireEnv("EMAILJS_PUBLIC_KEY");

        const payload = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
                name,
                email,
                subject,
                message,
            },
        };


        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const raw = await response.text();
        const data = (() => { try { return JSON.parse(raw); } catch { return raw; } })();

        // Helpful logs while you test
        console.log("EmailJS status:", response.status, response.statusText);
        console.log("EmailJS response:", data);

        if (response.ok) {
            return res.json({ success: true, message: "✅ Email sent successfully! 🎉" });
        }

        // Bubble up EmailJS error details so frontend can show the real reason
        return res.status(500).json({
            success: false,
            message: "❌ Failed to send email",
            details: typeof data === "string" ? data : JSON.stringify(data),
            status: response.status,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
});

app.post("/notify-visit", async (req, res) => {
    try {
        const payload = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
                name: "Portfolio Tracker",
                email: "noreply@portfolio.com",
                subject: "� New Visitor Alert!",
                message: "Good news! Someone has just opened your Portfolio website.",
            },
        };

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log('Visit Notification Sent via EmailJS');
            return res.json({ success: true, message: 'Notification attempt logged' });
        } else {
            const errText = await response.text();
            console.log('EmailJS failed:', errText);
            return res.json({ success: false, message: 'Notification failed' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Notification failed' });
    }
});


const PORT = process.env.PORT || 5000; // fallback 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

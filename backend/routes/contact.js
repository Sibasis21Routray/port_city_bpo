
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import axios from "axios";

const router = express.Router();

// Log configuration
console.log("📧 Brevo Email:", process.env.BREVO_EMAIL);
console.log("🔑 API Key Exists:", !!process.env.BREVO_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { firstName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Validate that env variables are loaded
    if (!process.env.BREVO_EMAIL || !process.env.BREVO_API_KEY) {
      console.error("❌ Missing Brevo credentials in environment variables");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Port City BPO",
          email: process.env.BREVO_EMAIL,
        },
        to: [
          {
            email: "contactus@portcitybpo.lk",
          },
        ],
        replyTo: {
          email,
          name: firstName,
        },
        subject: `Contact Form - ${firstName}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ Email sent:", response.data.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ Email sending error:", error.response?.data || error.message);

    // Better error response
    let errorMessage = "Failed to send email";
    if (error.response?.status === 401) {
      errorMessage = "Something went wrong with the email service configuration";
    } else if (error.response?.status === 400) {
      errorMessage = error.response.data.message || "Invalid request";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

export default router;
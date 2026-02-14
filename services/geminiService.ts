
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

/**
 * Safely retrieves the API key from environment variables.
 */
const getSafeApiKey = (): string => {
  try {
    // Check if process and process.env exist before access
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Silent fail to prevent crash
  }
  return "";
};

export const getPhotographyConsultation = async (userMessage: string, history: ChatMessage[]) => {
  const apiKey = getSafeApiKey();
  
  if (!apiKey) {
    console.error("Gemini API key is missing. Ensure process.env.API_KEY is configured.");
    return "I'm currently resting my lens. Please reach out to us directly via WhatsApp at 89782 48437 for any inquiries!";
  }

  try {
    // Re-initialize client to ensure latest key is used and prevent global init crashes
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `
          You are M3foto AI, a friendly and creative photography assistant for M3foto studio in Vijayawada.
          M3foto specializes in: Portrait, Wedding, Event, Commercial, Parties, and Product Photography.
          Location: PINNAMANENI, Polyclinic Rd, Vijayawada.
          Phone/Whatsapp: 89782 48437.

          Your goal is to:
          1. Help users decide which photography service they need.
          2. Provide creative ideas for their shoot (poses, lighting, locations in Vijayawada).
          3. Encourage them to book a session.
          4. Be vibrant, professional, and helpful.
          5. Keep responses concise but engaging.

          If they ask about prices, tell them it depends on the project and invite them to reach out on WhatsApp for a custom quote.
        `,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble focusing my lens right now. Feel free to call us directly at 89782 48437!";
  }
};

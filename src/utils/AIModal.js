const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 0.2,
    topP: 0.8,
    topK: 20,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain"
};


async function runChat(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error in generating AI response:", error);
        return "Sorry, there was an error processing your request.";
    }
}

export default runChat;
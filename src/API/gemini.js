// const api_key= "AIzaSyDJ1J7nQONakERHbBxJE7LTlK4sqGb1vr4"
// const apiKey = "AIzaSyDioF3xjcZYQfnRehoTRFYy-9cooQVTfnY";


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"; // import and from hume likhna h pehle waala hta ke

const apiKey = "AIzaSyDJ1J7nQONakERHbBxJE7LTlK4sqGb1vr4";  // apni api key jo google studio se liya h
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {  // pass the prompt
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);  // pass prompt
  const response = result.response;
  console.log(response.text());
  return response.text()
}

 export default run;  // remember to export default ....
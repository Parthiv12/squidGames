import OpenAI from "openai";

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: "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",
});

// Function to generate a random Squid Game-themed coding problem
const generateCodingProblem = async () => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create a random coding problem inspired by Squid Game. Include a short story setup, problem description, and example input/output.`,
        },
      ],
      max_tokens: 500,
      temperature: 0.8,
    });

    // Extract and display the result
    const codingProblem = completion.choices[0].message.content;
    console.log("Squid Game-Themed Coding Problem:\n", codingProblem);
  } catch (error) {
    console.error("Error generating coding problem:", error.message);
  }
};

// Call the function
generateCodingProblem();

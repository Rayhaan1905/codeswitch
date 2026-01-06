import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({vertexai: false, apiKey: process.env.GOOGLE_API_KEY as string});

export async function POST(req: NextRequest){
    const { inputCode,inputLang,outputLang } = await req.json();


    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `
you are a code converting assistant .
Task : Convert the input code's language to the selected output code's language
with out any logic changes and use the similar variabels given to you first and handle any erros if present.
and dont add any comments to it just i need the exact copy of the code which i gave you first into the language i 
selected and dont give anything extra just an exact copy converted to the desired language.Handle the errors if any.

input code:
${inputCode}
input language:
${inputLang}
output language:
${outputLang}

Requirements:
 - handle erros if any 
 - give the ouput code with out quotations
 - preserve the logic first given given the input code

now give the output code. 
`,
    });

    const output = response.text;

    return Response.json({
        output
    }, {
        status:200
    })

}

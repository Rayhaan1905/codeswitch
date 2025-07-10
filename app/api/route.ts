import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({vertexai: false, apiKey: process.env.GOOGLE_API_KEY as string});

export async function POST(req: NextRequest,res: NextResponse){
    const { inputCode,inputLang,outputLang } = await req.json();


    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `
you are a code converting assistant .
Task : Convert the input code's language to the selected output code's language
with out any logic changes and use the similar variabels given to you first and handle any erros if present. 

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
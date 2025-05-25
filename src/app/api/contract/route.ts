
import { NextResponse } from "next/server";

interface contactRequestBody{
    name:"string",
    email:"string",
    message:string
}

export async function POST(request:Request) {
    try {
        await request.json() as contactRequestBody;
        return NextResponse.json({message:"Message sent successfully"},{status:200})
    } catch (error) {
        const errorMessage = error instanceof Error? error.message:"faild to sent message";

        return NextResponse.json(
            {
                message:errorMessage
            },
            {
                status:500
            }
        )
        
    }
    
}
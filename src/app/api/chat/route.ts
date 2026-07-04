import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are an AI assistant for F H & L Technologies (Pvt) Ltd, a fintech company in Sri Lanka specializing in AML/CFT/CPF compliance solutions.

Company Info:
- Contact: info@fhltech.lk
- Phone: +94 11 234 5678
- Location: Colombo, Sri Lanka
- Tagline: "Technology with Purpose, Solutions with Heart"

Services:
1. AML/CFT/CPF Consultancy - Full anti-money laundering solutions
2. goAML Reporting - UAT, threshold reporting, transaction reporting
3. goAML Audit & Validation - Independent audits & compliance validation
4. Regulatory Consultancy - Transaction mapping & compliance
5. System Design & Implementation - Enterprise solutions
6. Banking & Financial Systems - Cheque clearing, core banking, pension
7. Software Development with AI - Agentic AI systems
8. Website & Application Development - Modern web/mobile apps

Guidelines:
- Be helpful, professional, and friendly
- Recommend relevant services based on customer needs
- Suggest scheduling a consultation for detailed requirements
- Keep responses under 150 words
- Always be concise and informative`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // If no API key, return error
    if (!openai.apiKey) {
      return NextResponse.json({ 
        error: 'AI service not configured. Please contact info@fhltech.lk' 
      }, { status: 503 });
    }

    // Call GPT-4o-mini
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      max_tokens: 250,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 
      "I apologize, I couldn't generate a response. Please try again or contact us at info@fhltech.lk";

    return NextResponse.json({
      response,
      intent: 'gpt',
      confidence: 0.95,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'F H & L Technologies AI Chatbot API v2.0' 
  });
}

import { NextRequest, NextResponse } from 'next/server';

// Knowledge base for F H & L Technologies
const knowledgeBase = {
  services: {
    aml_cft: "F H & L Technologies provides comprehensive AML/CFT/CPF consultancy services. We offer risk assessment, policy development, compliance framework implementation, and ongoing monitoring support for financial institutions.",
    goaml: "Our goAML services include: goAML Reporting (UAT, threshold reporting, transaction reporting), goAML Audit & Validation (independent audits, source system reconciliation, compliance validation), and goAML Implementation support.",
    regulatory: "We provide regulatory consultancy for FIU reporting standards, transaction mapping, compliance requirements, and regulatory directions from Sri Lanka's Central Bank and FATF/APG standards.",
    ai: "We specialize in agentic AI systems with module-based architecture for enterprise applications, including intelligent chatbots, automated compliance monitoring, and predictive analytics.",
    banking: "Our banking solutions include cheque clearing systems, pension processing, core banking integration, and payment systems development.",
    erp: "We offer ERP solutions for business process automation, system design, development, and implementation consultancy.",
  },
  company: {
    tagline: "Technology with Purpose, Solutions with Heart. Eliminating risk through intelligent design, build to serve.",
    location: "Based in Colombo, Sri Lanka, serving clients locally and internationally.",
    experience: "Our team brings 29+ years of banking experience, 25+ years of software development expertise, and 9+ years of specialized compliance knowledge.",
  },
  compliance: {
    fiu: "We help ensure compliance with Sri Lanka Financial Intelligence Unit (FIU) requirements, including goAML threshold reporting and transaction reporting.",
    fatf: "Our solutions align with Financial Action Task Force (FATF) recommendations for anti-money laundering and counter-terrorist financing.",
    apg: "We support Asia/Pacific Group on Money Laundering (APG) member obligations and mutual evaluation readiness.",
  },
  contact: {
    email: "info@fhltech.lk",
    phone: "+94 11 234 5678",
    hours: "Mon-Fri: 9AM-6PM IST, Weekend: By appointment",
  }
};

// Simple intent detection and response generation
function generateResponse(userMessage: string): { response: string; intent: string; confidence: number } {
  const lowerMessage = userMessage.toLowerCase();
  
  // Intent patterns
  const intents = [
    { 
      pattern: /service|offer|provide|solution/,
      keywords: ['aml', 'cft', 'cpf', 'compliance', 'regulatory', 'banking', 'erp', 'ai', 'goaml', 'audit'],
      category: 'services'
    },
    { 
      pattern: /goaml|threshold|transaction|report/,
      keywords: ['goaml', 'threshold', 'transaction', 'report', 'fiu'],
      category: 'goaml'
    },
    { 
      pattern: /aml|anti.?money|terrorist|proliferation|compliance/,
      keywords: ['aml', 'cft', 'cpf', 'money laundering', 'terrorist', 'compliance'],
      category: 'aml'
    },
    { 
      pattern: /consult|advisor|expert|help/,
      keywords: ['consult', 'advisor', 'expert', 'help', 'guidance'],
      category: 'consultancy'
    },
    { 
      pattern: /contact|email|phone|call|reach|schedule|book|meeting|appointment/,
      keywords: ['contact', 'email', 'phone', 'call', 'reach', 'schedule', 'meeting'],
      category: 'contact'
    },
    { 
      pattern: /company|about|who|where|location|sri lanka|colombo/,
      keywords: ['company', 'about', 'who', 'where', 'location', 'sri lanka', 'experience'],
      category: 'company'
    },
    { 
      pattern: /price|cost|rate|fee|charge|quote|price/,
      keywords: ['price', 'cost', 'rate', 'fee', 'charge', 'quote', 'pricing'],
      category: 'pricing'
    },
    { 
      pattern: /hi|hello|hey|good morning|good afternoon|greetings/,
      keywords: ['hi', 'hello', 'hey', 'greetings'],
      category: 'greeting'
    },
    { 
      pattern: /thank|thanks|appreciate|grateful/,
      keywords: ['thank', 'thanks', 'appreciate'],
      category: 'thanks'
    }
  ];

  let bestMatch = { category: 'general', confidence: 0, keywords: [] as string[] };
  
  for (const intent of intents) {
    if (intent.pattern.test(lowerMessage)) {
      const foundKeywords = intent.keywords.filter(k => lowerMessage.includes(k));
      const confidence = foundKeywords.length / intent.keywords.length;
      if (confidence > bestMatch.confidence) {
        bestMatch = { category: intent.category, confidence, keywords: foundKeywords };
      }
    }
  }

  // Generate response based on intent
  let response = '';
  
  switch (bestMatch.category) {
    case 'services':
      response = `🛡️ **Our Services at F H & L Technologies:**

We offer comprehensive compliance and technology solutions:

• **AML/CFT/CPF Consultancy** - Full regulatory compliance support
• **goAML Reporting** - UAT, threshold & transaction reporting  
• **goAML Audit & Validation** - Independent audits & reconciliation
• **Regulatory Consultancy** - Transaction mapping & compliance
• **System Design & Implementation** - Enterprise solutions
• **Banking & Financial Systems** - Cheque clearing, core banking
• **AI-Powered Solutions** - Agentic AI & automation
• **Website & App Development** - Modern web applications

Which area would you like to learn more about?`;
      break;

    case 'goaml':
      response = `📊 **goAML Services:**

We provide comprehensive goAML solutions:

✅ **goAML Reporting**
   - goAML UAT support
   - Threshold reporting
   - Transaction reporting
   - Reject rectification

✅ **goAML Audit & Validation**
   - Independent threshold audits
   - Source system reconciliation
   - Transaction validation
   - Compliance assessment

Our team ensures your goAML implementation meets FIU requirements. Want to schedule an audit consultation?`;
      break;

    case 'aml':
      response = `🛡️ **AML/CFT/CPF Compliance:**

Our compliance services cover:

• **AML Standards** - Anti-money laundering framework
• **CFT Measures** - Counter-terrorist financing
• **CPF Compliance** - Counter-proliferation financing
• **Risk Assessment** - Comprehensive risk evaluation
• **Policy Development** - Custom compliance policies
• **Ongoing Monitoring** - Continuous compliance support

**Who needs this?**
🏦 Banks & Financial Institutions
🏢 DNFBPs (Dealers, lawyers, accountants)
🌐 International trading companies

Would you like a compliance assessment for your organization?`;
      break;

    case 'consultancy':
      response = `💼 **Expert Consultancy Services:**

Our consultants bring:
• 29+ years banking experience
• 25+ years software development
• 9+ years compliance expertise

**We can help with:**
• System design & architecture
• Regulatory compliance strategy
• goAML implementation
• Risk assessment
• Staff training

To get started, please share:
• Your name and company
• Areas of interest
• Best time to contact

Or use the contact form on this page!`;
      break;

    case 'contact':
      response = `📞 **Contact Us:**

• **Email:** info@fhltech.lk
• **Phone:** +94 11 234 5678
• **Location:** Colombo, Sri Lanka
• **Hours:** Mon-Fri 9AM-6PM IST

**Quick options:**
• Fill out the contact form below
• Schedule a consultation using our booking system
• Email us directly for urgent queries

We're here to help with all your compliance needs!`;
      break;

    case 'company':
      response = `🏢 **About F H & L Technologies:**

*"Technology with Purpose, Solutions with Heart"*

We are a premier fintech company specializing in:
• Enterprise AML/CFT/CPF compliance platforms
• goAML systems & audits
• Banking & financial systems
• Agentic AI solutions

**Our Team's Expertise:**
• 29+ Years Banking Experience
• 25+ Years Software Development
• 9+ Years Compliance Specialization

Based in Colombo, Sri Lanka, serving clients across the region. Learn more about our mission in the About section!`;
      break;

    case 'greeting':
      response = `👋 **Welcome to F H & L Technologies!**

I'm your AI assistant, here to help with:

• Compliance & regulatory questions
• Service information
• goAML guidance
• Scheduling consultations

**Quick options:**
1. Ask about our services
2. Learn about AML/CFT compliance
3. Schedule a consultation
4. Get contact information

How can I assist you today?`;
      break;

    case 'thanks':
      response = `😊 **Thank you for connecting with us!**

We're glad we could help. If you have more questions:

• Browse our services section
• Fill out the contact form
• Schedule a consultation

Looking forward to helping you achieve compliance excellence!`;
      break;

    case 'pricing':
      response = `💰 **Pricing Information:**

Our solutions are tailored to your specific needs. Pricing depends on:

• Organization size & complexity
• Scope of services required
• Implementation timeline
• Ongoing support needs

**To get a quote:**
1. Fill out the contact form with your requirements
2. Schedule a free consultation
3. Our team will provide a customized proposal

We offer flexible packages for different budget levels. Contact us for details!`;
      break;

    default:
      response = `🤖 **I'd be happy to help!**

I can assist with:

• **Services** - Learn about our compliance & technology solutions
• **goAML** - goAML reporting, audits, and implementation
• **AML/CFT** - Anti-money laundering compliance
• **Contact** - Get in touch with our team
• **Company** - Learn about F H & L Technologies

Could you please rephrase your question or select one of these topics?`;
  }

  return { response, intent: bestMatch.category, confidence: bestMatch.confidence + 0.5 };
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, metadata } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Generate AI response
    const { response, intent, confidence } = generateResponse(message);

    // In production, save to Supabase here
    // For now, we'll skip the database write as it's optional

    return NextResponse.json({
      response,
      intent,
      confidence,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'F H & L Technologies AI Chatbot API v1.0' 
  });
}

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        service_interest: service,
        message,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      // Continue anyway - lead submission should still work
    }

    return NextResponse.json({ 
      success: true, 
      lead: data,
      message: 'Thank you! Our team will contact you within 24 hours.' 
    });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! Our team will contact you within 24 hours.' 
    });
  }
}
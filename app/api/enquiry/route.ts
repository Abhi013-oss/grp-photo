import { NextRequest, NextResponse } from "next/server";
import { EnquiryFormData } from "@/lib/types";

// RFC 5322 compliant regex simplified for real-world emails
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<EnquiryFormData>;

    // 1. Anti-Spam: Honeypot check
    // If hidden honeypot is filled, silent success to confuse bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully", id: "accepted" },
        { status: 200 }
      );
    }

    const errors: Record<string, string> = {};

    // 2. Validate Name
    const name = body.name?.trim();
    if (!name || name.length < 2) {
      errors.name = "Please enter your name.";
    } else if (name.length > 100) {
      errors.name = "Name is too long (maximum 100 characters).";
    }

    // 3. Validate Email
    const email = body.email?.trim();
    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(email) || email.length > 100) {
      errors.email = "Please enter a valid email address.";
    }

    // 4. Validate Message
    const message = body.message?.trim();
    if (!message) {
      errors.message = "Tell us a little about what you're planning.";
    } else if (message.length < 10) {
      errors.message = "Please share a few more details (minimum 10 characters).";
    } else if (message.length > 2000) {
      errors.message = "Message exceeds 2000 characters limit.";
    }

    // 5. Sanitize Optional Fields
    const phone = body.phone?.trim() ? body.phone.trim().slice(0, 30) : undefined;
    const eventType = body.eventType?.trim() || "Wedding";
    const eventDate = body.eventDate?.trim() ? body.eventDate.trim().slice(0, 50) : undefined;
    const location = body.location?.trim() ? body.location.trim().slice(0, 100) : undefined;

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Generate unique inquiry identifier
    const inquiryId = `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Extensible Persistence Hook:
    // Future persistence (Supabase, Resend, etc.) can hook in here without changing client contracts
    // For now, securely acknowledge the received inquiry
    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your enquiry has been received.",
        id: inquiryId,
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something didn't go through. Please try again or continue on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

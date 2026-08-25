import { z } from "zod";

export const demoRequestSchema = z.object({
  institutionName: z.string().trim().min(2, "Institution name is too short").max(200),
  institutionSize: z.string().trim().max(50).optional(),
  contactName: z.string().trim().min(2, "Contact name is too short").max(150),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(30).optional(),
  role: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
});

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(150),
  email: z.string().trim().email("Enter a valid email address").max(200),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});

// The real forms include a hidden `company_website` field a human never
// sees or fills. It is deliberately kept OUT of the schemas above: if it
// were a validated field, a bot filling it would fail validation entirely
// and receive a revealing 400 error. Instead, handlers check this on the
// raw request body *before* running schema validation, so a tripped
// honeypot gets a silent fake-success with nothing persisted or emailed.
export function isHoneypotTripped(body) {
  const value = body?.company_website;
  return typeof value === "string" && value.trim().length > 0;
}

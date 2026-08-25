import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

/**
 * Sends a notification email to the sales team. Fails soft: a missing
 * config or a delivery error is logged, never thrown, so a lead is still
 * saved to the database even if the email step fails.
 */
export async function notifySalesTeam({ subject, html }) {
  if (!resend || !process.env.SALES_NOTIFICATION_EMAIL || !process.env.SALES_FROM_EMAIL) {
    console.warn("[email] Resend not configured — skipping notification email.");
    return { sent: false, reason: "not_configured" };
  }

  try {
    await resend.emails.send({
      from: process.env.SALES_FROM_EMAIL,
      to: process.env.SALES_NOTIFICATION_EMAIL,
      subject,
      html,
    });
    return { sent: true };
  } catch (error) {
    console.error("[email] Failed to send notification:", error);
    return { sent: false, reason: "send_failed" };
  }
}

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

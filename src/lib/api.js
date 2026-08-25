async function postJson(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.error || "Something went wrong. Please try again.");
    error.details = data.details;
    error.status = response.status;
    throw error;
  }

  return data;
}

export function submitDemoRequest(payload) {
  return postJson("/api/demo-request", payload);
}

export function submitContactMessage(payload) {
  return postJson("/api/contact", payload);
}

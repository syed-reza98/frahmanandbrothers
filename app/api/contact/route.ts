export async function POST(req: Request) {
  const form = await req.formData();
  // TODO: forward to email/CRM. For now, just log for demo:
  console.log("Contact form submission:", {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
  });
  return new Response("ok");
}

const PRIMARY_WHATSAPP_NUMBER = '5544991179564'

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

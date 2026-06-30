/** Server-side: Google Apps Script URL from Vercel env (no rebuild needed for GOOGLE_SHEETS_URL). */
export function getGoogleSheetsUrl(): string {
  return (
    process.env.GOOGLE_SHEETS_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ||
    ""
  );
}

import { EnquirySubmission } from '../types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/**
 * Submits a new customer enquiry or quote request to Supabase PostgreSQL.
 * If credentials are not configured in .env.local, it safely saves to local storage
 * for instant demo testing and zero runtime errors.
 */
export async function submitEnquiry(enquiry: EnquirySubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      name: enquiry.name.trim(),
      company: enquiry.company.trim(),
      phone: enquiry.phone.trim(),
      email: enquiry.email ? enquiry.email.trim() : null,
      city: enquiry.city.trim(),
      business_type: enquiry.business_type,
      enquiry_type: enquiry.enquiry_type || 'quote',
      product: enquiry.product || 'Any Time Mavu Batter Dispensing Machine',
      message: enquiry.message ? enquiry.message.trim() : '',
      status: 'new',
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase submission error:', errorText);
        return { success: false, error: 'Unable to save enquiry to server. Please try contacting us via WhatsApp or Phone.' };
      }

      return { success: true };
    } else {
      // Demo / Local Mode (when Supabase credentials are pending)
      console.info('ℹ️ Supabase not yet configured. Saving lead in local demo storage:', payload);
      try {
        const existing = JSON.parse(localStorage.getItem('atm_demo_enquiries') || '[]');
        existing.unshift({ id: `demo-${Date.now()}`, ...payload });
        localStorage.setItem('atm_demo_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Simulate a realistic short server delay (400ms)
      await new Promise(resolve => setTimeout(resolve, 400));
      return { success: true };
    }
  } catch (err: any) {
    console.error('Unexpected enquiry submission error:', err);
    return { success: false, error: err.message || 'An unexpected error occurred. Please reach out via WhatsApp.' };
  }
}

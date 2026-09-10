-- ==============================================================================
-- ANY TIME MAVU: Supabase Database Setup Script
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ==============================================================================

-- 1. Create the enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT NOT NULL,
    business_type TEXT NOT NULL,
    enquiry_type TEXT NOT NULL DEFAULT 'quote',
    product TEXT DEFAULT 'Any Time Mavu Batter Dispensing Machine',
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'interested', 'converted', 'closed'))
);

-- 2. Enable Row Level Security (RLS) to protect customer data
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Create Security Policy: Allow website visitors (anon key) to INSERT new enquiries
CREATE POLICY "Allow public insert into enquiries"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Note: Public visitors CANNOT view (SELECT), update, or delete existing customer enquiries.
-- Only authenticated dashboard admins or service_role can view records.
CREATE POLICY "Allow service role full access"
ON public.enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 5. Create useful indexes for fast search in admin panels
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_business_type ON public.enquiries(business_type);

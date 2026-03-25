-- Create team_members table
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (admin access)
CREATE POLICY "Admins can view all team members" ON public.team_members
    FOR SELECT USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Admins can insert team members" ON public.team_members
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Admins can update team members" ON public.team_members
    FOR UPDATE USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Admins can delete team members" ON public.team_members
    FOR DELETE USING (
        auth.role() = 'authenticated'
    );

-- Create policy for public users (only active team members)
CREATE POLICY "Public can view active team members" ON public.team_members
    FOR SELECT USING (
        active = true
    );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_team_members_updated_at
    BEFORE UPDATE ON public.team_members
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Add indexes for better performance
CREATE INDEX idx_team_members_active ON public.team_members(active);
CREATE INDEX idx_team_members_created_at ON public.team_members(created_at DESC);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  message text NOT NULL,
  image_url text,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS (Row Level Security)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public can read only approved testimonials
CREATE POLICY "Public can view approved testimonials" ON testimonials
  FOR SELECT USING (approved = true);

-- Public can insert testimonials (unapproved by default)
CREATE POLICY "Public can insert testimonials" ON testimonials
  FOR INSERT WITH CHECK (true);

-- Admins can update/delete any testimonial (you'll restrict this via RLS or service role)
CREATE POLICY "Admins can manage testimonials" ON testimonials
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Optional: Add helpful indexes
CREATE INDEX idx_testimonials_approved ON testimonials(approved);
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);

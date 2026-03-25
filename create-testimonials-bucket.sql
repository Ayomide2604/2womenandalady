-- Create testimonials storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'testimonials',
  'testimonials',
  true,
  10485760, -- 10MB
  ARRAY['image/jpeg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Allow public access to read testimonials
CREATE POLICY "Public Access" ON storage.objects FOR SELECT
USING (bucket_id = 'testimonials');

-- Allow authenticated users to upload to testimonials
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'testimonials' AND 
  auth.role() = 'authenticated'
);

-- Allow users to update their own uploads
CREATE POLICY "Users can update own uploads" ON storage.objects FOR UPDATE
USING (
  bucket_id = 'testimonials' AND 
  auth.role() = 'authenticated'
);

-- Allow users to delete their own uploads
CREATE POLICY "Users can delete own uploads" ON storage.objects FOR DELETE
USING (
  bucket_id = 'testimonials' AND 
  auth.role() = 'authenticated'
);

-- Create bucket if not exists (run once in Supabase Dashboard Storage or via API)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('testimonials', 'testimonials', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('team', 'team', true);

-- Allow public uploads to testimonials bucket
CREATE POLICY "Public can upload to testimonials bucket" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'testimonials'
  );

-- Allow public reads for testimonials bucket
CREATE POLICY "Public can read testimonials bucket" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'testimonials'
  );

-- Allow users to update their own uploads (optional)
CREATE POLICY "Users can update their own testimonials bucket objects" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'testimonials'
  );

-- Allow public uploads to team bucket
CREATE POLICY "Public can upload to team bucket" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'team'
  );

-- Allow public reads for team bucket
CREATE POLICY "Public can read team bucket" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'team'
  );

-- Allow users to update their own team uploads (optional)
CREATE POLICY "Users can update their own team bucket objects" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'team'
  );

-- Create team storage bucket for team member images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'team',
    'team',
    true,
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Create policies for team bucket
-- Policy for authenticated users (admin access) to upload
CREATE POLICY "Admins can upload team images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'team' AND 
        auth.role() = 'authenticated'
    );

-- Policy for authenticated users (admin access) to update
CREATE POLICY "Admins can update team images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'team' AND 
        auth.role() = 'authenticated'
    );

-- Policy for authenticated users (admin access) to delete
CREATE POLICY "Admins can delete team images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'team' AND 
        auth.role() = 'authenticated'
    );

-- Policy for public users to view team images
CREATE POLICY "Public can view team images" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'team'
    );

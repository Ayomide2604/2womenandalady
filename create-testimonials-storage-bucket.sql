-- Create testimonials storage bucket for testimonial images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'testimonials',
    'testimonials',
    true,
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Create policies for testimonials bucket
-- Policy for authenticated users (admin access) to upload
CREATE POLICY "Admins can upload testimonial images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'testimonials' AND 
        auth.role() = 'authenticated'
    );

-- Policy for authenticated users (admin access) to update
CREATE POLICY "Admins can update testimonial images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'testimonials' AND 
        auth.role() = 'authenticated'
    );

-- Policy for authenticated users (admin access) to delete
CREATE POLICY "Admins can delete testimonial images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'testimonials' AND 
        auth.role() = 'authenticated'
    );

-- Policy for public users to view testimonial images
CREATE POLICY "Public can view testimonial images" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'testimonials'
    );

-- Drop existing policies if they are too restrictive
DROP POLICY IF EXISTS "Admins can view all contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Admins can insert contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Admins can update contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Admins can delete contact_messages" ON contact_messages;

DROP POLICY IF EXISTS "Admins can manage team_members" ON team_members;

-- Re-create with broader admin access (using service_role or a custom claim)
CREATE POLICY "Admins can view all contact_messages" ON contact_messages
  FOR SELECT USING (
    auth.role() = 'authenticated'  -- Allow any authenticated user (adjust as needed)
  );

CREATE POLICY "Admins can insert contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update contact_messages" ON contact_messages
  FOR UPDATE USING (
    auth.role() = 'authenticated'
  );

CREATE POLICY "Admins can delete contact_messages" ON contact_messages
  FOR DELETE USING (
    auth.role() = 'authenticated'
  );

CREATE POLICY "Admins can manage team_members" ON team_members
  FOR ALL USING (
    auth.role() = 'authenticated'
  );

-- Also ensure testimonials table allows admin reads
DROP POLICY IF EXISTS "Admins can manage testimonials" ON testimonials;
CREATE POLICY "Admins can manage testimonials" ON testimonials
  FOR ALL USING (
    auth.role() = 'authenticated'
  );

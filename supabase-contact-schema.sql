-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  subject text,
  message text NOT NULL,
  replied boolean DEFAULT false,
  reply_message text,
  replied_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  order_index integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Policies for contact_messages
CREATE POLICY "Admins can view all contact_messages" ON contact_messages
  FOR SELECT USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Admins can insert contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update contact_messages" ON contact_messages
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Admins can delete contact_messages" ON contact_messages
  FOR DELETE USING (auth.jwt() ->> 'role' = 'service_role');

-- Policies for team_members
CREATE POLICY "Admins can manage team_members" ON team_members
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Optional: Public can read active team members
CREATE POLICY "Public can read active team_members" ON team_members
  FOR SELECT USING (active = true);

-- Indexes
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_replied ON contact_messages(replied);
CREATE INDEX idx_team_members_order ON team_members(order_index ASC);

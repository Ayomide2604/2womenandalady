import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Testimonial = {
	id: string;
	name: string;
	message: string;
	profession: string | null;
	company: string | null;
	image_url: string | null;
	approved: boolean;
	created_at: string;
};

export type ContactMessage = {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string | null;
	service: string | null;
	subject: string | null;
	message: string;
	replied: boolean;
	reply_message: string | null;
	replied_at: string | null;
	created_at: string;
};

export type TeamMember = {
	id: string;
	name: string;
	role: string;
	bio: string | null;
	image_url: string | null;
	order_index: number;
	active: boolean;
	created_at: string;
	updated_at: string;
};

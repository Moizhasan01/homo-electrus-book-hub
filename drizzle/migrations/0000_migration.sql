CREATE TABLE public.subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text,
  email text NOT NULL,
  source text NOT NULL DEFAULT 'site',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX subscribers_email_unique ON public.subscribers (lower(email));
GRANT INSERT ON public.subscribers TO anon, authenticated;
GRANT ALL ON public.subscribers TO service_role;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.subscribers FOR INSERT TO anon, authenticated
  WITH CHECK (char_length(email) BETWEEN 5 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND (first_name IS NULL OR char_length(first_name) <= 100) AND char_length(source) <= 40);

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (char_length(name) BETWEEN 1 AND 100 AND char_length(email) BETWEEN 5 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(message) BETWEEN 1 AND 5000);
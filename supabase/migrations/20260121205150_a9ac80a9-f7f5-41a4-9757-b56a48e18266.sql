-- Create storage bucket for card images
INSERT INTO storage.buckets (id, name, public)
VALUES ('card-images', 'card-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to card images
CREATE POLICY "Public read access for card images"
ON storage.objects FOR SELECT
USING (bucket_id = 'card-images');

-- Allow authenticated users to upload card images (for admin purposes)
CREATE POLICY "Admin upload access for card images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'card-images');

-- Allow authenticated users to update card images
CREATE POLICY "Admin update access for card images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'card-images');

-- Allow authenticated users to delete card images
CREATE POLICY "Admin delete access for card images"
ON storage.objects FOR DELETE
USING (bucket_id = 'card-images');
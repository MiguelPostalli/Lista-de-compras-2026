// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
'https://tpmkdjgyhondslbkuwna.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbWtkamd5aG9uZHNsYmt1d25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTE2MzMsImV4cCI6MjA4NzY4NzYzM30.iICcROY9dQXzDZV_y32MhYIC_jnGQBd3IicVNQ3VCv8'
)
    
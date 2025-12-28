import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amqcaqlamyjeuqtrlavz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcWNhcWxhbXlqZXVxdHJsYXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4Njc0ODEsImV4cCI6MjA4MjQ0MzQ4MX0.Dh0tv0HZduZvw6NI_d05MTKz8c245TxREn12dkr0AlE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

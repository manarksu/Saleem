import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://milvueldmckhgyjngviw.supabase.co/rest/v1/" 
const supabaseAnonKey = "'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbHZ1ZWxkbWNraGd5am5ndml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwNjU2ODMsImV4cCI6MjEwMzY0MTY4M30.Dqk4fC896S1myrkwPaxERJ2-DxjzonM9qJFqU4zUNAM" 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

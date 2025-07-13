// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 아래 두 값은 본인의 Supabase 프로젝트에서 발급받은 URL과 public 익명키로 교체하세요.ㄷㄷ
export const SUPABASE_URL = 'https://tfdcepqpjoqktrnvfgtf.supabase.co'; // 본인 프로젝트 URL로 교체
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZGNlcHFwam9xa3RybnZmZ3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNDEwODMsImV4cCI6MjA2NzkxNzA4M30.uSqzYPdJaShZS548Gfb_Nq6LaPvi5Id1V3M3PSsJKwc'; // 본인 anon key로 교체 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 
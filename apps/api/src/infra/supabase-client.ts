import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if(supabaseKey == undefined ||supabaseUrl ==  undefined) {
  throw new Error('Supabase key and url is needed')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
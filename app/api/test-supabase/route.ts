import { NextRequest, NextResponse } from 'next/server'

// Test endpoint to verify Supabase connection
export async function GET(request: NextRequest) {
  try {
    // Check if environment variables are set
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        status: 'error',
        message: 'Supabase environment variables not set',
        required: {
          NEXT_PUBLIC_SUPABASE_URL: !!supabaseUrl,
          NEXT_PUBLIC_SUPABASE_ANON_KEY: !!supabaseKey
        }
      }, { status: 400 })
    }
    
    // Try to import and test Supabase connection
    try {
      const { supabase } = await import('@/lib/supabase')
      
      // Test connection by querying a simple table
      const { data, error } = await supabase
        .from('leads')
        .select('count')
        .limit(1)
      
      if (error) {
        return NextResponse.json({
          status: 'error',
          message: 'Supabase connection failed',
          error: error.message,
          details: 'Make sure you have run the SQL schema in your Supabase project'
        }, { status: 500 })
      }
      
      return NextResponse.json({
        status: 'success',
        message: 'Supabase connection successful!',
        supabaseUrl: supabaseUrl.substring(0, 30) + '...',
        tablesCreated: true,
        readyForDeployment: true
      })
      
    } catch (importError) {
      return NextResponse.json({
        status: 'error',
        message: 'Failed to import Supabase client',
        error: importError.message
      }, { status: 500 })
    }
    
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Test failed',
      error: error.message
    }, { status: 500 })
  }
}

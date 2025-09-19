import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Simple authentication check - you can make this more secure
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN || 'admin123'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const filePath = path.join(process.cwd(), 'data', 'leads.json')
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ leads: [], count: 0 })
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const leads = JSON.parse(fileContent)
    
    return NextResponse.json({ 
      leads, 
      count: leads.length,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error reading leads:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

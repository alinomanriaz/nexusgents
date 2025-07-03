// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload // '!' tells TypeScript it's defined

    return NextResponse.json({
      message: 'Authenticated',
      user: decoded,
    })
  } catch (error) {
    console.error('Error verifying token:', error)
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 })
  }
}

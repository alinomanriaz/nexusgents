// helper/authdata.js
import { jwtVerify, JWTPayload } from 'jose';  // Import the `jose` library for JWT verification
import { cookies } from "next/headers";

export const authdata = async (): Promise<JWTPayload | null> => {
  try {
    // Access cookies using the cookies() function
    const cookieStore = await cookies();  // This is the correct API to access cookies in Next.js 13+
    const token = cookieStore.get('authToken')?.value;  // Retrieve the 'token' cookie value
    
    if (!token) {
      console.log('Token not found');
      return null;
    }

    const secret = process.env.TOKEN_SECRET;
    if (!secret) {
      console.error('TOKEN_SECRET not set in environment');
      return null;
    }

    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));

    console.log({authDataPayload:payload});

    return payload;

  } catch (error) {
    console.log('Error verifying JWT:', error);
    return null
  }
};

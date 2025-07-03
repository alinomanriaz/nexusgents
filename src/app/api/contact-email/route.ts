// // import { mailSender } from '@/helper/mailsender.js';
// import { NextResponse } from 'next/server';


// export async function POST(req) {
//     try {
//         const formData = await req.json();
//         const { name, email, message, number } = formData;
//         console.log(email)

//         // if (!name || !email || !message) {
//         //     return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
//         // }

//         // const result = await mailSender({ name, email, message, number });

//         // if (result.success) {
//         return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
//         // } else {
//         //     return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//         // }
//     } catch (error) {
//         console.error('API error:', error);
//         return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
// }

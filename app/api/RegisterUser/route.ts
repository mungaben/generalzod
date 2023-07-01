

import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";


// {
//     data: { name: 'Zod', job: 'KRYPTO VILLIAN', specification: 'protector' }
//   }

const DataUser = z.object({
    name: z.string().default('krypto'),
    job: z.string(),
    specification: z.string().optional(),
    email: z.string().email(),
})

const User = z.object({
    data: DataUser
});




export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    try {
        const user = User.parse(body)
        console.log(user);
        return NextResponse.json({
            message: "User Created",
            user: user

        })

    } catch (e) {
        if (e instanceof z.ZodError) {
            return NextResponse.json({
                message: "Invalid Data",
                errors: e.errors.map((e: any) => ({
                    field: e.path[0],
                    message: e.message,
                    value: e.value


                }))
            })
        } else {
            return NextResponse.json({
                status: 500,
                message: "Internal Server Error"
            })
        }

    }




}
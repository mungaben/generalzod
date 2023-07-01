

import { DataUser } from "@/Utils/ZodSchema";
import { NextResponse, NextRequest } from "next/server";
import { any, number, z } from "zod";
import { prisma } from "@/Utils/prisma";

// {
//     data: { name: 'Zod', job: 'KRYPTO VILLIAN', specification: 'protector' }
//   }



const User = z.object({
    data: DataUser
});




export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    try {
        const user = User.parse(body)
        console.log(user);
        if (user) {
            const { name, job, specification, email, phonenumber, confirmemail, url } = user.data

            // check if email exists
            const exists = await prisma.user.findFirst({
                where: {
                    email
                }
            })
            if (exists) {
                return NextResponse.json({
                    message: "Email already exists",
                    errors: [{
                        field: "email",
                        message: "Email already exists"
                    }]
                })
            }




            try {
                const useravail = await prisma.user.create({
                    data: {
                        name,
                        job,
                        specification,
                        email,
                        phonenumber,
                        confirmemail,
                        url
                    }
                })
                console.log("user created", useravail);

                return NextResponse.json({
                    message: "User Created in db",
                    user: useravail
                })
            } catch (e) {
                return NextResponse.json({
                    message: "Error",
                    errors: e
                })
            }
        }
        return NextResponse.json({
            message: "User seen",
            user: user

        })
        // post user data to mongodb with prisma 


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
                // get exact error
                message: e
            })
        }

    }




}
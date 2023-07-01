import { z } from "zod";



export const DataUser = z
.object({
  name: z.string().max(5).default("krypto"),
  job: z.string().max(50)?.default("Software Engineer"),
  specification: z.string(),
  email: z.string().email(),
  phonenumber: z.string().optional(),
  confirmemail: z.string().email(),
  url: z.string().url().optional(),
})
.refine((data) => data.email === data.confirmemail, {
  message: "Emails must match",
  path: ["confirmemail"],
});
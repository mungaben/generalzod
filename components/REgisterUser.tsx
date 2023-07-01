import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const REgisterUser = () => {
  const DataUser = z
    .object({
      name: z.string().default("krypto"),
      job: z.string(),
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
type FormData = z.infer<typeof DataUser>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(DataUser),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <h1>Register User</h1>
      <div>
        <form
          className="max-w-md mx-auto mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Job</label>
            <input
              {...register("job")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Specification</label>
            <input
              {...register("specification")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Confirm Email</label>
            <input
              {...register("confirmemail")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.confirmemail && (
              <span className="text-red-500">
                {errors.confirmemail.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone Number</label>
            <input
              {...register("phonenumber")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">URL</label>
            <input
              {...register("url")}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default REgisterUser;

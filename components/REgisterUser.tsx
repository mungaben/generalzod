"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataUser } from "@/Utils/ZodSchema";
import axios from "axios";

const REgisterUser = () => {
  type FormData = z.infer<typeof DataUser>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(DataUser),
  });

  const onSubmit = (data: FormData) => {
    // post data in RegisterUser api endpoint
    try {
      axios
        .post("/api/RegisterUser",{data: data})
        .then((dataposted) => {
          console.log(dataposted.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
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
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {/* errors */}
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Job</label>
            <input
              {...register("job")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {/* errors */}
            {errors.job && (
              <span className="text-red-500">{errors.job.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Specification</label>
            <input
              {...register("specification")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {/* errors */}
            {errors.specification && (
              <span className="text-red-500">
                {errors.specification.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Confirm Email</label>
            <input
              {...register("confirmemail")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
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
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {/* errors */}
            {errors.phonenumber && (
              <span className="text-red-500">{errors.phonenumber.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">URL</label>
            <input
              {...register("url")}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800/80"
            />
            {/* errors */}
            {errors.url && (
              <span className="text-red-500">{errors.url.message}</span>
            )}
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

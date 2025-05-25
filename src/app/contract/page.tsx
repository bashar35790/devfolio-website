"use client";
import { formDate } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contract = () => {
  const [formData, setFormData] = useState<formDate>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setStatus("loading");
    try {
        const response = await fetch("/api/contact", {
            method:"POST",
            headers:{"Content-Type":"allication/json"},
            body:JSON.stringify(formData)

        })
        if(!response.ok){
            throw new Error("Fail to send massage");
        }
        setStatus("success");
        setFormData({
            name:"",
            email:"",
            message:""
        })
    } catch (error) {
        setStatus("error");
        console.log(error);
        
    }

  }
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-20 text-center">Contract Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I am always to discussing new project, creative ideas, or
            oportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:hello@codetutorbd.com"
                  className="text-secondary hover:text-primary"
                >
                  bashar35790@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <Link
                  href="tel:+01833487526"
                  className="text-secondary hover:text-primary"
                >
                  01833487526
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <Link
                  href="tel:+01833487526"
                  className="text-secondary hover:text-primary"
                >
                  Dhaka, Bangladesh
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter you name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:right-2 focus:ring-primary focus:border-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter you email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:right-2 focus:ring-primary focus:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                id="message"
                name="message"
                placeholder="Enter you message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:right-2 focus:ring-primary focus:border-none"
              />
            </div>
            <button type="submit" className="w-full btn btn-primary">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {
                status==="success" && (
                    <p className="text-green-500 text-center">Send meassage successfully</p>
                )
            }
              {
                status==="error" && (
                    <p className="text-red-500 text-center">Faild to send massage, please try again</p>
                )
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;

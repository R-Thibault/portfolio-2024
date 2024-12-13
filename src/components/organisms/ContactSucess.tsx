"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ContactSuccess() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center bg-[#47555E] rounded-lg shadow-lg p-6">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-cyan-200">
        Message successfully sent!{" "}
      </h2>
      <p className="mb-3 font-normal text-cyan-200">
        You will be automatically redirected to the homepage in 5 seconds.
      </p>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ContactSuccess() {
  const router = useRouter();
  const t = useTranslations("ContactSuccess");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center bg-[#47555E] rounded-lg shadow-lg p-6">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-cyan-200">
        {t("successMessage")}
      </h2>
      <p className="mb-3 font-normal text-cyan-200">{t("redirectMessage")}</p>
    </div>
  );
}

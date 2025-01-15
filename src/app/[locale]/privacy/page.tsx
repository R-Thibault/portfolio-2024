import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">Last Updated: Sep 2024</p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Hey, Welcome!</h2>
            <p className="text-gray-700">
              Thanks for stopping by! This Privacy Policy is just here to let
              you know how things work around here. My website is mainly about
              showcasing my work, and I&apos;m all about respecting your
              privacy.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              What Information I Collect (Hint: Not Much)
            </h2>
            <p className="text-gray-700">
              Honestly, this is just a static portfolio site, so I don&apos;t
              actively collect any personal information. There&apos;s no account
              creation, no tracking cookies, and definitely no sneaky data
              gathering.
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-medium">1. Chatbot Conversations</h3>
              <p className="text-gray-700">
                If you send a message through the chatbot, it might be stored
                for caching and training purposes. So please avoid sharing any
                confidential info in the chat.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium">2. Contact Info</h3>
              <p className="text-gray-700">
                If you reach out via email or the contact form, the info you
                provide is entirely up to you. I&apos;ll only use it to reply
                and have a conversation with you—no funny business.
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">How I Use the Info</h2>
            <p className="text-gray-700">
              Here&apos;s what I might do with any information I collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Make sure the site is running smoothly</li>
              <li>Improve the website based on feedback you might share</li>
              <li>Respond to your questions or feedback</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Sharing Your Info (Spoiler: I Don&apos;t)
            </h2>
            <p className="text-gray-700">
              I don&apos;t sell, trade, or rent your personal info. If you
              shared something sensitive by accident, feel free to reach out,
              and I&apos;ll help you remove it.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Security (The Internet Isn&apos;t Perfect)
            </h2>
            <p className="text-gray-700">
              I&apos;ll do my best to keep any info you share safe, but
              let&apos;s be real—no system is foolproof. While I&apos;ll take
              reasonable steps to protect your info, I can&apos;t promise 100%
              security.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Policy Updates (No Surprises)
            </h2>
            <p className="text-gray-700">
              This policy is current as of Sep 2024. If I make any changes,
              I&apos;ll update it here, so you&apos;re always in the loop. Feel
              free to check back occasionally, but don&apos;t worry—I&apos;m not
              making any big changes without letting you know.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Got Questions?</h2>
            <p className="text-gray-700">
              If you have any questions, concerns, or just want to say hi, drop
              me an email at{" "}
              <a
                href="mailto:"
                className="text-blue-500 underline hover:text-blue-700"
              >
                WIP
              </a>{" "}
              or use the contact form. I&apos;d love to hear from you!
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

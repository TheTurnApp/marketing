"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

function InviteContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const course = searchParams.get("course");

  useEffect(() => {
    if (code && course) {
      const deepLinkUrl = `theturn://invite?code=${code}&course=${course}`;

      // Try to open the app
      window.location.href = deepLinkUrl;

      // Fallback to app stores after delay
      setTimeout(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/iPad|iPhone|iPod/.test(userAgent)) {
          window.location.href =
            "https://apps.apple.com/app/the-turn/YOUR_APP_ID";
        } else if (/android/i.test(userAgent)) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.trytheturn.golfer";
        }
      }, 2500);
    }
  }, [code, course]);

  return (
    <>
      <Head>
        <title>Join {course} on The Turn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />
        <meta name="google-play-app" content="app-id=com.trytheturn.golfer" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="The Turn"
              width={96}
              height={96}
              className="rounded-2xl mx-auto mb-6 shadow-lg"
              priority
            />
            <h1 className="text-2xl font-bold text-ink mb-2">
              Welcome to {course}!
            </h1>
            <p className="text-ink-600">Opening The Turn app...</p>
          </div>

          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-2 bg-primary-200 rounded-full"></div>
            </div>

            <p className="text-sm text-ink-500">
              If the app doesn't open automatically, you'll be redirected to
              download it.
            </p>

            <div className="pt-4 space-y-2">
              <a
                href="https://apps.apple.com/app/the-turn/YOUR_APP_ID"
                className="block bg-ink text-white px-4 py-2 rounded-lg text-sm"
              >
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trytheturn.golfer"
                className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InviteContent />
    </Suspense>
  );
}

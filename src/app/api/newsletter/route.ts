"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation"; // ← Changed from 'next/router'
import Head from "next/head";

function InviteContent() {
  const searchParams = useSearchParams(); // ← Changed from useRouter
  const code = searchParams.get("code");
  const course = searchParams.get("course");

  useEffect(() => {
    if (code && course) {
      const deepLinkUrl = `regent://invite?code=${code}&course=${course}`;

      // Try to open the app
      window.location.href = deepLinkUrl;

      // Fallback to app stores after delay
      setTimeout(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/iPad|iPhone|iPod/.test(userAgent)) {
          // iOS App Store - replace with your actual App Store URL
          window.location.href =
            "https://apps.apple.com/app/regent-golf/YOUR_APP_ID";
        } else if (/android/i.test(userAgent)) {
          // Google Play Store
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.regent.app";
        }
      }, 2500);
    }
  }, [code, course]);

  return (
    <>
      <Head>
        <title>Join {course} on Regent Golf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />
        <meta name="google-play-app" content="app-id=com.regent.app" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to {course}!
            </h1>
            <p className="text-gray-600">Opening Regent Golf app...</p>
          </div>

          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-2 bg-green-200 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-500">
              If the app doesn't open automatically, you'll be redirected to
              download it.
            </p>

            <div className="pt-4 space-y-2">
              <a
                href="https://apps.apple.com/app/regent-golf/YOUR_APP_ID"
                className="block bg-black text-white px-4 py-2 rounded-lg text-sm"
              >
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.regent.app"
                className="block bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
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

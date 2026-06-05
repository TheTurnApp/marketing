"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// TODO: replace with real App Store ID once the manager app is published
const APP_STORE_URL = "https://apps.apple.com/app/the-turn-manager/TODO_APP_ID";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.trytheturn.manager";

function WelcomeContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const courseId = searchParams.get("courseId");
  const phone = searchParams.get("phone");

  useEffect(() => {
    if (!code || !courseId) return;

    const params = new URLSearchParams({ code, courseId });
    if (phone) params.set("phone", phone);

    // Universal Links handle the open-in-app path on iOS/Android; this
    // custom-scheme fallback fires when the OS didn't intercept the link
    // (e.g. the user tapped it from a browser that skips Universal Links).
    const deepLink = `theturn-manager://welcome?${params.toString()}`;
    window.location.href = deepLink;

    // Give the scheme redirect a moment before falling through to store links.
    const timer = setTimeout(() => {
      const ua = navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(ua)) {
        window.location.href = APP_STORE_URL;
      } else if (/android/i.test(ua)) {
        window.location.href = PLAY_STORE_URL;
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [code, courseId, phone]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="max-w-md mx-auto text-center p-8">
        <Image
          src="/logo.png"
          alt="The Turn"
          width={96}
          height={96}
          className="rounded-2xl mx-auto mb-6 shadow-lg"
          priority
        />

        <h1 className="text-2xl font-bold text-ink mb-2">
          You&apos;ve been invited to The Turn Manager
        </h1>
        <p className="text-ink-600 mb-8">
          Manage orders, menus, and your team — right from the course.
        </p>

        {code ? (
          <p className="text-sm text-ink-500 mb-6">
            Opening the app to complete your invitation…
          </p>
        ) : (
          <p className="text-sm text-ink-500 mb-6">
            Download The Turn Manager to get started.
          </p>
        )}

        <div className="space-y-3">
          <a
            href={APP_STORE_URL}
            className="flex items-center justify-center gap-2 bg-ink text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            Download on the App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
      <WelcomeContent />
    </Suspense>
  );
}

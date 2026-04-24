import { NextResponse } from "next/server";

export async function GET() {
  const sha256Fingerprint = process.env.ANDROID_SHA256_FINGERPRINT;

  if (!sha256Fingerprint) {
    return NextResponse.json(
      { error: "SHA256 fingerprint not configured" },
      { status: 500 }
    );
  }

  const assetLinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.trytheturn.golfer",
        sha256_cert_fingerprints: [sha256Fingerprint],
      },
    },
  ];

  return NextResponse.json(assetLinks, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

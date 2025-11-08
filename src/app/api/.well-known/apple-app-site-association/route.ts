import { NextResponse } from "next/server";

export async function GET() {
  const teamId = process.env.APPLE_TEAM_ID;
  const bundleId = process.env.APPLE_BUNDLE_ID || "com.regent.app";

  if (!teamId) {
    return NextResponse.json(
      { error: "Apple Team ID not configured" },
      { status: 500 }
    );
  }

  const appSiteAssociation = {
    applinks: {
      apps: [],
      details: [
        {
          appID: `${teamId}.${bundleId}`,
          paths: ["/invite/*", "/app/*"],
        },
      ],
    },
  };

  return NextResponse.json(appSiteAssociation, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

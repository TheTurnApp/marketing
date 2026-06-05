import { headers } from "next/headers";
import { NextResponse } from "next/server";

const PROD_AASA = {
  applinks: {
    details: [
      {
        appIDs: ["6FK5FBKPA8.com.trytheturn.manager"],
        components: [{ "/": "/welcome*" }],
      },
      {
        appIDs: [
          "6FK5FBKPA8.com.trytheturn.golfer",
          "6FK5FBKPA8.com.trytheturn.manager",
        ],
        components: [{ "/": "/invite*" }, { "/": "/app*" }],
      },
    ],
  },
};

const STAGING_AASA = {
  applinks: {
    details: [
      {
        appIDs: ["6FK5FBKPA8.com.trytheturn.staging.manager"],
        components: [{ "/": "/welcome*" }],
      },
      {
        appIDs: [
          "6FK5FBKPA8.com.trytheturn.staging.golfer",
          "6FK5FBKPA8.com.trytheturn.staging.manager",
        ],
        components: [{ "/": "/invite*" }, { "/": "/app*" }],
      },
    ],
  },
};

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const aasa = host.startsWith("staging.") ? STAGING_AASA : PROD_AASA;

  return NextResponse.json(aasa, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}

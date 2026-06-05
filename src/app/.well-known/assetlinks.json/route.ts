import { headers } from "next/headers";
import { NextResponse } from "next/server";

const PROD_GOLFER_SHA256 =
  "3D:61:EB:C4:ED:6E:A5:28:B3:DB:11:13:53:60:E7:F6:D6:92:07:F8:F0:F8:86:DB:34:F2:8E:D8:71:CF:89:3B";
const STAGING_GOLFER_SHA256 =
  "CE:4E:20:A6:5C:2E:75:41:9A:70:BB:D9:2D:AF:34:4F:34:DA:20:4D:63:04:34:15:D8:98:84:4E:53:AC:27:72";

const PROD_MANAGER_SHA256 =
  "0E:DE:EB:8F:AC:5A:F8:72:0F:AF:CB:A8:44:76:92:53:FE:6E:DB:52:24:5A:9F:F3:0E:EE:2D:E2:3F:AC:51:55";
const STAGING_MANAGER_SHA256 =
  "D6:8C:79:35:40:7E:2B:3E:8E:6D:71:0E:F6:06:1F:17:CA:BD:F3:43:90:2C:B4:21:17:51:0C:48:50:04:AB:15";

function makeEntry(packageName: string, fingerprint: string) {
  return {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: packageName,
      sha256_cert_fingerprints: [fingerprint],
    },
  };
}

const PROD_LINKS = [
  makeEntry("com.trytheturn.golfer", PROD_GOLFER_SHA256),
  makeEntry("com.trytheturn.manager", PROD_MANAGER_SHA256),
];

const STAGING_LINKS = [
  makeEntry("com.trytheturn.staging.golfer", STAGING_GOLFER_SHA256),
  makeEntry("com.trytheturn.staging.manager", STAGING_MANAGER_SHA256),
];

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const links = host.startsWith("staging.") ? STAGING_LINKS : PROD_LINKS;

  return NextResponse.json(links, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

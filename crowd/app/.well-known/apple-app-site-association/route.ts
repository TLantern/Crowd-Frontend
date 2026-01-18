import { NextResponse } from "next/server";

export async function GET() {
  const teamId = process.env.NEXT_PUBLIC_APPLE_TEAM_ID;
  const bundleId = process.env.NEXT_PUBLIC_APPLE_BUNDLE_ID;

  if (!teamId || !bundleId) {
    return NextResponse.json(
      { error: "Missing NEXT_PUBLIC_APPLE_TEAM_ID or NEXT_PUBLIC_APPLE_BUNDLE_ID environment variables" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    applinks: {
      details: [
        {
          appIDs: [
            `${teamId}.${bundleId}`
          ],
          components: [
            { "/": "/event/*" }
          ]
        }
      ]
    }
  });
}

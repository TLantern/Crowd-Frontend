import { headers } from "next/headers";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Props = {
  params: { id: string };
};

async function fetchEventById(eventId: string) {
  // Try official events first
  const officialRef = doc(db, "events_from_official_raw", eventId);
  const officialSnap = await getDoc(officialRef);

    if (officialSnap.exists()) {
      const d = officialSnap.data();
      return {
        id: eventId,
        title: d.title || "Crowd Event",
        date: d.rawDateTime || "Date TBD",
        startISO: d.startTimeISO || null,
        location: d.location || "Location TBD",
        imageUrl: d.imageUrl || null,
        organization: d.organization || null,
        source: "official",
      };
    }

    // Fallback: try linktree / party events
    const partyRef = doc(db, "events_from_linktree_raw", eventId);
    const partySnap = await getDoc(partyRef);

    if (partySnap.exists()) {
      const d = partySnap.data();
      return {
        id: eventId,
        title: d.title || "Crowd Event",
        date: d.rawDateTime || "Date TBD",
        startISO: d.startTimeISO || null,
        location: d.location || "Location TBD",
        imageUrl: d.imageUrl || null,
        organization: d.organization || null,
        source: "party",
      };
    }

  return null;
}

export default async function EventPage({ params }: Props) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  const eventId = (await params).id;

  const event = await fetchEventById(eventId);

  if (!event) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Event not found</h1>
        <p>This event may have been removed or is private.</p>
      </main>
    );
  }

  const universalLink = `https://yourdomain.com/event/${eventId}`;
  const appStoreLink = "https://apps.apple.com/us/app/crowd/id6754718385";

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "16px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      >
      {/* TITLE + META */}
      <h1 style={{ marginTop: "16px", marginBottom: "8px", textAlign: "center" }}>
        {event.title}
      </h1>

      <p style={{ color: "#666", marginBottom: "16px", textAlign: "center" }}>
        {event.date} • {event.location}
        {event.organization && ` • ${event.organization}`}
      </p>

      {/* HERO IMAGE (if exists) */}
      {event.imageUrl && (
        <div style={{ borderRadius: "16px", overflow: "hidden" }}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={1200}
            height={675}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}

      {/* PRIMARY CTA */}
      {isIOS ? (
        <a
          href={universalLink}
          style={{
            display: "block",
            textAlign: "center",
            background: "#000",
            color: "#fff",
            padding: "14px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          Open in Crowd
        </a>
      ) : (
        <a
          href={appStoreLink}
          style={{
            display: "block",
            textAlign: "center",
            background: "#000",
            color: "#fff",
            padding: "14px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          Download Crowd (iOS)
        </a>
      )}

      {/* LOGO */}
      <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "16px", display: "flex", justifyContent: "center" }}>
        <Image
          src="/crowdlogo.jpg"
          alt="Crowd Logo"
          width={100}
          height={100}
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      {/* SECONDARY CTA */}
      <a
        href={appStoreLink}
        style={{
          display: "block",
          textAlign: "center",
          color: "#007AFF",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        Don’t have Crowd? Download it
      </a>

      <p
        style={{
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
        }}
      >
        Used by students at UNT
      </p>
    </main>
  );
}

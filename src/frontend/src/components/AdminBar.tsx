import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { ArrowLeft, Inbox, LogOut } from "lucide-react";

export default function AdminBar({
  showInbox,
  onToggleInbox,
}: {
  showInbox: boolean;
  onToggleInbox: () => void;
}) {
  const { clear } = useInternetIdentity();

  return (
    <div className="sticky top-0 z-50 bg-clay-dark text-cream">
      <div className="container flex h-12 items-center justify-between text-sm">
        <span className="font-semibold">Signed in as owner</span>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onToggleInbox}
            className="flex items-center gap-1.5 font-semibold hover:opacity-80"
          >
            {showInbox ? (
              <>
                <ArrowLeft className="h-4 w-4" /> Back to site
              </>
            ) : (
              <>
                <Inbox className="h-4 w-4" /> Booking inbox
              </>
            )}
          </button>
          <button
            type="button"
            onClick={clear}
            className="flex items-center gap-1.5 hover:opacity-80"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

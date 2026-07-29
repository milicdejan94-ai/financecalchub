import { permanentRedirect } from "next/navigation";

export default function LegacyStatePaycheckPage() {
  permanentRedirect("/paycheck-calculator");
}

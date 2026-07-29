import { permanentRedirect } from "next/navigation";

export default function LegacyHourlyWagePage() {
  permanentRedirect("/calculators/hourly-paycheck");
}

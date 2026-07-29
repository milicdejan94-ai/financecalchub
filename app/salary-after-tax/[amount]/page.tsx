import { permanentRedirect } from "next/navigation";

export default function LegacySalaryAfterTaxPage() {
  permanentRedirect("/calculators/paycheck");
}

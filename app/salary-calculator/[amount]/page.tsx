import { permanentRedirect } from "next/navigation";

export default function LegacySalaryAmountPage() {
  permanentRedirect("/calculators/paycheck");
}

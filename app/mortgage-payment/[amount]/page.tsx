import { permanentRedirect } from "next/navigation";

export default function LegacyMortgageAmountPage() {
  permanentRedirect("/calculators/mortgage");
}

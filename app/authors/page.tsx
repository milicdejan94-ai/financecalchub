import { permanentRedirect } from "next/navigation";

export default function AuthorsRedirectPage() {
  permanentRedirect("/editorial-team");
}

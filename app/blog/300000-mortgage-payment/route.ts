import { NextRequest, NextResponse } from "next/server";

function permanentArticleRedirect(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/blog/mortgage-payment-basics", request.url),
    308,
  );
}

export const GET = permanentArticleRedirect;
export const HEAD = permanentArticleRedirect;

import { auth } from "./app/_lib/auth";

export const config = {
  matcher: ["/dashboard"]
};

export const middleware = auth

// export async function middleware(request) {
//   const session = await auth();
  
//   if (!session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
  
//   return NextResponse.next();
// }
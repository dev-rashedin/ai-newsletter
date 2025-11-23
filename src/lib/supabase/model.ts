  // Redirect to /dashboard
  if (request.nextUrl.pathname === "/") { 
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";

    return NextResponse.redirect(url);
  }

  
  if (user && request.nextUrl.pathname === '/signin') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';

    return NextResponse.redirect(url);
  }
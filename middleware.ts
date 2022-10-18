import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    console.log("req", req)
    return middlewareRoutes(req);
}

const middlewareRoutes = (req: NextRequest) => {
    let verify = req.cookies.get('logged');
    console.log("verify", verify)
    let path = req.nextUrl.pathname;
    const openRoutes = [
        "/home"
    ]
    if(!verify && openRoutes.includes(path)) {
        return NextResponse.redirect(req.nextUrl.origin);
    }
}
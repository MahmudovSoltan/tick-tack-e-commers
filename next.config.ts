import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['control.titan.az', 'cdn.pixabay.com', 'uploads.sarkhanrahimli.dev', "images.unsplash.com","letsenhance.io",'www.bigbasketco.com','indian-retailer.s3.ap-south-1.amazonaws.com','hopkinsdiabetesinfo.org/wp-content','www.tiktak.az','cdn-icons-png.flaticon.com'], // sadəcə domen adı
  },
};

export default nextConfig;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
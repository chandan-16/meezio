// import { ClerkProvider } from "@clerk/nextjs";
// import { Metadata } from "next";
// import "@stream-io/video-react-sdk/dist/css/style.css";
// import "react-datepicker/dist/react-datepicker.css";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "@/components/ui/sonner";
// import { ReactNode } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MEEZIO",
//   description: "Video Calling App ",
//   icons: "/icons/logo.svg",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <ClerkProvider
//       appearance={{
//         layout: {
//           socialButtonsVariant: "iconButton",
//           logoImageUrl: "/icons/yoom-logo.svg",
//         },
//         variables: {
//           colorText: "#fff",
//           colorPrimary: "#0E78F9",
//           colorBackground: "#1C1f2E",
//           colorInputBackground: "#252A41",
//           colorInputText: "#ffff",
//         },
//       }}
//     >
//       <html lang="en">
//         <body className={`${inter.className}`}>
//           <header className="flex justify-end items-center p-4 gap-4 h-16">
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton>
//                 <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                   Sign Up
//                 </button>
//               </SignUpButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//           {children}
//           <Toaster />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-gray-900`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}


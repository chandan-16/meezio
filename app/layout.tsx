import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
// import '@stream-io/video-react-sdk/dist/css/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from "@/components/ui/sonner"
import './globals.css'
import { Inter } from "next/font/google";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meezio App",
  description: "Video Calling App ",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ layout: { logoImageUrl : '/icons/yoom-logo.svg', socialButtonsVariant : 'iconButton' }, variables: {colorText : '#fff', colorPrimary : '#0E78F9', colorBackground : '#1c1f2e', colorInputBackground : '#252a41', colorInput : '#ffff' } }}>
      <html lang="en">
        <body className={`${inter.className}`}>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}

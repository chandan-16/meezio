import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Meezio App",
  description: "Video Calling App ",
  icons: '/icons/logo.svg'
};

const RootLayout = ({children} : Readonly<{children: ReactNode}>) => {
    <main>
      <StreamVideoProvider>
        { children }
         <Toaster />
      </StreamVideoProvider>
    </main>  
}

export default RootLayout;
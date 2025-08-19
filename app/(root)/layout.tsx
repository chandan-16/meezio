import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meezio App",
  description: "Video Calling App ",
  icons: '/icons/logo.svg'
};

const RootLayout = ({children} : Readonly<{children: ReactNode}>) => {
    <main>
      <StreamVideoProvider>
        { children }
      </StreamVideoProvider>
    </main>  
}

export default RootLayout;
import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

const RootLayout = ({children} : Readonly<{children: ReactNode}>) => {
    <main>
      <StreamVideoProvider>
        { children }
      </StreamVideoProvider>
    </main>  
}

export default RootLayout;
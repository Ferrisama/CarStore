import "./globals.css";

import { Footer, NavBar, Provider } from "@components";

export const metadata = {
  title: "Courses",
  description: "Discover world's best courses here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

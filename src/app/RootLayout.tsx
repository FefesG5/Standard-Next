import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { poppins } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col min-h-screen`}
      style={{
        backgroundImage: "var(--background-image)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Prevents the zoom effect on the video uploads page
        animation: "backgroundMove 70s ease-in-out infinite",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${poppins.className} flex-1 p-0 md:p-4`}>
        {children}
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes backgroundMove {
          0% {
            background-position: 45% 50%;
          }
          50% {
            background-position: 55% 50%;
          }
          100% {
            background-position: 45% 50%;
          }
        }
      `}</style>
    </div>
  );
}

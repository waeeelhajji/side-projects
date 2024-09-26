import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const opensens = Open_Sans({ subsets: ["latin"] })
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] })


export const metadata = {
  title: "SurveyApp",
  description: "Track your daily mood,every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>SurveyApp</h1>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 ">

      sdfsd
    </footer>
  )




  return (
    <html lang="en">
      <body className={"w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " + opensens.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "./(main)/layout";


const popnise=Poppins({
  variable:"--font-popnise",
  subsets:["lation"],
  weight:["400"]
 
})

 export const monsert = Montserrat({
  variable:"--font-monsert",
  subsets:["latin"],
  weight:["300","400","500",
    "800"]

})

export const metadata = {
  title: "Dragon News - Best portal in Bangladesh",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${popnise.className} min-h-full flex flex-col`}>
       
        {children}
        </body>
    </html>
  );
}

"use client"
import {  Footer,Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css' 
import GifLoader from '../components/GifLoader' 
import WhatsAppIcon from '../components/WhatsAppIcon';  
import { GoogleAnalytics } from '@next/third-parties/google'




 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
    <>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    AZEEC 
  </title>
  <meta
    content="At AZEEC , we're reshaping the way businesses connect."
    name="description" 
  />
  <meta content="AZEEC " name="keywords" property="AZEEC bynature, AZEEC , men, women" />
  <meta
    content="AZEEC "
    name=""
    property="og:title"
  />
  <meta
    content="https://AZEEC bynature.com/"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="At AZEEC , we're reshaping the way businesses connect."
    name=""
    property="og:description"
  />
  <meta
    content="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752239233/ico_lxkptd.webp"
    name=""
    property="og:image"
  />
   
  <link
    href="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752239233/ico_lxkptd.webp"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752239233/ico_lxkptd.webp"
    rel="icon"
    sizes="32x32" 
  />
  <link
    href="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752239233/ico_lxkptd.webp"
    rel="icon"
    sizes="16x16" 
  /> 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  

 
 










  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
  />

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
                      
                
                
                
                

 
  
</>

      <body>
  
      <GifLoader />

         
          <Navbar2 />
          <WhatsAppIcon />
          {/* <GoogleAnalytics gaId="" /> */}
          {children} 
          <Footer />  
        
      </body>
    </html>
  )
}

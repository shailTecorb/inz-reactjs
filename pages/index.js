import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import SignIn from '../components/Auth/Sign_in'



export default function Home() {
  useEffect(()=>{
    var orig = document.body.className;
    document.body.className = orig + (orig ? ' ' : '') + 'landingBackground';
  },[])
  const imageUrl = 'https://monsite.com/image?prop1=1&prop2=2';


  return (
<>
<Head>
  <meta property="og:image" content={`https://YOUR_DOMAIN/api/social/${encodeURIComponent(imageUrl)}`} />
</Head>
<SignIn />
</>
  )
}

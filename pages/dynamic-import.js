
import { useState } from 'react'; 
import dynamic from "next/dynamic";
  const YoutubeVideo = dynamic(() => import('../components/DinamicVideo'))

function DynamicImportPage() {
  const [isVisible, setIsVisible] = useState();
  return(
   <>
     <p>Mostrar Video
       <input type='checkbox'
         onChange={() => {
         setIsVisible(!isVisible)
         }}
       />
     </p>
     {isVisible &&<YoutubeVideo />}

   </>
  )
}
export default DynamicImportPage

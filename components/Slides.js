import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Slides () {


   const slides = [
      {
         url: 'https://media.flixscans.com/sliders/bbe600ad-74fd-464e-b78a-61e15ae0930e/6EdE7mzjbZxCSqRIjYB82PltXsIAPi-metaSTZkWXRsclBzTGN1b0d2aGZ2NFNTNlUyWFVBRTd4LW1ldGFVbVZoY0dWeUxXOW1MWFJvWlMxRWNtbG1kR2x1WnkxTmIyOXVMbmRsWW5BPS0ud2VicA==-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/e6b1ed28-d8d4-4c88-b115-8fe64a973c15/sAKVnp4bgkwD8lUnWbqiWDM50JfKlO-metaRG9jdG9y4oCZcyBSZWJpcnRoLmpwZw==-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/b238e61a-ba35-4be7-aa06-43a3718abfaa/FAgDaI9tXCd5Iq2fOmgc9HLzpM4Swn-metaRGVhdGggSXMgdGhlIE9ubHkgRW5kaW5nIGZvciB0aGUgVmlsbGFpbmVzczEuanBn-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/cc1c464d-6355-4ee5-8a5b-7af0a2d8b187/SKFUudVeLQPBqssriaOFKDWvFSsP4U-metaVGhlIFZpbGxhaW7igJlzIFNhdmlvci5qcGc=-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/606c92bf-e328-456f-be45-8d05f07abd83/zXAOLwAdNqN3ocBaJ2oOZiEJbWy8Co-metaSS1TdG9sZS10aGUtTnVtYmVyLU9uZS1SYW5rZXLigJlzLVNvdWwud2VicA==-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/3fecc32c-496b-4ec6-b83b-fc20ae74b6c5/70M6406tIoIvDKyqrJlgiNrQrUPOHx-metaTWFycmlhZ2Ugb2YgQ29udmVuaWVuY2UuanBn-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/36121425-82bc-47f8-9e52-18450c9205a6/LQjyTjJDbbiPQAVhUR2w1bvOB0Tsyh-metac3F1YXJlX2FmODgxYjgxLWQ3ZWItNGMwMi1iYjA1LTc3MzYxMjVmZWE0YyAoMSkuanBn-.webp',
      },
      {
         url: 'https://media.flixscans.com/sliders/350d1bce-9fd6-433d-894a-cd4383b0b0fe/jeCuGQQTf0RycBE7l9kkkCPTcSYMMr-metaVGhlIEdyZWF0IE1hZ2UgUmV0dXJucyBBZnRlciA0MDAwIFllYXJzMS5qcGc=-.webp',
      },
   ];

   const [ currentIndex, setCurrentIndex ] = useState( 0 );
   const isFirstSlide = currentIndex === 0;
   const isLastSlide = currentIndex === slides.length - 1;

   const prevSlide = () => {
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex( newIndex );
   };

   const nextSlide = () => {
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex( newIndex );
   };
   const preSlide = isLastSlide ? 0 : currentIndex + 1
   const postSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
   
   const intervalTime = 3000;
   function resetTime () {
      if ( intervalTime ) {
         clearTimeout(intervalTime)
      }
   }
   function auto () {
setInterval(nextSlide,intervalTime)
}
   useEffect( () => {
      resetTime();
      auto();
   }, [ currentIndex ] )
   


   return (
      <main className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-8 relative group flex items-center'>
         <div style={ { backgroundImage: `url(${ slides[ preSlide ].url })` } }
            className=' w-2/5 h-5/6 rounded-md bg-center bg-cover duration-500 grayscale'>

         </div>
         {/* Left Arrow */ }
         <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={ prevSlide } size={ 30 } />
         </div>

         <div
            style={ { backgroundImage: `url(${ slides[ currentIndex ].url })` } }
            className='w-3/5 h-full mx-10 rounded-md bg-center bg-cover duration-500'
         ></div>

         {/* Right Arrow */ }
         <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={ nextSlide } size={ 30 } />
         </div>

         <div style={ { backgroundImage: `url(${ slides[ postSlide ].url })` } }
            className=' w-2/5  h-5/6 rounded-md bg-center bg-cover duration-500 grayscale'>

         </div>
      </main>
   );
}




        import React, { memo } from 'react'

        type cardvideoProps = {
            videoUrl : string,
            title:string
        }
         
        const CardVideo = ({videoUrl,title} : cardvideoProps)  => {
          return (
            <div className="flex flex-col gap-y-4 justify-end items-end">
                <div className='  p-3 border-2 cursor-pointer border-black/40 h-[550px] rounded-2xl overflow-hidden '>
            
                        {videoUrl ?
                          <video  className='h-full rounded-2xl  w-full' controls preload="none">
                          <source src={videoUrl}className='h-full w-full object-cover '  type="video/mp4" />

                          Your browser does not support the video tag.
                          </video>
                         : null }  
                        </div>
                        <span> {title} </span>

            </div>
          )
        }
        
        export default CardVideo
    
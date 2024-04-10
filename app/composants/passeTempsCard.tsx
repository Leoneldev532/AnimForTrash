    

    import React from 'react'
    
    const PasseTempsCard = ({texte}:{texte : string}) => {
      return (
        <div className='relative PasseTempsCard group w-full  h-16 flex   '>
            <div className="w-full flex items-center justify-between">
            <span className="text-5xl h-full flex justify-between items-center">
                    {" "}
                    *{" "}
                  </span>
        <h2 className="uppercase  z-10 h-full top-0 left-0 text-3xl  font-extrabold">
        {texte}
      </h2>

    </div>
      <div className=" h-16 w-full top-0 left-0 bg-red-400 abstitlepassetime absolute z-0 text-3xl  font-extrabold">
      </div>
      </div>
      )
    }
    
    export default PasseTempsCard
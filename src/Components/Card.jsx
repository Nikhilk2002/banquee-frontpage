import React from 'react';

function Card({cardColor}) {
  return (
    <>
      <div className={`h-[25vh] w-[20vw] transform rotate-90 p-2.5 px-[25px] py-[20px] text-white rounded-lg relative`} style={cardColor}>
  <div>
    <h1 className="text-xl font-semibold">banquee.</h1>
  </div>
  <div>
    <h1 className="mt-[5px] text-[2.2em] font-mono">1234 1234 1234</h1>
  </div>
  <div className="flex flex-row py-2.5 relative top-3.5">
    <div className="mx-2.5">
      <h3 className="text-xs">Card Holder</h3>
      <h2 className="text-lg">John Doe</h2>
    </div>
    <div className="mx-2.5">
      <h3 className="text-xs">Expiry Date</h3>
      <h2 className="text-lg">09/28</h2>
    </div>
  </div>
</div>

    </>
  )
}

export default Card
import  {IPhone12Mockup} from "flowbite-react";
import React from 'react'

function DeviceMockup() {
  return (
    <IPhone12Mockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </IPhone12Mockup>
  )
}

export default DeviceMockup

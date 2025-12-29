import { Card } from "@/components/ui/card"


const Footer = () => {
  return (
    <div className="box-border max-w-full">
       <Card className="grid grid-cols-4 justify-between p-8">
        {/* Left Side*/}
           <div className="col-span-2 relative">
            <div className="pb-4 text-left absolute bottom-0">
            <h1 className="text-5xl font-bold">Got an opportunity available?</h1>
            <h1 className="text-5xl font-bold">Send it my way!</h1>
            </div>
           </div>
        {/* Right Side*/}
           <div className="col-span-1 text-right">
            <div className="pb-4">
           <p className="text-xl">Here&apos;s how to get in touch with me</p>
            </div>
            <div className="pb-4">
               <p className="text-xl">Email</p>
            </div>
            <div className="pb-4">
               <p className="text-xl">LinkedIn</p>
               <p className="text-xl">GitHub</p>
               <p className="text-xl">Contact</p>
            </div>
           </div>
        {/* Quotes */}
        <div className="col-span-1">
            <h1>Quotes</h1>
         </div>
        {/* Background */}
           <div>
           </div>
       </Card>
     </div>
  )
}

export default Footer

//flex flex-col flex-2 items-center justify-between lg:columns-2"
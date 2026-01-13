import Gradient from '@/background/gradient'

interface HeroProps {
  id?: string;
}

const Hero = ({ id }: HeroProps) => {
  return (
    <div id={id} className="relative py-32 content-start overflow-x-hidden overflow-y-visible translate-y-1/4 w-screen -mx-2 lg:-mx-24">
      <Gradient/>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center md:text-8xl md:text-left px-4 lg:px-24">
          Francisco Zuniga
        </h1>
        <p className="text-2xl text-center md:text-4xl md:text-left px-4 lg:px-24">
          Software and Cloud Engineer
        </p>
      </div>
    </div>
  )
}

export default Hero
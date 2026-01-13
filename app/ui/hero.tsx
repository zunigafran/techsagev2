
interface HeroProps {
  id?: string;
}

const Hero = ({ id }: HeroProps) => {
  return (
    <div id={id} className="py-32 content-start">
      <h1 className="text-4xl font-bold text-center md:text-8xl md:text-left">
        Francisco Zuniga
      </h1>
      <p className="text-2xl text-center md:text-4xl md:text-left">
        Software and Cloud Engineer
      </p>
    </div>
  )
}

export default Hero
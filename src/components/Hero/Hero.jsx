import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/hero-image2.png";
const Hero = () => {
  return (
    <section>
      <div className=" container p-8 grid grid-cols-1 md:grid-cols-2 min-h-[650px]  relative">
        <div className=" flex flex-col text-center md:text-left justify-center gap-6 font-playfair">
          <h1 className=" text-5xl md:text-6xl font-bold leading-relaxed xl:leading-normal ">
            Gym Gives you the perfect
            <span className="text-secondary"> Health</span>
          </h1>
          <p className="text-gray-600 xl:max-w-[500px]  ">
            It is a long established fact that a reader will be by readable
            content of a page when are the best product.
          </p>
          <div className=" space-x-7 flex justify-center md:justify-start mt-2 ">
            <button className="primary-btn font-bold "> Order Now </button>
            <button className=" flex  gap-2 items-center">
              <FaPlay /> Watch Now
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-4 drop-shadow-lg">
          <img
            src={HeroImg}
            alt="Banner.img"
            className=" w-[350px] md:w-[500px] xl:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

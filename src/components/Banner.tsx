import { LuLeaf } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const features = [
  { icon: <LuLeaf />, text: "Natural Environment" },
  { icon: <MdOutlineVerifiedUser />, text: "Licensed & Verified" },
  { icon: <SlLocationPin />, text: "Prime Location" },
];

const Banner = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-6 px-4 md:px-8 items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-2 rounded-lg p-2 md:p-3 border-white/20 hover:border-white/80 transition-all cursor-pointer w-full  md:w-auto"
          >
            <span className="text-md md:text-xl">{feature.icon}</span>
            <p className="text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;

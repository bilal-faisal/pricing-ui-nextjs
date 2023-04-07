import Image from "next/image";
import star1 from "../../public/star1.png";
import star2 from "../../public/star2.png";
import star3 from "../../public/star3.png";
import List from "./components/list";

const Home = () => {
  return (
    <div>
      <h1 className="md:text-center text-3xl px-10 text-white mt-16 font-bold">
        Simple pricing for your business
      </h1>
      <h2 className="md:text-center text-xl px-10 text-white mt-4">
        Plans that are carefully crafted to suit your business.
      </h2>

      <div className="flex w-2/3 mt-16 bg-white mx-auto rounded-xl shadow-xl flex-wrap">
        <div className="w-full md:w-1/3 py-10 flex flex-col justify-center items-center bg-[#F0EAFB] rounded-t-xl md:rounded-l-xl">
          <h3 className="font-bold pb-1">Premium PRO</h3>
          <h2 className="font-bold text-5xl py-0.5">$329</h2>
          <p className="mt-2">billed just once</p>
          <button className="py-2 px-14 mt-5 mx-5 bg-[#6B46C1] text-white rounded-lg flex-shrink">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-2/3 py-10 px-12">
          <p className="mb-3">
            Access these features when you get this pricing package for your
            business.
          </p>
          <List text="International calling and messaging API" />
          <List text="Additional phone numbers" />
          <List text="Automated messages via Zapier" />
          <List text="24/7 support and consulting" />
        </div>
      </div>

      <div className="flex md:w-2/3 mt-8 mx-auto px-6 flex-wrap">
        <div className="md:w-1/3 flex items-center py-3">
          <Image src={star1} alt="Icon" className="flex-shrink-0" />
          <p className="pl-6 md:px-8  font-semibold">30 days money back Guarantee</p>
        </div>
        <div className="md:w-1/3 flex items-center py-3">
          <Image src={star2} alt="Icon" className="flex-shrink-0" />
          <p className="pl-6 md:px-8 font-semibold">No setup fees 100% hassle-free</p>
        </div>
        <div className="md:w-1/3 flex items-center py-3">
          <Image src={star3} alt="Icon" className="flex-shrink-0" />
          <p className="pl-6 md:px-8 font-semibold">No monthly subscription Pay once and for all</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

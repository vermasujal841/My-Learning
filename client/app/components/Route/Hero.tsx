'use client'
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = () => {
  return (
    <div className="w-full flex flex-col 1000px:flex-row items-center relative">
      {/* Background Animation */}
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 
        1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] 
        hero_animation rounded-full 1100px:left-8 1500px:left-14">
      </div>

      {/* Image Section */}
      <div className="1000px:w-[40%] flex items-center justify-end pt-[70px] 1000px:pt-0 z-10">
        <Image
          src="/assets/banner-img-1.png"
          width={400}
          height={400}
          alt="Banner"
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10"
        />
      </div>

      {/* Text Section */}
      <div className="1000px:w-[60%] flex flex-col items-center text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] 
          font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]">
          Lorem ipsum dolor sit amet,
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 
          1500px:w-[55%] 1100px:w-[78%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu lectus. Donec ultricies, 
          justo sit amet commodo fermentum, justo neque scelerisque velit, sit amet consectetur urna eros non ex.
        </p>
        <br />
        <br />

        {/* Search Bar */}
        <div className="relative w-[90%] 1100px:w-[78%] 1500px:w-[55%] h-[50px]">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] 
              rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] 
              text-[20px] font-[500] font-Josefin"
          />
          <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" size={30} />
        </div>
        <br />
        <br />

        {/* Client Section */}
        <div className="w-[90%] 1100px:w-[78%] 1500px:w-[55%] flex items-center">
          <Image src="/assets/client-1.jpg" width={40} height={40} alt="Client 1" className="rounded-full" />
          <Image src="/assets/client-2.jpg" width={40} height={40} alt="Client 2" className="rounded-full ml-[-20px]" />
          <Image src="/assets/client-3.jpg" width={40} height={40} alt="Client 3" className="rounded-full ml-[-20px]" />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500K+ People already trusted us.{" "}
            <Link href="/courses" className="dark:text-[#46e256] text-[crimson]">
              View Courses
            </Link>{" "}
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;

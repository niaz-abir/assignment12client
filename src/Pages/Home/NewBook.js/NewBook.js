import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { MdLibraryBooks } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const NewBook = () => {
  const allNewBook = [
    {
      id: 1,
      name: "David Knock",
      image:
        "https://i.ibb.co/gwcrPRZ/345453828-970351224152088-5201136286697497871-n-removebg-preview.png",
      writer: "Adem Hami",
      publication: "Eye creen",
      originalPrice: "650",
      price: "400",
    },
    {
      id: 1,
      name: "Nicholes",
      image:
        "https://i.ibb.co/FVbPY9G/345460256-630749235189857-8717253210228009252-n-removebg-preview.png",
      writer: "Niaz Morshed",
      publication: "Guardian",
      originalPrice: "600",
      price: "350",
    },
    {
      id: 1,
      name: "Cup of",
      image:
        "https://i.ibb.co/YLQZS88/345834703-201715592723147-5153563989384656609-n-removebg-preview.png",
      writer: "Adom jump",
      publication: "Somokalin",
      originalPrice: "600",
      price: "350",
    },
    {
      id: 1,
      name: "Cameron",
      image:
        "https://i.ibb.co/6ydhPkh/345454319-187102977583861-4669932692253798829-n-removebg-preview.png",
      writer: "A Maxwell",
      publication: "Sunnah store",
      originalPrice: "700",
      price: "400",
    },
    {
      id: 1,
      name: "The Bill",
      image:
        "https://i.ibb.co/v3dXJdp/345440973-7005626466120911-2135190718808517092-n-removebg-preview.png",
      writer: "Stonies",
      publication: "Guardian",
      originalPrice: "650",
      price: "500",
    },
    {
      id: 1,
      name: "Snadwish",
      image:
        "https://i.ibb.co/fHN242r/345463894-1446811249479014-6978293153637484046-n-removebg-preview.png",
      writer: "David Warner",
      publication: "Somokalin",
      originalPrice: "700",
      price: "350",
    },
    {
      id: 1,
      name: "MiddleNight",
      image:
        "https://i.ibb.co/GH2SQ6q/345464096-909217906825925-3860688133441535800-n-removebg-preview.png",
      writer: "Math Head",
      publication: "Guradian",
      originalPrice: "600",
      price: "250",
    },
    {
      id: 1,
      name: "The Stome",
      image:
        "https://i.ibb.co/7gmLnPP/345468550-131783003223759-8700941693173470514-n-removebg-preview.png",
      writer: "Hazle Moon",
      publication: "Sunna store",
      originalPrice: "800",
      price: "400",
    },
  ];
  return (
    <section className="mt-20">
      <h1 className="pt-4 pb-8 text-3xl font-bold text-center">
        Newly Released On
      </h1>

      <div className="grid grid-cols-1 gap-4 pl-6 pr-6 lg:grid-cols-4">
        {allNewBook?.map((book) => (
          <div key={book?.id} className="bg-[#232729] rounded-md mb-4">
            <div>
              <img
                class="object-cover object-center w-full pt-3  h-60"
                src={book?.image}
                alt="avatar"
              />
            </div>

            <div class="flex items-center px-6 mt-2 ">
              <MdLibraryBooks></MdLibraryBooks>
              <h1 class="mx-3 text-lg font-bold text-[#6297c9] transition-transform hover:translate-y-[-0.5rem] duration-300 ease-in-out">
                {book?.name}
              </h1>
            </div>
            <hr className="mt-2 ml-6 text-[#6297c9] w-44"></hr>

            <div class="px-6 py-2">
              <div class="flex items-center mt-2  text-white dark:text-gray-200">
                <FcBusinessman className="text-[20px]"></FcBusinessman>

                <h1 class="px-2 font-semibold text-[18px]">{book?.writer}</h1>
              </div>

              <div class="flex items-center mt-2  text-white dark:text-gray-200">
                <RiPagesLine className="text-[#6297c9] text-[20px]"></RiPagesLine>

                <h1 class="px-2 text-[16px]">Pages : {book?.price}</h1>
              </div>

              <div class="flex items-center  mt-4 text-white dark:text-gray-200">
                <BsCalendar2Date className="text-[#6297c9] text-[20px]"></BsCalendar2Date>
                <h1 class="px-2 text-[16px]">
                  Published : {book?.publication}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewBook;

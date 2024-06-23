import React, { useContext, useState } from "react";
import { getImageUrl } from "../../api/imageUpload";
import { Authcontext } from "../../Context/Authprovide";
import PostCommunity from "./PostCommunity";
import toast, { Toast } from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Community = () => {
  const { user } = useContext(Authcontext);

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://booknokery.vercel.app/community"
        );
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const text = event.target.text.value;
    const images = event.target.image.files[0];

    const imageUrl = await getImageUrl(images);

    const hostData = {
      name: name,
      text: text,
      image: imageUrl,
    };

    console.log(hostData);

    fetch("https://booknokery.vercel.app/community", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(hostData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("post successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-10">
        <div className="col-span-1 ml-4 lg:ml-8 lg:col-span-4">
          <h1 className="text-[#6198ca] font-semibold text-[1.6rem]">
            Whats Your Mind ?
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="text-white rounded-sm input input-bordered w-[370px] lg:w-[400px] bg-slate-800"
                required
              />
            </div>
            <div>
              <div class="pt-4  w-[370px] lg:w-[400px]">
                <label
                  class="block text-white text-sm font-bold mb-3"
                  for="image"
                >
                  Upload Image
                </label>
                <div class="relative group border-dashed border-2 border-[#6198ca] rounded-lg p-8 cursor-pointer hover:border-[#6198ca] transition-all duration-300">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    class="absolute inset-0  h-full opacity-0 cursor-pointer z-10"
                    required
                  />
                  <div class="flex flex-col items-center justify-center space-y-2 text-center">
                    <svg
                      class="w-16 h-16 mx-auto text-white group-hover:text-[#6198ca] transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    <p class="text-sm text-white group-hover:text-[#6198ca] transition-colors duration-300">
                      Drag and drop or click to upload
                    </p>
                  </div>
                  <div class="absolute inset-0 bg-[#6198ca] opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg z-0"></div>
                  <p class="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                    Upload Image
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                class="block text-white text-sm font-bold mb-3"
                for="image"
              >
                Review
              </label>
              <textarea
                className="textarea textarea-bordered  w-[370px] lg:w-[400px] h-[150px]  bg-slate-800"
                placeholder=".."
                name="text"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button className="w-full rounded-sm lg:w-4/5 btn btn-md">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-2 lg:col-span-6">
          <PostCommunity posts={posts}></PostCommunity>
        </div>
      </div>
    </div>
  );
};

export default Community;

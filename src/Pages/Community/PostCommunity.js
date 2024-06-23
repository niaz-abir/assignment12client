import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostCommunity = ({ posts }) => {
  return (
    <div>
      <div>
        <h1 className="text-[#6198ca] mb-4 font-semibold pl-6 text-[1.6rem]">
          User Post On Community:{" "}
        </h1>
        <div className="grid grid-cols-1 gap-6 p-4 mr-6 lg:grid-cols-2">
          {posts?.map((post) => (
            <SinglePost post={post} key={post._id}></SinglePost>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCommunity;

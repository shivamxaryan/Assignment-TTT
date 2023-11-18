import React from "react";
import data from "../utils/data.json";
import like from "../assets/like.png";

const PostCard = () => {
  return (
    <>
      {data.posts.map((info) => {
        return (
          <>
            <div className="flex-row items-center justify-center xsm:flex-col mt-10 px-5 md:px-10 lg:px-14">
              <div className="w-full flex items-center justify-between">
                <h3 className=" font-extrabold text-md lg:text-xl ">
                  {info.heading}
                </h3>
                <img src={like} width={19} alt="like-icon" />
              </div>
              <div className="flex mt-5 ">
                  <span className=" line-clamp-3 lg:text-lg font-normal">
                    {info.para}
                  </span>
              </div>
            </div>

            <div className="flex xsm:flex-col items-center justify-between mt-10 px-5 pb-7 border-b-2 border-slate-200  md:px-10 lg:px-14">
              <div>
                <span className="text-sky-400 text-sm font-semibold">
                  {info.footerTitle}{" "}
                </span>
                <span className="text-sm font-semibold">
                  by {info.name.toLowerCase()}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-xs font-light md:font-normal text-slate-500 text-center">
                  {info.date}
                </span>
                <span className=" text-slate-500">•</span>
                <span className="text-xs font-light md:font-normal text-slate-500 text-center">
                  {info.time}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-light md:font-normal text-slate-500 text-center">
                  {info.views} views
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PostCard;

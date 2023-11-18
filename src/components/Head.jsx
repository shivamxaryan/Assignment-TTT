import coverImage from "../assets/coverimage.jpeg";
import userImage from "../assets/user.jpg";
import data from "../utils/data.json";
import diamond from "../assets/diamond.png";
import tick from "../assets/tick.png";
import views from "../assets/views.png";
import heart from "../assets/heart.png";
import like from "../assets/like.png";
import fav from "../assets/favourites.png";

const Head = () => {
  return (
    <>
      {data.about.map((info) => {
        return (
          <div>
            <img
              className="md:h-80 h-48 w-full object-cover object-center"
              src={coverImage}
              alt="CoverImage"
            />
            <div className="flex px-6">
              <img
                className="relative md:ml-14 max-h-32 md:max-h-44 rounded-full md:-mt-14 -mt-6 border-2 border-slate-500"
                src={userImage}
                alt="userImage"
              />

              <div className=" w-auto flex-col ml-6 mt-2.5">
                <div className=" flex items-center  xsm:flex-col lg:gap-2">
                  <h1 className="text-md font-bold mt-1 lg:text-lg">
                    {info.name}
                  </h1>
                  <div className="flex items-center justify-center gap-1 ml-3 mt-2">
                    <span className=" text-xs">
                      <img src={diamond} width={17} alt="icon" />
                    </span>

                    <span className=" text-xs">
                      <img src={tick} width={17} alt="tick-icon" />
                    </span>
                  </div>
                </div>
                <div className="text-gray-500 flex space-x-4 mt-2">
                  <div className="flex flex-col items-center min-w-[72px]">
                    <div className="px-4 py-1 border-2 rounded-md  w-full text-center font-bold">
                      {info.followers}
                    </div>
                    <div className="text-sm">Followers</div>
                  </div>
                  <div className="flex flex-col items-center min-w-[72px]">
                    <div className="px-4 py-1 border-2 rounded-md w-full text-center font-bold">
                      {info.following}
                    </div>
                    <div className="text-sm">Following</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex xsm:flex-col mt-5 md:ml-5 md:mt-6">
              <div className="flex-row items-start justify start ml-8 md:ml-12 lg:ml-16 ">
                <h3 className=" text-md tracking-tight font-normal text-slate-700 lg:text-xl">
                  {info.bio}
                </h3>
                <a href={info.link} className="xsm:hidden">
                  <span className=" text-sky-400 text-sm font-normal lg:text-base">
                    {info.link}
                  </span>
                </a>

                <div className="flex xsm:flex-col gap-3 items-center justify-start mt-1">
                  <div className="flex mt-1 ">
                    <div className="flex w-auto xsm:flex-col ">
                      <div className="flex items-center gap-2 mr-5 md:mr-7 ">
                        <img src={fav} width={22} alt="Icon" />
                        <span className="text-sm font-normal">125</span>
                      </div>

                      <div className="flex items-center gap-2 mr-5 md:mr-7">
                        <img src={like} width={22} alt="Icon" />
                        <span className="text-sm font-normal">12</span>
                      </div>

                      <div className="flex items-center gap-2 mr-5 md:mr-7">
                        <img src={views} width={22} alt="Icon" />
                        <span className="text-sm font-normal">57.8K</span>
                      </div>

                      <div className="flex items-center justify gap-2">
                        <img src={heart} width={22} alt="Icon" />
                        <span className="text-sm font-normal">26.0K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Head;

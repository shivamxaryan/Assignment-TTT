const Navbar = () => {
  return (
     <div className="bg-black flex justify-between text-white border-t-2 border-orange-950 px-4 py-2">
      <div className="flex items-center md:ml-3 cursor-pointer">
        <img src="https://www.terriblytinytales.com/img/home/ttt.svg" alt="logo" />
        <span className="font-semibold border-l tracking-[.32em] border-yellow-400 ml-2 px-2">
          STORIES
        </span>
      </div>
      <button className=" text-black font-bold rounded-md px-3 py-2 my-2.5 md:mr-3 bg-yellow-400">
        Courses
      </button>
    </div>   
  );
};

export default Navbar;

import PostCard from './PostCard';

const Post = () => {
  return (
    <div className='mt-10'>
        <div className='flex'>
            <div 
            className='text-blue-400 font-bold text-center border-t-2 border-r-2 rounded-tr-sm w-44 pt-2 pl-1 
            sm:w-52 sm:pl-7 
            md:text-xl md:w-72 md:pl-1 
            lg:w-80 lg:pl-1 lg:text-2xl '>134 Posts</div>
            <div 
            className='w-full border-b-2 border-l-2 rounded-bl-sm relative -bottom-2 -left-0.5'></div>
        </div>
        <PostCard/>
    </div>
  )
}

export default Post;

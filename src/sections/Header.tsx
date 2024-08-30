export const Header = () => {
  
  return <div className="flex justify-center items-center  relative top-3">
     <nav className="flex gap-1 mx-auto p-0.5 border border-white/15  bg-white/10 rounded-full  backdrop-blur">
       <a href="/" className="nav-item">Home</a>
         <a href="/projects" className="nav-item">Projects</a>
         <a href="/about" className="nav-item">About</a>
         <a href="/contact" className=" bg-white nav-item text-gray-900  hover:bg-white/70 hover:text-gray-900 transition duration-200">Contact</a>
      </nav>
   
        <h1 className="">icon</h1>

  </div>;
};

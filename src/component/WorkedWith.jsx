const WorkedWith = () => {
    return (
        <div className="pl-20">
      <section className="bg-black text-white px-20 ">
        <h2 className="font-mono text-lg mb-8">Worked with</h2>
        
        <div className="flex flex-wrap gap-6">
          {[
            "BROKI Services",
            "School Of UI/UX",
            "TheInfluencer",
            
            "Specstem Digital",
            
          ].map((name) => (
            <div
              key={name}
              className="border border-[#2a2a2a] rounded-md px-6 py-4 w-48 h-20 
                         flex items-center justify-center text-center text-sm font-semibold 
                         opacity-60 hover:opacity-100 cursor-pointer transition text-white"
            >
              {name}
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  };
  
  export default WorkedWith;
  
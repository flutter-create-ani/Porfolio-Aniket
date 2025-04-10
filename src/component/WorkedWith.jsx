const WorkedWith = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h2 className="font-mono text-lg mb-8">Worked with</h2>

      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
        {[
          "BROKI Services",
          "School Of UI/UX",
          "TheInfluencer",
          "Specstem Digital",
        ].map((name) => (
          <div
            key={name}
            className="border border-[#2a2a2a] rounded-md px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-48 h-20 
                       flex items-center justify-center text-center text-sm font-semibold 
                       opacity-60 hover:opacity-100 cursor-pointer transition text-white"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkedWith;

import React, { useState } from "react";

const CircularAvatar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-[350px] h-[350px] rounded-full overflow-hidden relative">
      {/* Shimmer Skeleton while loading */}
      {!isLoaded && (
        <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 rounded-full"></div>
      )}

      {/* Real Image */}
      <img
        src="https://media.licdn.com/dms/image/v2/D5622AQGeUQsx_H6WCQ/feedshare-shrink_2048_1536/B56ZXvm6p9GcAs-/0/1743481713916?e=1747267200&v=beta&t=tJMZ7kaxJ3nF0UdpAOFvM72SivlGYty3KYZHiax5zdY"
        alt="Aniket Avatar"
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default CircularAvatar;

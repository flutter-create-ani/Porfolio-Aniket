import React from "react";
import { motion } from "framer-motion";
const ProgressBar = () => {
    return (
        <div className="m-10">
        <div className="w-full h-2 rounded-2xl bg-white text-black align-middle justify-center">
            <motion.div animate={{
                width: "100%",
                scale: [1, 1.2]
            }}
            transition={{
                duration: 10
            }}
            className="w-1/12 h-full bg-amber-500">

            </motion.div>
        </div>
        </div>
    );
}

export default ProgressBar;
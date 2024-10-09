"use client";

import Image from "next/image";
import companyLogo from "@/assets/comapnylogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col h-screen items-center pt-20 bg-slate-200">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image
          src={companyLogo}
          alt="Company Logo"
          width={200}
          height={200}
          className="w-[120px] h-[120px] mb-6"
        />
      </motion.div>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-5xl font-bold"
      >
        Welcome To Our Company
      </motion.h1>
      <Link href="/login">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div whileHover="hover" initial="initial">
            <Button className="bg-primary mt-10 w-[200px] h-[50px] text-xl font-semibold relative  transition-all hover:scale-105 duration-700 overflow-hidden">
              {/* First text - Moves out */}
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                  initial: { y: 0 },
                  hover: {
                    y: -50,
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                Get Started
              </motion.span>

              {/* Second text - Moves in */}
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                  initial: { y: 50 },
                  hover: {
                    y: 0,
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                Get Started
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Home;

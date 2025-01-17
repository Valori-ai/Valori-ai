'use client';

import { SignUp } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
        appearance={{
          baseTheme: theme === "dark" ? dark : light, // Dynamically set the theme
          variables: {
            colorPrimary: "#134e4a", // Customize primary color
          },
        }}
      />
    </div>
  );
};

export default Page;

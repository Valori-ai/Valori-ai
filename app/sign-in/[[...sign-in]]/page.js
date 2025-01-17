'use client';

import { SignIn } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
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

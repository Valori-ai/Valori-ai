import React from "react";

const Features = () => {
  return (
    <section className="">
      <div className="md:w-4/5 mx-auto">
        {/* Section Heading */}
        <h2 className="md:text-5xl text-3xl font-bold mb-4">A New Era for <span className="text-primary dark:text-primary">Product Builders & Developers</span></h2>
        <p className="font-light md:max-w-2xl mb-12">
          Discover how our Frontend AI transforms the way you design, build, and deploy stunning, responsive UIs tailored to your needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1: AI-Powered UI Crafting */}
          <div className="p-6 border rounded-xl  transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold uppercase">🌟 Frontend AI</h3>
            <p className="text-sm font-light text-opacity-50 mt-3">
              Our advanced AI is fine-tuned to craft stunning, responsive UIs that perfectly fit your requirements.
            </p>
          </div>

          {/* Feature 2: Live Preview */}
          <div className="border p-6 rounded-xl  transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold uppercase">🖥️ Live Preview</h3>
            <p className="text-sm font-light text-opacity-50 mt-3">
              Instantly see and interact with the UI as the AI generates the code in real-time, offering a seamless preview experience.
            </p>
          </div>

          {/* Feature 3: Drag & Drop Builder */}
          <div className="border p-6 rounded-xl  transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold uppercase">🏗️ Drag & Drop</h3>
            <p className="text-sm font-light text-opacity-50 mt-3">
              Easily design and build your entire website using our all-in-one UI builder, eliminating the need for any other tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
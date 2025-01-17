'use client';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      text: "I absolutely LOVE your product! It's the single best thing that I experienced since I found this tool. The value you create with this is just mind-blowing, as it enhances a ton of SaaS solutions instantly.",
      author: 'Thomas',
    },
    {
      text: 'This platform empowers me to create frontends that surpass my technical limitations. I can swiftly develop prototypes to showcase to clients without relying on generic templates. It has transformed my workflow entirely!',
      author: 'Marius - Veloxforce',
    },
    {
      text: 'Of all the products I’ve tried, this was the most legit and true to its word. No shady subscriptions, no unnecessary extras—just a clean, simple, and efficient tool. Light years ahead of the competition!',
      author: 'Patrick S.',
    },
    {
      text: "This is hands down the best tool I've ever used. For the first time, I feel like I have a senior dev by my side, making every step seamless and efficient. Highly recommended!",
      author: 'Alexandra T.',
    },
  ];

  return (
    <div className="py-10 relative overflow-hidden px-4 md:px-0 md:w-4/5 mx-auto">
     <div className=''>
       {/* Section Heading */}
       <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Loved by <span className="text-primary">thousands</span> of creators
      </h2>
      <p className="font-light mb-10">
        Real Stories, Real Impact: See What Creators Are Saying About Us
      </p>
     </div>

      {/* Animated Reviews */}
      <motion.div
        className="flex space-x-10"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20, // Adjust duration to control speed
        }}
      >
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 p-6 rounded-xl border"
          >
            {/* Review Text */}
            <p className="text-sm font-light md:text-base italic mb-4">
              "{review.text}"
            </p>
            {/* Author */}
            <h3 className="text-sm md:text-base font-semibold">
              - {review.author}
            </h3>
          </div>
        ))}
      </motion.div>

      </div>
  );
};

export default Reviews;
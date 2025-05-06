"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicTestimonialCard = [
  {
    quote:
      "I focused on creating a sleek and responsive interface that feels natural to use. Every element was designed to make attendance management effortless and intuitive for users.",
    name: "User-Centric Approach",
    title: "Design & Experience",
  },
  {
    quote:
      "Connecting the frontend with Python was all about ensuring real-time updates work flawlessly. The goal was to make the system smooth, reliable, and hassle-free.",
    name: "Seamless Connectivity",
    title: "System Integration",
  },
  {
    quote:
      "Building the face recognition model was a challenge I embraced—leveraging advanced algorithms to make attendance tracking highly precise and dependable.",
    name: "AI-Powered Precision",
    title: "Intelligent Recognition",
  },
  {
    quote:
      "I fine-tuned every aspect of the system to boost efficiency, reduce errors, and speed up recognition, ensuring a seamless and accurate attendance experience.",
    name: "Performance Optimization",
    title: "Scalability & Accuracy",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        "Software Engineer: The Future of Attendance Management"
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicTestimonialCard}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

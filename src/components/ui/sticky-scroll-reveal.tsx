"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: { title: string; description: string }[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const scrollY = useMotionValue(0);

  const linearGradients = [
    "linear-gradient(to bottom right, #00f, #0ff)",
    "linear-gradient(to bottom right, #f0f, #f80)",
    "linear-gradient(to bottom right, #ff0, #f00)",
    "linear-gradient(to bottom right, #0f0, #00f)",
    "linear-gradient(to bottom right, #ffa500, #ff69b4)",
    "linear-gradient(to bottom right, #8a2be2, #4b0082)",
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollTop = scrollRef.current.scrollTop;
    const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    scrollY.set(scrollTop / scrollHeight);
    const index = Math.floor((scrollTop / scrollHeight) * content.length);
    setActiveCard(Math.min(index, content.length - 1));
  };

  const translateY = useTransform(scrollY, [0, 1], [0, 300]); // adjust max movement

  return (
    <div className="flex h-[60rem] p-10">
  {/* Left: Scrollable Content */}
  <motion.div
    ref={scrollRef}
    onScroll={handleScroll}
    animate={{ background: linearGradients[activeCard % linearGradients.length] }}
    className="flex-1 overflow-y-auto rounded-md p-8 space-y-20 transition-colors duration-500 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
  >
    {content.map((item, index) => (
      <div key={index}>
        <motion.h2
          animate={{ opacity: activeCard === index ? 1 : 0.3 }}
          className="text-2xl font-bold text-white"
        >
          {item.title}
        </motion.h2>
        <motion.p
          animate={{ opacity: activeCard === index ? 1 : 0.3 }}
          className="text-lg text-gray-200 mt-4 max-w-sm"
        >
          {item.description}
        </motion.p>
        <div className="h-40" />
      </div>
    ))}
  </motion.div>

  {/* Right: Sticky Gradient Box */}
  <motion.div
    style={{ y: translateY }}
    animate={{ background: linearGradients[activeCard % linearGradients.length] }}
    className="hidden lg:block w-80 h-60 rounded-md shadow-lg flex-shrink-0 ml-6"
  />
</div>
  );
}
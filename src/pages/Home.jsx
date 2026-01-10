import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import React from "react";

import { FaComputer, FaQuestion } from "react-icons/fa6";
import { TbNeedleThread, TbPlug, TbFlame } from "react-icons/tb";
import { GiBee } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";
import { FaRegGem } from "react-icons/fa";

const iconMap = {
  "fa-computer": FaComputer,
  "tb-needle-thread": TbNeedleThread,
  "tb-plug": TbPlug,
  "gi-bee": GiBee,
  "tb-flame": TbFlame,
  "md-restaurant": MdRestaurant,
  FaGem: FaRegGem,
};

export default function Home() {
  const [staticCategories, setStaticCategories] = useState([]);
  const [dynamicCategories, setDynamicCategories] = useState([]);

  useEffect(() => {
    supabase
      .from("static")
      .select("*")
      .then(({ data }) => data && setStaticCategories(data));
    supabase
      .from("dynamic")
      .select("*")
      .then(({ data }) => data && setDynamicCategories(data));
  }, []);

  const staticSkeletons = Array.from({ length: 6 }).map((_, idx) => <div key={idx} className="bg-gray-300 animate-pulse lg:aspect-[4/2.1] rounded-lg" />);

  const dynamicSkeletons = Array.from({ length: 6 }).map((_, idx) => <div key={idx} className="bg-gray-300 animate-pulse lg:aspect-[3/1.7] rounded-lg" />);

  return (
    <div>
      <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] mt-[100px]">
        <img src="/home-img.jpg" alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full max-w-6xl text-white text-center md:text-left space-y-4 md:space-y-6 px-4">
            <span className="inline-block bg-primary px-4 py-1.5 rounded-full text-sm font-semibold mx-auto md:mx-0">RISHTON TUMAN</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mx-auto md:mx-0 uppercase">1-son Teхnikumi</h1>
            <p className="text-base md:text-lg font-medium text-white/90 max-w-lg mx-auto md:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nam quam praesentium est quae perferendis laudantium quia iure? Architecto.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Kasb yo'nalishlari</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {staticCategories.length === 0
            ? staticSkeletons
            : staticCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || FaQuestion;
                return (
                  <Link key={cat.id} to={`/${cat.name}`}>
                    <div className="card border border-gray-200 shadow hover:shadow-md transition-shadow duration-300 flex flex-col gap-2 p-4 bg-white">
                      {/* NAME + ICON bir qatorda */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-cente">
                          <Icon className=" text-primary w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">{cat.name}</h2>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{cat.description}</p>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 mb-24 px-4" id="yarmarka">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Yarmarka</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {dynamicCategories.length === 0
            ? dynamicSkeletons
            : dynamicCategories.map((cat) => (
                <Link key={cat.id} to={`/category/${encodeURIComponent(cat.name)}`}>
                  <div className="card border border-gray-200 shadow hover:shadow-md transition-shadow flex flex-row items-start gap-4 p-4 sm:p-5 bg-white">
                    {/* ICON */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-base-200 rounded-full">
                      {iconMap[cat.icon] ? React.createElement(iconMap[cat.icon], { className: "text-4xl text-primary" }) : <FaQuestion className="text-4xl text-primary" />}
                    </div>

                    {/* NAME + DESCRIPTION */}
                    <div className="flex-1 flex flex-col justify-center gap-1">
                      <h3 className="text-xl font-semibold text-gray-800">{cat.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

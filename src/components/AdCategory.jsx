import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase";

export default function CategoryAds() {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);

  const [category, setCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState("");
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("categories")
      .select("*")
      .ilike("name", decodedCategory)
      .then(({ data }) => {
        if (!data?.length) return setLoading(false);
        const current = data[0];
        setCategory(current);
        setSubCategories(current.sub || []);
        return supabase.from("ads").select("*").eq("category", decodedCategory);
      })
      .then(({ data }) => setAds(data || []))
      .finally(() => setLoading(false));
  }, [decodedCategory]);

  const filteredAds = selectedSub ? ads.filter((ad) => ad.sub_category?.toLowerCase() === selectedSub.toLowerCase()) : ads;

  if (!category && !loading) return <div className="text-center mt-32">Kategoriya topilmadi</div>;

  const skeletonCards = Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="card bg-base-100 shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-gray-200" />
      <div className="card-body p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto mt-[190px] mb-24 px-4">
      {loading ? (
        <div className="mb-6">
          <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">{category.name} bo‘yicha e’lonlar</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setSelectedSub("")} className={`btn btn-soft ${selectedSub === "" ? "btn-primary" : ""}`}>
              Barchasi
            </button>
            {subCategories.map((sub, i) => (
              <button key={i} onClick={() => setSelectedSub(sub)} className={`btn btn-soft ${selectedSub === sub ? "btn-primary" : ""}`}>
                {sub}
              </button>
            ))}
          </div>
        </>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">{skeletonCards}</div>
      ) : filteredAds.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-24">Hozircha joylangan e'lonlar topilmadi</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAds.map((ad) => (
            <Link key={ad.id} to={`/ad/${ad.id}`} className="group">
              <div className="card bg-base-100 shadow-sm hover:shadow-lg transition overflow-hidden">
                <figure className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img src={ad.image_url} alt={ad.title} className="w-full h-full object-cover transition-transform duration-300" />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-base font-semibold line-clamp-2">{ad.title}</h2>
                  {ad.price && <p className="text-lg font-bold text-primary">{ad.price} so‘m</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

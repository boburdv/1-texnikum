import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";

export default function CategoryPage() {
  const { categoryName } = useParams();

  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [categoryName]);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("static").select("*").ilike("name", categoryName).single();

        if (error) throw error;
        setCategoryData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryName]);

  return (
    <div className="max-w-6xl mx-auto mt-40 mb-24">
      {loading ? (
        <div className="rounded-lg bg-base-100 md:flex overflow-hidden animate-pulse">
          <div className="md:w-1/2 w-full relative" style={{ paddingTop: "66.66%" }}>
            <div className="absolute inset-0 bg-gray-200"></div>
          </div>
          <div className="card-body md:w-1/2 gap-4">
            <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
        </div>
      ) : categoryData ? (
        <div className="rounded-lg bg-base-100 shadow-sm md:flex overflow-hidden">
          <figure className="md:w-1/2 w-full">
            <div className="relative w-full" style={{ paddingTop: "66.66%" }}>
              <img src={categoryData.image_url || "/no-image.webp"} alt={categoryData.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </figure>

          <div className="card-body md:w-1/2">
            <h2 className="card-title text-3xl font-bold">{categoryData.name}</h2>

            <p className="text-gray-700 whitespace-pre-line">{categoryData.description}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-24">Ma’lumot topilmadi</p>
      )}
    </div>
  );
}

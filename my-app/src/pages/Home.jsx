import { movies } from "../data/data";
import MovieCard from "../components/MovieCard";
import MovieGallery from "../components/MovieGallery";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">
        🏠 หน้าแรก
      </h1>

      <p className="mt-2 text-slate-500">
        ยินดีต้อนรับสู่ MovieHub
      </p>

      {/* MovieCard 3 เรื่องแรก */}
      <div className="mx-auto mt-8 flex max-w-md flex-col gap-6">
        {movies.slice(0, 3).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
          />
        ))}
      </div>

      {/* MovieGallery */}
      <div className="mt-8">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;
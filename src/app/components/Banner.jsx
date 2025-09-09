export default function Banner({ title, subtitle, imageUrl }) {
    return (
      <div className="relative">
        <div
          className="h-64 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
  
        <div className="bg-pink-500 text-white text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-lg md:text-xl mt-2">{subtitle}</p>
        </div>
      </div>
    );
  }
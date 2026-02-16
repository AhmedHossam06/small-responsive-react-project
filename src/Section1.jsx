import photo from "./assets/sectionimg.jpg";

export default function Section1() {
  return (
    <div
      className="w-full h-48 sm:h-56 lg:h-72 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <p className="text-white text-5xl font-bold">
        CONTACT US
      </p>
    </div>
  );
}

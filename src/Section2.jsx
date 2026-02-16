import section2Photo from "./assets/smart-home.jpg";

export default function Section2(){
  return (
    <div className="w-full min-h-dvh bg-[rgb(46,41,51)] flex flex-col lg:flex-row items-center justify-center gap-10 px-4">

      {/* Form */}
      <div className="w-full max-w-xl flex flex-col gap-6 p-4">
        <h1 className="font-bold text-white text-3xl lg:text-5xl">
          Have Questions?
        </h1>

        <form className="flex flex-col gap-8">

          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-6 text-white">
            <input
              type="text"
              placeholder="Enter your Name"
              className="p-3 bg-transparent border-b-2 border-white focus:outline-none w-full"
            />

            <input
              type="email"
              placeholder="Enter a valid email address"
              className="p-3 bg-transparent border-b-2 border-white focus:outline-none w-full"
            />
          </div>

          {/* Phone */}
          <input
            type="number"
            placeholder="Enter your Phone"
            className="text-white bg-transparent p-3 w-full border-b-2 border-white focus:outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Enter your message"
            className="w-full p-3 border-b-2 border-white bg-transparent text-white resize-none h-32 focus:outline-none placeholder-white/70"
          ></textarea>

          <button className="bg-[rgb(254,96,124)] text-white rounded-full py-3 hover:bg-[rgb(230,80,105)] transition">
            SUBMIT
          </button>
        </form>
      </div>

      {/* Image */}
      <div
        className="w-full max-w-xl h-64 lg:h-112.5 bg-center bg-cover rounded-3xl"
        style={{ backgroundImage: `url(${section2Photo})` }}
      />
    </div>
  );
}

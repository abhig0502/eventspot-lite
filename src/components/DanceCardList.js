// import React from "react";
// import Header from "./Header";

// const DanceCard = ({ image, title, description }) => {
//   return (
//     <div className="max-w-sm rounded shadow-lg m-4 flex flex-col mt-[600px] ">
//       <div className=" ">
        
//       </div>
//       <div className="">
//         <img className="w-[370px] h-[300px]" src={image} alt={title} />
//       </div>
//       <div className="px-6 py-4 bg-gray-950">
//         <div className="font-bold text-white text-xl mb-2 ">{title}</div>
//         <p className="text-white text-base">{description}</p>
//       </div>
//     </div>
//   );
// };

// const DanceCardList = () => {
//   const danceCards = [
//     {
//       image:
//         "https://img.freepik.com/premium-photo/quothispanic-couple-dancing-salsa-merengue-captivating-momentquot_1280275-271967.jpg?semt=ais_hybrid",
//       title: "Salsa Dance",
//       description: "Experience the vibrant and energetic moves of Salsa.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/ballet-dancer-white-tutu-dancing_23-2147765790.jpg",
//       title: "Ballet Dance",
//       description: "Graceful and elegant, ballet is a timeless art form.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/hip-hop-dancer-jumping_23-2147765791.jpg",
//       title: "Hip Hop Dance",
//       description: "Feel the rhythm and groove with Hip Hop dance.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/tango-dancers-passionate-embrace_23-2147765792.jpg",
//       title: "Tango Dance",
//       description: "The passionate and dramatic dance of Tango.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/flamenco-dancer-red-dress_23-2147765793.jpg",
//       title: "Flamenco Dance",
//       description: "Experience the fiery and expressive Flamenco dance.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/jazz-dancer-posing_23-2147765794.jpg",
//       title: "Jazz Dance",
//       description: "A lively dance style with roots in jazz music.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/contemporary-dancer-posing_23-2147765795.jpg",
//       title: "Contemporary Dance",
//       description: "A fluid and expressive dance style.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/ballroom-dancers-elegant-pose_23-2147765796.jpg",
//       title: "Ballroom Dance",
//       description: "Elegant and sophisticated, perfect for formal occasions.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/folk-dancers-traditional-costumes_23-2147765797.jpg",
//       title: "Folk Dance",
//       description: "Traditional dances that reflect cultural heritage.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/breakdancer-performing-street_23-2147765798.jpg",
//       title: "Breakdance",
//       description: "An energetic and acrobatic street dance style.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/latin-dancers-performing_23-2147765799.jpg",
//       title: "Latin Dance",
//       description: "A collection of dances with Latin American origins.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/swing-dancers-vintage-style_23-2147765800.jpg",
//       title: "Swing Dance",
//       description: "A lively and fun dance style from the swing era.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/bollywood-dancers-colorful-costumes_23-2147765801.jpg",
//       title: "Bollywood Dance",
//       description: "A vibrant and expressive dance style from Indian cinema.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/kathak-dancer-traditional-attire_23-2147765802.jpg",
//       title: "Kathak Dance",
//       description: "A classical Indian dance known for its intricate footwork.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/k-pop-dancers-performing_23-2147765803.jpg",
//       title: "K-Pop Dance",
//       description: "A modern dance style popularized by Korean pop music.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/irish-dancers-traditional-costumes_23-2147765804.jpg",
//       title: "Irish Dance",
//       description:
//         "A traditional dance style known for its rapid leg movements.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/tap-dancer-performing-stage_23-2147765805.jpg",
//       title: "Tap Dance",
//       description: "A dance style characterized by the sound of tap shoes.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/african-dancers-traditional-costumes_23-2147765806.jpg",
//       title: "African Dance",
//       description:
//         "A diverse range of dance styles from the African continent.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/belly-dancer-performing-stage_23-2147765807.jpg",
//       title: "Belly Dance",
//       description:
//         "A dance style known for its fluid and expressive movements.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/polka-dancers-traditional-costumes_23-2147765808.jpg",
//       title: "Polka Dance",
//       description: "A lively dance style originating from Central Europe.",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap flex-col justify-center w-[300px] h-[280px] object-cover ">
//       <div className="">
//         <Header />
//       </div>
//       {danceCards.map((card, index) => (
//         <DanceCard
//           key={index}
//           image={card.image}
//           title={card.title}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default DanceCardList;



import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
const MusicEventComponent = () => {
  return (
    <div className="bg-white">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
        <SideMenu />

        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/premium-photo/quothispanic-couple-dancing-salsa-merengue-captivating-momentquot_1280275-271967.jpg?semt=ais_hybrid"
              alt="salsa dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Salsa Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/ballet-dancer-white-tutu-dancing_23-2147765790.jpg"
              alt="ballet dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Ballet Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/hip-hop-dancer-jumping_23-2147765791.jpg"
              alt="hiphop-dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              HipHop Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/tango-dancers-passionate-embrace_23-2147765792.jpg"
              alt="Tango Dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Tango Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://img.freepik.com/free-photo/flamenco-dancer-red-dress_23-2147765793.jpg"
              alt="Flemenco Dance"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Live Concert
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Flemenco Dance
            </a>
            <p className="mt-2 text-gray-500">
              Join us for an unforgettable night of music and entertainment
              featuring top artists from around the world.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">Date:</span>{" "}
              <span className="text-gray-800 font-semibold">
                December 10, 2023
              </span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Location:</span>{" "}
              <span className="text-gray-800 font-semibold">
                Madison Square Garden, NY
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicEventComponent;
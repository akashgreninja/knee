import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const Homepage = () => {
  const advisors = [
    {
      name: "zed dhrudx",
      photo: "advisor1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.5,
      price: "$50/hour",
    },
    {
      name: "zed dhrudxs",
      photo: "advisor2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.8,
      price: "$60/hour",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="w-fullwidth bg-gym-background h-postimage bg-no-repeat bg-cover flex flex-col  justify-center pl-fortest2">
        <div className="align  ">
          <h1 className="font-extrabold text-4xl">
            You Have Life Questions, We Have Answers
          </h1>
          <h2 className="font-semibold text-3xl">
            Keen psychic advisors have answers.
          </h2>
          <button class="bg-[#09B3B0] hover:bg-[#08a8a5] text-white font-bold py-2 px-4 rounded mt-7">
            Click here to know more
          </button>
        </div>
      </div>
      <div>
        <div class="bg-[#F1FAF9] p-4">
          <div class="flex">
            <div class="w-1/2 pr-4">
              <h2 class="text-xl font-bold">Who is keen?</h2>
              <p>We are the biggest drug importers in the west.</p>
            </div>
            <div class="w-1/2 pl-4">
              <div class="h-full flex flex-col justify-between border-l-2 border-gray-300 pl-4">
                <div>
                  <h3 class="text-lg font-bold">Services:</h3>
                  <ul class="mt-2">
                    <li>Love, relationships & family</li>
                    <li>Career and finances</li>
                    <li>Astrology</li>
                    <li>Tarot readings</li>
                    <li>Psychic mediums</li>
                  </ul>
                </div>
                <div>
                  <p>Additional content here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold mb-4 mt-7 ml-check">
            Top Categories
          </h1>
          <a href="#" class="text-sm mr-7">
            View All
          </a>
        </div>

        <div class="flex justify-between mt-4 ml-10 mr-10">
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-5">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-l font-medium ">Life</p>
              <p class="text-xs text-gray-500">lorem13</p>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-7">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Category 2</p>
              <p class="text-xs text-gray-500">Description 2</p>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-7">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Category 2</p>
              <p class="text-xs text-gray-500">Description 2</p>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-7">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Category 2</p>
              <p class="text-xs text-gray-500">Description 2</p>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-7">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Category 2</p>
              <p class="text-xs text-gray-500">Description 2</p>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <div class="mr-2 mb-7">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Category 2</p>
              <p class="text-xs text-gray-500">Description 2</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Our Advisors</h2>
          <div className="flex flex-wrap">
            {advisors.map((advisor, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-lg">
                  <div className="p-6">
                    <img
                      className="mx-auto w-24 h-24 rounded-full mb-4"
                      src={advisor.photo}
                      alt={advisor.name}
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {advisor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{advisor.description}</p>
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L15.09 8.32L21.54 9.14L17.81 13.38L18.72 19.81L12 17.32L5.28 19.81L6.19 13.38L2.46 9.14L8.91 8.32L12 2Z" />
                      </svg>
                      <span className="text-gray-600 ml-1">
                        {advisor.rating} (120 reviews)
                      </span>
                    </div>
                    <p className="text-gray-600">Price: {advisor.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 #F1FAF9">
          <h2 class="text-2xl font-bold mb-4">Testimonials</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod nunc vel orci condimentum, sit amet rhoncus enim
                  dapibus.
                </p>
                <p class="font-bold">- John Doe</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod nunc vel orci condimentum, sit amet rhoncus enim
                  dapibus.
                </p>
                <p class="font-bold">- Jane Smith</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod nunc vel orci condimentum, sit amet rhoncus enim
                  dapibus.
                </p>
                <p class="font-bold">- Michael Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;

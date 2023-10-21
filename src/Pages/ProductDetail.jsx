import React from "react";
import firecouple from "../Assets/firecouple.png";
import { AiOutlineHeart, AiOutlineLineHeight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SiGoogle } from "react-icons/si";

function ProductDetail() {
  return (
    <div className=" sm:mx-52 sm:mt-4">
      <div className=" flex flex-col mt-4 sm:flex-row items-center justify-center gap-5">
        <div className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[300px] bg-teal-600 rotate-[6deg]">
          <img src={firecouple} alt="" className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[300px] -rotate-[6deg] " />
        </div>
        <div>
          <div className=" border text-center sm:text-left  rounded-lg p-3 shadow-xl shadow-teal-600/10 space-y-3">
            <h1 className=" font-montserrat font-medium">
              African couple dressed in amazing clad. Nigerian blah blah blah
            </h1>
            <h1 className=" font-montserrat text-xl font-bold">KES 3500</h1>
            <p className=" font-montserrat text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem facilis perferendis molestia\e officiis culpa
              maxime, quaerat, harum ipsam ducimus vitae iste tenetur voluptate
              laudantium repellendus qui nobis magnam fuga reiciendis!
            </p>
          </div>
          <div
            className=" flex items-center space-x-2 border w-fit rounded-md p-3 bg-teal-600 text-slate-200 mt-3 font-montserrat
                 shadow-xl"
          >
            <AiOutlineHeart className=" text-indigo-100" />
            <small className=" font-montserrat">Add to Wishlist</small>
          </div>
          <div>
            <button className=" rounded-md p-3 bg-teal-600 text-white font-montserrat mt-3 drop-shadow-2xl">
              Add To Cart
            </button>
          </div>
          <div className=" flex-col flex">
            <Link className=" flex items-center gap-2 border w-fit p-1 mt-2 rounded-full hover:bg-teal-600 hover:text-white">
              <SiGoogle /> Email me when the price drops
            </Link>
            <small className=" text-black">All returns are accepted if product is not as described in the product information section.</small>
          </div>
        </div>
      </div>
      <div>
        <div className=" border m-5 space-x-3 bg-teal-700 rounded-lg p-2 text-white">
          <Link className=" uppercase bg-teal-300 p-1 rounded-lg text-white hover:text-sky-500">
            Description
          </Link>
          <Link>Tags</Link>
          <Link>Reviews</Link>
        </div>

        <div>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </small>
        </div>
        <div className=" flex justify-center mt-3 mb-3">
          <div className=" border w-[500px] items-center text-center rounded-lg">
            <h1 className=" font-medium text-sky-50 bg-teal-700 rounded-t-lg">
              Seller's Assurance
            </h1>

            <marquee
              behavior=""
              direction=""
              className=" text-sky-500 font-medium uppercase"
            >
              CRAFTED SOLE is a platform that sell crafted products and lorem
              ipsum dolor sit amet!
            </marquee>

            <div className=" p-3 bg-teal-700 rounded-b-lg"></div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center text-left">
          <h2>Product Information</h2>
          <small className=" text-red-500">*This informaton is displayed by the seller</small>
          <tbody>
            <tr>
              <td className=" font-medium">Main Material</td>
              <td  >Cotton</td>
            </tr>
            <tr>
              <td className=" font-medium">Color</td>
              <td>Orange, Red, Brown</td>
            </tr>
            <tr>
              <td className=" font-medium">Sleeves</td>
              <td>Long Sleeve</td>
            </tr>
            <tr>
              <td className=" font-medium">Top Fit</td>
              <td>Regular</td>
            </tr>
            <tr>
              <td className=" font-medium">Print</td>
              <td>Arab Culture Print</td>
            </tr>
            <tr>
              <td className=" font-medium">Neck</td>
              <td>Round Neck</td>
            </tr>
            <tr>
              <td className=" font-medium">Pieces Count</td>
              <td>3 Pieces per box</td>
            </tr>
            <tr>
              <td className=" font-medium">Occasion</td>
              <td>Wedding/Formal event</td>
            </tr>
            <tr>
              <td className=" font-medium">Shipping Weight (kg)</td>
              <td>1.2</td>
            </tr>
          </tbody>
        </div>
        <div className=" flex flex-col items-center text-center">
            <h1 className=" uppercase font-bold text-sky-500 leading-10">Crafters Also viewed</h1>
            <small className=" text-gray-700 uppercase">Products that crafters viewed</small>
<div className=" flex flex-wrap items-center justify-center gap-3 ">
            <div className="p-4 rounded border mt-4">

                <div className="  w-[200px] h-[200px] rotate-6 bg-teal-700">
                <img src={firecouple} alt="" className="  h-full w-full -rotate-6" />
                </div>
                <div className="  bg-white rotate-6 mt-6">
                <div className=" flex flex-col -rotate-6 bg-teal-700 text-white text-center shadow-xl shadow-white/40">
                    <small className=" uppercase text-lg font-light">Men</small>
                    <small className=" font-bold">Lorem ipsum dolor sit amet!</small>
                    <small className=" text-yellow-500">Ratings (24)</small>
                    <div className=" flex flex-col text-center gap-2">
                        <del className=" font-light text-xs">KES 3200</del>
                    <small className=" font-light text-lg">KES 3000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="p-4 rounded border mt-4">

<div className="  w-[200px] h-[200px] rotate-6 bg-teal-700">
<img src={firecouple} alt="" className="  h-full w-full -rotate-6" />
</div>
<div className="  bg-white rotate-6 mt-6">
<div className=" flex flex-col -rotate-6 bg-teal-700 text-white text-center shadow-xl shadow-white/40">
    <small className=" uppercase text-lg font-light">Men</small>
    <small className=" font-bold">Lorem ipsum dolor sit amet!</small>
    <small className=" text-yellow-500">Ratings (24)</small>
    <div className=" flex flex-col text-center gap-2">
        <del className=" font-light text-xs">KES 3200</del>
    <small className=" font-light text-lg">KES 3000</small>
    </div>
</div>
</div>
</div>
 <div className="p-4 rounded border mt-4">

                <div className="  w-[200px] h-[200px] rotate-6 bg-teal-700">
                <img src={firecouple} alt="" className="  h-full w-full -rotate-6" />
                </div>
                <div className="  bg-white rotate-6 mt-6">
                <div className=" flex flex-col -rotate-6 bg-teal-700 text-white text-center shadow-xl shadow-white/40">
                    <small className=" uppercase text-lg font-light">Men</small>
                    <small className=" font-bold">Lorem ipsum dolor sit amet!</small>
                    <small className=" text-yellow-500">Ratings (24)</small>
                    <div className=" flex flex-col text-center gap-2">
                        <del className=" font-light text-xs">KES 3200</del>
                    <small className=" font-light text-lg">KES 3000</small>
                    </div>
                </div>
                </div>
            </div>
             <div className="p-4 rounded border mt-4">

                <div className="  w-[200px] h-[200px] rotate-6 bg-teal-700">
                <img src={firecouple} alt="" className="  h-full w-full -rotate-6" />
                </div>
                <div className="  bg-white rotate-6 mt-6">
                <div className=" flex flex-col -rotate-6 bg-teal-700 text-white text-center shadow-xl shadow-white/40">
                    <small className=" uppercase text-lg font-light">Men</small>
                    <small className=" font-bold">Lorem ipsum dolor sit amet!</small>
                    <small className=" text-yellow-500">Ratings (24)</small>
                    <div className=" flex flex-col text-center gap-2">
                        <del className=" font-light text-xs">KES 3200</del>
                    <small className=" font-light text-lg">KES 3000</small>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <div className=" m-10">
    <button className=" bg-sky-500 p-3 text-white font-medium rounded-lg hover:bg-sky-600 hover:text-gray-200">Show More</button>
</div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;

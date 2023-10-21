import React from "react";
import craftedsoleremv from "../Assets/craftedsoleremv.png";

function TermsConditions() {
  return (
    <div>
      <div className=" m-5 space-y-3">
        <div className=" items-center flex  flex-col text-center justify-center">
          <img src={craftedsoleremv} alt="" />
          <h1 className=" uppercase font-medium">Crafted For You</h1>
        </div>
        <div className=" flex flex-col items-center text-center justify-center">
          <h1 className=" text-4xl text-sky-500 font-light">Crafted Sole Terms & Conditions</h1>
          <small className=" font-light text-sky-700">By Crafted Sole's Team</small>
        </div>
        <div>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis ipsum eius nesciunt exercitationem laborum sed numquam possimus nihil. Illo, quas! Ducimus ullam ex saepe, laboriosam doloribus neque sequi corrupti?</small>
            <li className=" text-sm text-sky-500">Lorem ipsum dolor sit amet</li>
            <li className=" text-sm text-sky-500">Lorem ipsum dolor sit amet</li>
            <li className=" text-sm text-sky-500">Lorem ipsum dolor sit amet</li>
            <li className=" text-sm text-sky-500">Lorem ipsum dolor sit amet</li>
            <li className=" text-sm text-sky-500">Lorem ipsum dolor sit amet</li>
        </div>

        <div>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eaque ex, fugiat ad accusantium quasi veritatis inventore, recusandae maxime sint neque corporis voluptates eum cupiditate dolorum ipsa quisquam beatae laboriosam.</small>
        </div>
        <div>
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iste illum distinctio. Esse commodi praesentium dolorem explicabo perspiciatis modi asperiores obcaecati ducimus, necessitatibus, at ipsa suscipit, deserunt error sapiente quia.</small>
        </div>
        <div>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, amet! Optio libero ea fuga molestias tempora assumenda exercitationem repellat, earum dolore, impedit at iste quasi a amet voluptate consequatur numquam!</small>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;

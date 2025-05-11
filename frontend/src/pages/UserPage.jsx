import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={123} replies={232} postImg={'/post1.png'} postTitle={"Let's talk about Threads"} />
      <UserPost likes={23} replies={223} postImg={'/post3.png'} postTitle={"This is my first thread"} />
      <UserPost likes={344} replies={12} postImg={'/post1.png'} postTitle={"I want to buy Tesla"} />
      <UserPost likes={12} replies={456} postImg={'/post3.png'} postTitle={"Shall we purchase Threads"} />

    </>
  );
};

export default UserPage;

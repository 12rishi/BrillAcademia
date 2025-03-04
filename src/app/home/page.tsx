"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data } = useSession();
  if (data) {
    return (
      <div>
        <h1>{data.user?.name}</h1>
        <h2>{data.user?.email}</h2>
        <Image
          src={data.user?.image as string}
          alt="User Image"
          width={100}
          height={100}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <button onClick={() => signIn("google")}>sign In with google</button>;
};

export default Home;

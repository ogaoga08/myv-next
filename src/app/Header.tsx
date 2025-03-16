import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header
      className="py-5 px-10 border-b flex justify-between items-center text-slate-50 bg-red-700 fixed top-0 left-0 w-full z-50"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)" }}
    >
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">myv</Link>
        </h1>
      </div>
      <SignedOut>
        <Link href={"/sign-in"}>サインイン</Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* <UserProfile /> */}
        {/* <SignOutButton /> */}
      </SignedIn>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header
      className="py-5 px-10 border-b flex justify-between items-center bg-red-900"
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
      </SignedIn>
    </header>
  );
};

export default Header;

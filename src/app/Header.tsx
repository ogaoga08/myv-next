import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "./components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "./components/ui/button";
import { HomeIcon, UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";

const Header = async () => {
  // const { userId } = auth();
  const user = await currentUser();

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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0 h-10 w-10">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user?.imageUrl || "/placeholder-user.jpg"}
                  alt={`${user?.username || "ユーザー"}のプロフィール画像`}
                />
                <AvatarFallback>
                  {user?.username?.slice(0, 2).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="pb-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src={user?.imageUrl || "/placeholder-user.jpg"}
                    alt={`${user?.username || "ユーザー"}のプロフィール画像`}
                  />
                  <AvatarFallback>
                    {user?.username?.slice(0, 2).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <SheetTitle className="text-xl">
                  {user?.username || "ユーザー"}
                </SheetTitle>
                <p className="text-sm text-gray-500">
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>
            </SheetHeader>

            <div className="space-y-4 mt-6">
              <Link
                href={`/profile/${user?.username}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <UserIcon size={20} />
                <span>マイページ</span>
              </Link>

              <Link
                href="/settings"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                {/* <UserProfile /> */}
                <SettingsIcon size={20} />
                <span>設定</span>
              </Link>
            </div>

            <SheetFooter className="absolute bottom-6 left-6 right-6">
              <SignOutButton>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <LogOutIcon size={16} />
                  <span>ログアウト</span>
                </Button>
              </SignOutButton>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SignedIn>
    </header>
  );
};

export default Header;

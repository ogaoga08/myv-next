"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserProfile,
  useUser,
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
import { Button } from "./components/ui/button";
import { UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";

const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useUser();

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header
      className="py-5 px-10 min-h-20 flex justify-between items-center text-slate-50 bg-red-700 fixed w-full z-50"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)" }}
    >
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">myv</Link>
        </h1>
      </div>
      <SignedOut>
        <Link
          href={"/sign-in"}
          className="p-2 rounded-md font-bold bg-red-700 hover:bg-red-800 transition duration-200"
        >
          ログイン
        </Link>
      </SignedOut>
      <SignedIn>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user?.imageUrl}
                  alt={`${user?.username || "ユーザー"}のプロフィール画像`}
                />
                <AvatarFallback>
                  {user?.username?.slice(0, 2).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent className="max-w-60 md:,max-w-full">
            <SheetHeader className="p-6">
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
                <p className="text-sm text-gray-500 px-2">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </SheetHeader>

            <div className="space-y-4 mt-4">
              {/* <div className="flex justify-center items-center mx-auto">
                <PostForm />
              </div> */}
              <Link
                href={`/profile/${user?.username}`}
                className="flex items-center space-x-2 xl:px-3 py-2 rounded-lg hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                <UserIcon size={20} />
                <span>マイページ</span>
              </Link>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button
                    className="flex items-center space-x-2 xl:px-3 py-2 rounded-lg hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      // This is needed to prevent the Sheet from capturing the event
                      setIsDialogOpen(true);
                    }}
                  >
                    <SettingsIcon size={20} />
                    <span>設定</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-full">
                  <UserProfile routing="hash" />
                </DialogContent>
              </Dialog>
            </div>

            <SheetFooter className="absolute bottom-6 left-6 right-6">
              <SignOutButton>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={handleLinkClick}
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

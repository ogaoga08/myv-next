import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const GenreButton = () => {
  return (
    <div className="my-4 flex flex-col">
      <Menu
        as="div"
        className="relative inline-block text-left m-4 flex-1 min-w-[150px]"
      >
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-yellow-950 hover:opacity-75">
            やわらかい
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                href="/yakiniku/shoulder/zabuton"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ザブトン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="yakiniku/back/tenderloin"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ヒレ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/yakiniku/back/chateaubriand"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                シャトーブリアン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/yakiniku/round/shinshin"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                シンシン
              </Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu
        as="div"
        className="relative inline-block text-left m-4 flex-1 min-w-[150px]"
      >
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-yellow-950 hover:opacity-75">
            ジューシー
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                href="/yakiniku/chest-belly/sankakubara"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                サンカクバラ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="yakiniku/shoulder/zabuton"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ザブトン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/offal/abdomen/himo(marucho)"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ヒモ(マルチョウ)
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/offal/abdomen/shimacho"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                シマチョウ
              </Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu
        as="div"
        className="relative inline-block text-left m-4 flex-1 min-w-[150px]"
      >
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-yellow-950 hover:opacity-75">
            希少部位
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                href="/yakiniku/back/sirloin"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                サーロイン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/yakiniku/back/tenderloin"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ヒレ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/yakiniku/shoulder/zabuton"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ザブトン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/yakiniku/back/chateaubriand"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                シャトーブリアン
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/offal/abdomen/hatsu"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                ハツ
              </Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default GenreButton;

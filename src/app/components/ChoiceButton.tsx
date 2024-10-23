"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ChoiceButton = () => {
	const [currentLevel, setCurrentLevel] = useState(0);
	const [currentIndex, setCurrentIndex] = useState<number | null>(null);

	const handleButtonClick = (index: number, level: number) => {
		setCurrentIndex(index);
		setCurrentLevel(level);
	};

	const renderButtons = () => {
		if (currentLevel === 0) {
			return (
				<div className="my-4 flex justify-center">
					<button
						onClick={() => handleButtonClick(0, 1)}
						className="m-4 flex-1 min-w-[150px] block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
					>
						焼肉
					</button>
					<button
						onClick={() => handleButtonClick(1, 1)}
						className="m-4 flex-1 min-w-[150px] block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75"
					>
						ホルモン
					</button>
				</div>
			);
		} else if (currentLevel === 1 && currentIndex === 0) {
			return (
				<div className="my-4 flex flex-wrap justify-center">
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							頭から首
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							肩
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							背中
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							胸から腹
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							モモ
						</Link>
					</div>
				</div>
			);
		} else if (currentLevel === 1 && currentIndex === 1) {
			return (
				<div className="my-4 flex flex-wrap justify-center">
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							頭・胸あたり
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							胃袋あたり
						</Link>
					</div>
					<div className="m-4 flex-1 min-w-[150px]">
						<Link href={`#`} className="block text-center bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-950 hover:opacity-75">
							下腹部あたり
						</Link>
					</div>
				</div>
			);
		}
	};

	return <>{renderButtons()}</>;
};

export default ChoiceButton;
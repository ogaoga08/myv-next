import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Part } from "@/types";
import PartsCard from "./PartsCard";
type PartListProps = {
  parts: Part[];
};
const PartsList = ({ parts }: PartListProps) => {
  return (
    <div>
      {parts.map((part) => (
        <PartsCard part={part} key={part.engName}></PartsCard>
      ))}
    </div>
  );
};
export default PartsList;

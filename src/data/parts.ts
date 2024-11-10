import parts from "./partsData";

export async function fetchFilteredParts(query: string) {
  const filteredParts = parts.filter(
    (part) =>
      part.name.toLowerCase().includes(query.toLowerCase()) ||
      part.engname.toLowerCase().includes(query.toLowerCase()) ||
      part.descr.toLowerCase().includes(query.toLowerCase())
  );

  return filteredParts;
}

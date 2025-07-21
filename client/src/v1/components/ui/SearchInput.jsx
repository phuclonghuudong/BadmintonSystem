import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(keyword);
    }
  };

  return (
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="border-none outline-none bg-gray-200 px-2 py-1 rounded text-xs w-full max-w-xs"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;

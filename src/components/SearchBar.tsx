import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search beers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/80 backdrop-blur-sm"
      />
    </div>
  );
};

export default SearchBar;
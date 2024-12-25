import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "@/components/SearchBar";
import BeerCard from "@/components/BeerCard";
import { Beer } from "@/types/beer";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const { data: beers, isLoading, error } = useQuery({
    queryKey: ["beers"],
    queryFn: async () => {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      if (!response.ok) {
        throw new Error("Failed to fetch beers");
      }
      return response.json() as Promise<Beer[]>;
    },
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to fetch beers. Please try again later.",
          variant: "destructive",
        });
      },
    },
  });

  const filteredBeers = beers?.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading beers. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beer-foam/50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-beer-brown text-center mb-8">
          Beer Explorer
        </h1>
        
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-beer-amber" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBeers?.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
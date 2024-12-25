import { Beer } from "@/types/beer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface BeerCardProps {
  beer: Beer;
}

const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={beer.image || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"}
            alt={beer.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-beer-brown">{beer.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-beer-amber font-medium">{beer.price}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-beer-amber text-beer-amber" />
              <span className="text-sm text-gray-600">
                {beer.rating.average.toFixed(1)} ({beer.rating.reviews})
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeerCard;
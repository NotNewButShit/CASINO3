import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface CasinoCardProps {
  name: string;
  logo: string;
  rating: number;
  bonusOffer: string;
  description: string;
  affiliateLink: string;
}

const CasinoCard = ({
  name = "Casino Royal",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=casino",
  rating = 4.5,
  bonusOffer = "100% up to ₱10,000 + 100 Free Spins",
  description = "Enjoy a wide variety of games including slots, table games, and live dealer options with fast payouts and 24/7 customer support.",
  affiliateLink = "#",
}: CasinoCardProps) => {
  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="fill-yellow-400 text-yellow-400"
            size={16}
          />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="text-yellow-400" size={16} />);
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }
    return stars;
  };

  return (
    <Card className="w-full max-w-[320px] h-[350px] flex flex-col bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 overflow-hidden">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex">{renderStars()}</div>
        </div>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-3">
          <p className="text-green-600 dark:text-green-400 font-medium text-sm">
            {bonusOffer}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
          onClick={() => {
            // Track affiliate click
            console.log(`Clicked on ${name} affiliate link`);
            window.open(affiliateLink, "_blank", "noopener,noreferrer");
          }}
        >
          Visit Casino <ExternalLink size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CasinoCard;

import React, { useState } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonusOffer: string;
  affiliateLink: string;
  featured: boolean;
}

interface FeaturedCasinosProps {
  casinos?: Casino[];
  title?: string;
  subtitle?: string;
}

const FeaturedCasinos = ({
  casinos = [
    {
      id: "1",
      name: "BK8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BK8",
      rating: 4.9,
      bonusOffer: "₱100,000 Welcome Bonus + 200 Free Spins",
      affiliateLink: "#",
      featured: true,
    },
    {
      id: "2",
      name: "22BET",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=22BET",
      rating: 4.8,
      bonusOffer: "100% up to ₱50,000 + 200 Free Spins",
      affiliateLink: "#",
      featured: true,
    },
    {
      id: "3",
      name: "MegaPari",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MegaPari",
      rating: 4.7,
      bonusOffer: "Sports Bonus up to ₱75,000",
      affiliateLink: "#",
      featured: true,
    },
    {
      id: "4",
      name: "GG.BET",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GGBET",
      rating: 4.6,
      bonusOffer: "160% up to ₱16,000 Welcome Bonus",
      affiliateLink: "#",
      featured: true,
    },
    {
      id: "5",
      name: "MD88",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MD88",
      rating: 4.5,
      bonusOffer: "₱35,000 Sports Welcome Bonus",
      affiliateLink: "#",
      featured: true,
    },
  ],
  title = "Top Featured Online Casinos",
  subtitle = "Discover the best online casinos in the Philippines with exclusive welcome bonuses",
}: FeaturedCasinosProps) => {
  const featuredCasinos = casinos.filter((casino) => casino.featured);

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="fill-yellow-400 text-yellow-400 w-4 h-4" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="text-gray-300 w-4 h-4" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300 w-4 h-4" />);
      }
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white dark:bg-gray-900">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {featuredCasinos.map((casino) => (
            <CarouselItem key={casino.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="relative w-full h-32 mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                    <img
                      src={casino.logo}
                      alt={`${casino.name} logo`}
                      className="h-24 w-auto object-contain"
                    />
                    {casino.featured && (
                      <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {casino.name}
                  </h3>
                  <div className="mb-3">{renderRating(casino.rating)}</div>
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 p-3 rounded-md w-full">
                    {casino.bonusOffer}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-center">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(casino.affiliateLink, "_blank")}
                  >
                    Claim Bonus
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 lg:-left-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
          <ChevronLeft className="h-4 w-4" />
        </CarouselPrevious>
        <CarouselNext className="-right-4 lg:-right-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
          <ChevronRight className="h-4 w-4" />
        </CarouselNext>
      </Carousel>

      <div className="mt-8 text-center">
        <Button
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
        >
          View All Casinos
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCasinos;

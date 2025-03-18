import React, { useState } from "react";
import { ArrowUpDown, ExternalLink, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  welcomeBonus: string;
  gameSelection: {
    slots: number;
    tableGames: number;
    liveDealer: number;
  };
  paymentMethods: string[];
  payoutSpeed: string;
  minDeposit: number;
  affiliateLink: string;
}

type SortField =
  | "rating"
  | "welcomeBonus"
  | "gameSelection"
  | "paymentMethods"
  | "payoutSpeed"
  | "minDeposit";
type SortDirection = "asc" | "desc";

interface CasinoComparisonTableProps {
  casinos?: Casino[];
}

const CasinoComparisonTable = ({
  casinos = defaultCasinos,
}: CasinoComparisonTableProps) => {
  const [sortField, setSortField] = useState<SortField>("rating");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedCasinos = [...casinos].sort((a, b) => {
    let valueA, valueB;

    switch (sortField) {
      case "rating":
        valueA = a.rating;
        valueB = b.rating;
        break;
      case "welcomeBonus":
        // Sort by bonus amount (just for demo, in real app would need proper parsing)
        valueA = parseInt(a.welcomeBonus.replace(/[^0-9]/g, ""));
        valueB = parseInt(b.welcomeBonus.replace(/[^0-9]/g, ""));
        break;
      case "gameSelection":
        valueA =
          a.gameSelection.slots +
          a.gameSelection.tableGames +
          a.gameSelection.liveDealer;
        valueB =
          b.gameSelection.slots +
          b.gameSelection.tableGames +
          b.gameSelection.liveDealer;
        break;
      case "paymentMethods":
        valueA = a.paymentMethods.length;
        valueB = b.paymentMethods.length;
        break;
      case "payoutSpeed":
        // Convert payout speed to hours for sorting
        valueA = convertPayoutToHours(a.payoutSpeed);
        valueB = convertPayoutToHours(b.payoutSpeed);
        break;
      case "minDeposit":
        valueA = a.minDeposit;
        valueB = b.minDeposit;
        break;
      default:
        valueA = a.rating;
        valueB = b.rating;
    }

    if (sortDirection === "asc") {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Compare Top Philippines Casinos
      </h2>

      <div className="overflow-x-auto">
        <Table>
          <TableCaption>
            Detailed comparison of top online casinos in the Philippines
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead className="w-[200px]">Casino</TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("rating")}
              >
                Rating
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("welcomeBonus")}
              >
                Welcome Bonus
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("gameSelection")}
              >
                Game Selection
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("paymentMethods")}
              >
                Payment Methods
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("payoutSpeed")}
              >
                Payout Speed
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleSort("minDeposit")}
              >
                Min Deposit
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead>Visit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCasinos.map((casino, index) => (
              <TableRow
                key={casino.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={casino.logo}
                      alt={`${casino.name} logo`}
                      className="h-10 w-10 rounded-full object-contain bg-white p-1"
                    />
                    <span className="font-medium">{casino.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < casino.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2">{casino.rating.toFixed(1)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {casino.welcomeBonus}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="text-sm">
                      Slots: {casino.gameSelection.slots}+
                    </div>
                    <div className="text-sm">
                      Table Games: {casino.gameSelection.tableGames}+
                    </div>
                    <div className="text-sm">
                      Live Dealer: {casino.gameSelection.liveDealer}+
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {casino.paymentMethods.slice(0, 3).map((method, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                    {casino.paymentMethods.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{casino.paymentMethods.length - 3} more
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={getPayoutSpeedClass(casino.payoutSpeed)}>
                    {casino.payoutSpeed}
                  </span>
                </TableCell>
                <TableCell>₱{casino.minDeposit}</TableCell>
                <TableCell>
                  <Button
                    asChild
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={casino.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        // Track affiliate click
                        console.log(
                          `Clicked on ${casino.name} affiliate link from table`,
                        );
                      }}
                    >
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// Helper function to convert payout speed to hours for sorting
const convertPayoutToHours = (payoutSpeed: string): number => {
  if (payoutSpeed.includes("instant")) return 0;
  if (payoutSpeed.includes("hour")) {
    const hours = parseInt(payoutSpeed.replace(/[^0-9]/g, ""));
    return hours || 1;
  }
  if (payoutSpeed.includes("day")) {
    const days = parseInt(payoutSpeed.replace(/[^0-9]/g, ""));
    return (days || 1) * 24;
  }
  return 48; // Default fallback
};

// Helper function to get color class based on payout speed
const getPayoutSpeedClass = (payoutSpeed: string): string => {
  if (payoutSpeed.includes("instant") || payoutSpeed.includes("1 hour")) {
    return "text-green-600 font-medium";
  }
  if (payoutSpeed.includes("hour") || payoutSpeed.includes("same day")) {
    return "text-blue-600 font-medium";
  }
  return "text-orange-600 font-medium";
};

// Default casinos data for demonstration
const defaultCasinos: Casino[] = [
  {
    id: 1,
    name: "BK8",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BK8",
    rating: 4.9,
    welcomeBonus: "₱100,000 + 200 Free Spins",
    gameSelection: { slots: 1500, tableGames: 100, liveDealer: 150 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya", "Bitcoin"],
    payoutSpeed: "Instant",
    minDeposit: 500,
    affiliateLink: "https://www.bk8.com",
  },
  {
    id: 2,
    name: "22BET",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=22BET",
    rating: 4.8,
    welcomeBonus: "₱50,000 + 200 Free Spins",
    gameSelection: { slots: 1300, tableGames: 90, liveDealer: 120 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "Skrill", "Bitcoin"],
    payoutSpeed: "1-2 hours",
    minDeposit: 300,
    affiliateLink: "https://www.22bet.com",
  },
  {
    id: 3,
    name: "MegaPari",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MegaPari",
    rating: 4.7,
    welcomeBonus: "₱75,000 Sports Bonus",
    gameSelection: { slots: 1200, tableGames: 85, liveDealer: 110 },
    paymentMethods: [
      "Visa",
      "Mastercard",
      "GCash",
      "PayMaya",
      "Bitcoin",
      "Ethereum",
    ],
    payoutSpeed: "Same day",
    minDeposit: 400,
    affiliateLink: "https://www.megapari.com",
  },
  {
    id: 4,
    name: "GG.BET",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GGBET",
    rating: 4.6,
    welcomeBonus: "₱16,000 Welcome Bonus",
    gameSelection: { slots: 1000, tableGames: 80, liveDealer: 100 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "Bitcoin"],
    payoutSpeed: "3-4 hours",
    minDeposit: 250,
    affiliateLink: "https://www.gg.bet",
  },
  {
    id: 5,
    name: "MD88",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MD88",
    rating: 4.5,
    welcomeBonus: "₱35,000 Welcome Bonus",
    gameSelection: { slots: 950, tableGames: 75, liveDealer: 90 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya", "Bitcoin"],
    payoutSpeed: "1 day",
    minDeposit: 300,
    affiliateLink: "https://www.md88.com",
  },
  {
    id: 6,
    name: "Plae8",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Plae8",
    rating: 4.4,
    welcomeBonus: "₱25,000 Welcome Package",
    gameSelection: { slots: 900, tableGames: 70, liveDealer: 80 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya"],
    payoutSpeed: "6 hours",
    minDeposit: 200,
    affiliateLink: "https://www.plae8.com",
  },
  {
    id: 7,
    name: "IB8",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=IB8",
    rating: 4.3,
    welcomeBonus: "₱20,000 + 150 Free Spins",
    gameSelection: { slots: 850, tableGames: 65, liveDealer: 75 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "Bitcoin"],
    payoutSpeed: "12 hours",
    minDeposit: 250,
    affiliateLink: "https://www.ib8.com",
  },
  {
    id: 8,
    name: "WSM",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=WSM",
    rating: 4.2,
    welcomeBonus: "₱15,000 Welcome Bonus",
    gameSelection: { slots: 800, tableGames: 60, liveDealer: 70 },
    paymentMethods: ["Visa", "Mastercard", "GCash"],
    payoutSpeed: "1-2 days",
    minDeposit: 200,
    affiliateLink: "https://www.wsm.com",
  },
  {
    id: 9,
    name: "BC.Game",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BCGame",
    rating: 4.1,
    welcomeBonus: "180% Deposit Bonus",
    gameSelection: { slots: 750, tableGames: 55, liveDealer: 65 },
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "Tether"],
    payoutSpeed: "Instant",
    minDeposit: 100,
    affiliateLink: "https://www.bc.game",
  },
  {
    id: 10,
    name: "1XBet",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=1XBet",
    rating: 4.0,
    welcomeBonus: "₱30,000 Sports Welcome Bonus",
    gameSelection: { slots: 700, tableGames: 50, liveDealer: 60 },
    paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya", "Bitcoin"],
    payoutSpeed: "1 day",
    minDeposit: 150,
    affiliateLink: "https://www.1xbet.com",
  },
];

export default CasinoComparisonTable;

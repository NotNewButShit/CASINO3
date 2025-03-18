import React, { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search, Filter, X } from "lucide-react";

interface FilterSystemProps {
  onFilterChange?: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  gameTypes: string[];
  minDeposit: number;
  paymentMethods: string[];
  searchQuery: string;
}

const FilterSystem = ({
  onFilterChange = () => {},
  className = "",
}: FilterSystemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    gameTypes: [],
    minDeposit: 10,
    paymentMethods: [],
    searchQuery: "",
  });

  const gameTypeOptions = [
    "Slots",
    "Table Games",
    "Live Dealer",
    "Poker",
    "Sports Betting",
  ];

  const paymentMethodOptions = [
    "Credit Card",
    "E-Wallet",
    "Bank Transfer",
    "Cryptocurrency",
    "GCash",
    "PayMaya",
  ];

  const handleGameTypeChange = (type: string) => {
    const updatedGameTypes = filters.gameTypes.includes(type)
      ? filters.gameTypes.filter((t) => t !== type)
      : [...filters.gameTypes, type];

    const updatedFilters = {
      ...filters,
      gameTypes: updatedGameTypes,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePaymentMethodChange = (method: string) => {
    const updatedPaymentMethods = filters.paymentMethods.includes(method)
      ? filters.paymentMethods.filter((m) => m !== method)
      : [...filters.paymentMethods, method];

    const updatedFilters = {
      ...filters,
      paymentMethods: updatedPaymentMethods,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleMinDepositChange = (value: number[]) => {
    const updatedFilters = {
      ...filters,
      minDeposit: value[0],
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFilters = {
      ...filters,
      searchQuery: e.target.value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      gameTypes: [],
      minDeposit: 10,
      paymentMethods: [],
      searchQuery: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div
      className={`w-full bg-background p-4 rounded-lg shadow-sm ${className}`}
    >
      <div className="flex flex-col space-y-4">
        {/* Search and Filter Toggle Row */}
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search casinos..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1"
            >
              <Filter className="h-4 w-4" />
              {isExpanded ? "Hide Filters" : "Show Filters"}
            </Button>
            {(filters.gameTypes.length > 0 ||
              filters.paymentMethods.length > 0 ||
              filters.minDeposit !== 10 ||
              filters.searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Expanded Filter Options */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-2 border-t">
            {/* Game Types */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Game Types</h3>
              <div className="flex flex-wrap gap-2">
                {gameTypeOptions.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`game-${type}`}
                      checked={filters.gameTypes.includes(type)}
                      onCheckedChange={() => handleGameTypeChange(type)}
                    />
                    <label
                      htmlFor={`game-${type}`}
                      className="text-sm cursor-pointer"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Deposit */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Minimum Deposit (₱)</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[filters.minDeposit]}
                  max={1000}
                  min={0}
                  step={10}
                  onValueChange={handleMinDepositChange}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs">₱0</span>
                  <span className="text-xs font-medium">
                    ₱{filters.minDeposit}
                  </span>
                  <span className="text-xs">₱1000</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                {paymentMethodOptions.map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      id={`payment-${method}`}
                      checked={filters.paymentMethods.includes(method)}
                      onCheckedChange={() => handlePaymentMethodChange(method)}
                    />
                    <label
                      htmlFor={`payment-${method}`}
                      className="text-sm cursor-pointer"
                    >
                      {method}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(filters.gameTypes.length > 0 ||
          filters.paymentMethods.length > 0 ||
          filters.minDeposit !== 10) && (
          <div className="flex flex-wrap gap-2 pt-2 border-t">
            {filters.gameTypes.map((type) => (
              <div
                key={`active-${type}`}
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center"
              >
                {type}
                <X
                  className="h-3 w-3 ml-1 cursor-pointer"
                  onClick={() => handleGameTypeChange(type)}
                />
              </div>
            ))}
            {filters.minDeposit !== 10 && (
              <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                Min ₱{filters.minDeposit}
                <X
                  className="h-3 w-3 ml-1 cursor-pointer"
                  onClick={() => handleMinDepositChange([10])}
                />
              </div>
            )}
            {filters.paymentMethods.map((method) => (
              <div
                key={`active-${method}`}
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center"
              >
                {method}
                <X
                  className="h-3 w-3 ml-1 cursor-pointer"
                  onClick={() => handlePaymentMethodChange(method)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSystem;

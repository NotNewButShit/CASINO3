import React, { useState } from "react";
import Header from "./Header";
import FeaturedCasinos from "./FeaturedCasinos";
import FilterSystem from "./FilterSystem";
import CasinoComparisonTable from "./CasinoComparisonTable";
import CasinoCard from "./CasinoCard";
import Footer from "./Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    gameTypes: [],
    minDeposit: 10,
    paymentMethods: [],
    searchQuery: "",
  });

  // Sample top casino data for the featured section
  const topCasinos = [
    {
      id: "1",
      name: "BK8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BK8",
      rating: 4.9,
      bonusOffer: "₱100,000 Welcome Bonus + 200 Free Spins",
      affiliateLink: "#",
      featured: true,
      description:
        "BK8 is known for a broad range of games and promotional offers, with fast withdrawals and excellent customer support.",
    },
    {
      id: "2",
      name: "22BET",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=22BET",
      rating: 4.8,
      bonusOffer: "100% up to ₱50,000 + 200 Free Spins",
      affiliateLink: "#",
      featured: true,
      description:
        "22BET is popular for its comprehensive sports betting and casino game selection with competitive odds and numerous payment options.",
    },
    {
      id: "3",
      name: "MegaPari",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MegaPari",
      rating: 4.7,
      bonusOffer: "Sports Bonus up to ₱75,000",
      affiliateLink: "#",
      featured: true,
      description:
        "MegaPari offers a diverse selection of casino games and betting options with attractive promotions and a user-friendly mobile experience.",
    },
    {
      id: "4",
      name: "GG.BET",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GGBET",
      rating: 4.6,
      bonusOffer: "160% up to ₱16,000 Welcome Bonus",
      affiliateLink: "#",
      featured: true,
      description:
        "GG.BET provides a platform for both sports betting and casino entertainment with localized services and quick payouts.",
    },
    {
      id: "5",
      name: "MD88",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MD88",
      rating: 4.5,
      bonusOffer: "₱35,000 Sports Welcome Bonus",
      affiliateLink: "#",
      featured: true,
      description:
        "MD88 has been raising its profile in the Asian online casino market with a growing selection of games and promotions.",
    },
    {
      id: "6",
      name: "Plae8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Plae8",
      rating: 4.4,
      bonusOffer: "₱25,000 Welcome Package",
      affiliateLink: "#",
      featured: true,
      description:
        "Plae8 provides a classic online casino experience with a wide variety of slots and table games.",
    },
    {
      id: "7",
      name: "IB8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=IB8",
      rating: 4.3,
      bonusOffer: "₱20,000 + 150 Free Spins",
      affiliateLink: "#",
      featured: true,
      description:
        "IB8 is an online casino that provides many online gaming options with competitive bonuses and promotions.",
    },
    {
      id: "8",
      name: "WSM",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=WSM",
      rating: 4.2,
      bonusOffer: "₱15,000 Welcome Bonus",
      affiliateLink: "#",
      featured: true,
      description:
        "WSM provides access to slot games and table games with a user-friendly interface and reliable customer support.",
    },
    {
      id: "9",
      name: "BC.Game",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BCGame",
      rating: 4.1,
      bonusOffer: "Up to 180% Deposit Bonus",
      affiliateLink: "#",
      featured: true,
      description:
        "BC.Game is a cryptocurrency-focused online casino offering innovative games and instant withdrawals.",
    },
    {
      id: "10",
      name: "1XBet",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=1XBet",
      rating: 4.0,
      bonusOffer: "₱30,000 Sports Welcome Bonus",
      affiliateLink: "#",
      featured: true,
      description:
        "1XBet provides a large selection of online betting options including sports, casino games, and live dealer tables.",
    },
  ];

  const handleDarkModeToggle = (isDark: boolean) => {
    setDarkMode(isDark);
    // Apply dark mode to document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // In a real app, this would filter the casino data
    console.log("Filters updated:", newFilters);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <Header darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top 10 Online Casinos in the Philippines
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Find the best online casinos with exclusive bonuses, secure
              payment methods, and fast payouts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
                View Top Casinos
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-colors">
                Compare Bonuses
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Featured Casinos Section */}
          <FeaturedCasinos casinos={topCasinos} />

          {/* Filter System */}
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">
              Find Your Perfect Casino
            </h2>
            <FilterSystem onFilterChange={handleFilterChange} />
          </section>

          {/* Top Casinos Grid */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6">
              Top 10 Philippines Online Casinos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCasinos.map((casino) => (
                <CasinoCard
                  key={casino.id}
                  name={casino.name}
                  logo={casino.logo}
                  rating={casino.rating}
                  bonusOffer={casino.bonusOffer}
                  description={casino.description}
                  affiliateLink={casino.affiliateLink}
                />
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6">Compare Online Casinos</h2>
            <CasinoComparisonTable />
          </section>

          {/* Why Choose Us Section */}
          <section className="my-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Choose Our Casino Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600 dark:text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Reviews</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team thoroughly tests each casino to provide honest,
                  detailed reviews you can trust.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600 dark:text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Bonuses</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get access to special bonuses and promotions negotiated
                  exclusively for our users.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600 dark:text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We only recommend licensed casinos with proven security
                  measures and fair gaming practices.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="my-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-medium mb-2">
                  Are online casinos legal in the Philippines?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, online casinos operating with proper licenses are legal
                  for Filipino players. Most online casinos serving the
                  Philippines are licensed by international regulatory bodies.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-medium mb-2">
                  What payment methods can I use?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Filipino players can use various payment methods including
                  credit/debit cards, e-wallets like GCash and PayMaya, bank
                  transfers, and cryptocurrencies depending on the casino.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-medium mb-2">
                  How do I know if an online casino is safe?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Look for proper licensing information, SSL encryption, fair
                  gaming certifications, and positive reviews. All casinos
                  recommended on our site undergo strict safety verification.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-medium mb-2">
                  Can I play in Philippine Pesos (PHP)?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Many online casinos now offer PHP as a currency option,
                  allowing Filipino players to avoid currency conversion fees
                  and play in their local currency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  How do casino bonuses work?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Casino bonuses typically come with wagering requirements that
                  specify how many times you need to bet the bonus amount before
                  withdrawing. Always read the terms and conditions carefully.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;

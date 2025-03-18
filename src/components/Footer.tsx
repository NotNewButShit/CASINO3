import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Philippines Casino Guide</h3>
            <p className="text-slate-300 text-sm">
              Your trusted source for finding the best online casinos in the
              Philippines. We provide detailed reviews, comparisons, and guides
              to help you make informed decisions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Casino Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Bonuses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Payment Methods
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Affiliate Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Twitter size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Youtube size={20} />
              </Button>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">
                Subscribe to our newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 text-white px-3 py-2 rounded-l-md focus:outline-none w-full"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Philippines Casino Guide. All
            rights reserved.
          </p>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1559581958-df379578606a?w=100&q=80"
              alt="18+ Gambling"
              className="h-8 mr-4"
            />
            <img
              src="https://images.unsplash.com/photo-1608365151231-7dbed3034787?w=100&q=80"
              alt="Responsible Gaming"
              className="h-8 mr-4"
            />
            <img
              src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=100&q=80"
              alt="Secure Payments"
              className="h-8"
            />
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          <p>
            Gambling involves risk. Please gamble responsibly. Philippines
            Casino Guide supports responsible gambling awareness.
          </p>
          <p className="mt-2">
            This website contains affiliate links. We may receive a commission
            for purchases made through these links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

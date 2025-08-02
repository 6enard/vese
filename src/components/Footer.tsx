import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img
                  src="/logo2.png"
                  alt="VESE Foundation Logo"
                  className="h-10 w-auto object-contain rounded-lg shadow-lg border border-white/20 bg-white/95"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-playfair">VESE</span>
                <div className="text-xs text-sage font-lato">Foundation</div>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed font-lato">
              Passionate students from universities across Kenya, united in our mission 
              to transform lives through compassion and generosity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-sage p-2 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-sage p-2 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-sage p-2 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-sage p-2 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-sage p-2 rounded-full transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">About Us</a></li>
              <li><a href="#programs" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Our Programs</a></li>
              <li><a href="#impact" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Our Impact</a></li>
              <li><a href="#team" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Our Team</a></li>
              <li><a href="#merch" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Merchandise</a></li>
              <li><a href="#news" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Latest News</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-playfair">Our Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Orphanage Visits</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Educational Materials</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Essential Donations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">School Improvement</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Women Empowerment</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Community Outreach</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-playfair">Get Involved</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Volunteer</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Make a Donation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Partner With Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Sponsor an Event</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Join Our Newsletter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-lato">Follow Our Journey</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-lato">
              © 2024 VESE Foundation. All rights reserved. Made with ❤️ by passionate students.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200 font-lato">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200 font-lato">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200 font-lato">
                Transparency Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
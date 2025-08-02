import React from 'react';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-light via-cream/30 to-sage/10">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/5 to-sage/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-sage/10 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 text-sage mr-2" />
              <span className="text-sage font-lato font-medium text-sm">Founded in 2023</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight font-playfair">
              Transforming Lives with
              <span className="block text-sage">Compassion & Generosity</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-lato">
              We are passionate students from universities across Kenya, united under VESE Foundation 
              to bring joy and support to the less fortunate in our society.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-sage hover:bg-sage/90 text-white px-8 py-4 rounded-full font-lato font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                <span>Join Our Mission</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="bg-cream hover:bg-cream/80 text-charcoal px-8 py-4 rounded-full font-lato font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Users className="h-8 w-8 text-sage mb-4" />
                  <h3 className="font-playfair font-semibold text-charcoal mb-2">Community Support</h3>
                  <p className="text-charcoal/70 text-sm font-lato">Visiting orphanages and supporting street children</p>
                </div>
                
                <div className="bg-sage text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform translate-y-4">
                  <BookOpen className="h-8 w-8 mb-4" />
                  <h3 className="font-playfair font-semibold mb-2">Education Access</h3>
                  <p className="text-white/90 text-sm font-lato">Providing educational materials to underprivileged students</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-8">
                <div className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Heart className="h-8 w-8 text-sage mb-4" />
                  <h3 className="font-playfair font-semibold text-charcoal mb-2">Women Empowerment</h3>
                  <p className="text-charcoal/70 text-sm font-lato">Supporting small-scale farming initiatives</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl font-bold text-sage mb-2 font-playfair">2023</div>
                  <p className="text-charcoal/70 text-sm font-lato">Year we started making a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
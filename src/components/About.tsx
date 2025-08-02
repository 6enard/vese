import React from 'react';
import { Heart, Target, Users, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-sage/5 p-8 lg:p-12 rounded-3xl">
            <div className="flex items-center mb-6">
              <img
                src="/logo2.png"
                alt="VESE Foundation"
                className="h-10 w-auto object-contain mr-4 rounded-lg shadow-md border border-sage/20 bg-white"
              />
              <h2 className="text-3xl font-bold text-charcoal font-playfair">Our Mission</h2>
            </div>
            <p className="text-lg text-charcoal/80 leading-relaxed font-lato">
              Transforming lives with compassion and generosity. We are dedicated to bringing 
              joy and support to the less fortunate in society through education, community 
              support, and sustainable empowerment initiatives.
            </p>
          </div>
          
          <div className="bg-cream/30 p-8 lg:p-12 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="bg-charcoal p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-charcoal font-playfair">Our Vision</h2>
            </div>
            <p className="text-lg text-charcoal/80 leading-relaxed font-lato mb-4">
              We are VESE. We believe that in emptying a purse, hearts are filled. 
              We aspire to change lives and bring a difference in this world that is full of unevenness.
            </p>
            <blockquote className="text-sage font-medium italic font-lato">
              "Whoever brings blessings will be enriched, and one who waters will himself be watered." 
              - Proverbs 11:25
            </blockquote>
          </div>
        </div>

        {/* Our Story */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-charcoal/80 leading-relaxed font-lato mb-6">
              We are a group of passionate students from various universities across Kenya, 
              united under the VESE Foundation, a charitable organization dedicated to bringing 
              joy and support to the less fortunate in society.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-lato mb-6">
              Our mission includes visiting orphanages and street children's homes, providing 
              educational materials to underprivileged students, donating clothes and essential 
              items, and improving conditions in public schools to help more students join campuses.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-lato">
              With guidance from mentors and support from family, we have grown from a simple 
              idea to a thriving organization. Join us in our mission to create a brighter future for all.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-sage/10 group-hover:bg-sage group-hover:text-white p-6 rounded-2xl mb-4 transition-all duration-300 transform group-hover:scale-105">
              <Users className="h-8 w-8 text-sage group-hover:text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">Community First</h3>
            <p className="text-charcoal/70 font-lato">Building stronger communities through collective action and support</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-sage/10 group-hover:bg-sage group-hover:text-white p-6 rounded-2xl mb-4 transition-all duration-300 transform group-hover:scale-105">
              <BookOpen className="h-8 w-8 text-sage group-hover:text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">Education Access</h3>
            <p className="text-charcoal/70 font-lato">Ensuring every child has the opportunity to learn and grow</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-sage/10 group-hover:bg-sage group-hover:text-white p-6 rounded-2xl mb-4 transition-all duration-300 transform group-hover:scale-105">
              <Heart className="h-8 w-8 text-sage group-hover:text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">Compassion</h3>
            <p className="text-charcoal/70 font-lato">Leading with empathy and understanding in all our actions</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-sage/10 group-hover:bg-sage group-hover:text-white p-6 rounded-2xl mb-4 transition-all duration-300 transform group-hover:scale-105">
              <Target className="h-8 w-8 text-sage group-hover:text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">Sustainability</h3>
            <p className="text-charcoal/70 font-lato">Creating lasting change that continues to benefit communities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
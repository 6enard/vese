import React from 'react';
import { Quote, Users, BookOpen, Heart, Home } from 'lucide-react';

export default function Impact() {
  const testimonials = [
    {
      name: 'Grace Wanjiku',
      role: 'Beneficiary Student',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'VESE Foundation provided me with school supplies when my family couldn\'t afford them. Now I\'m excelling in my studies and have hope for my future.'
    },
    {
      name: 'Mary Akinyi',
      role: 'Women\'s Group Leader',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Through their farming support program, I\'ve been able to start my own small business and provide for my children\'s education.'
    },
    {
      name: 'Peter Kamau',
      role: 'School Principal',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'VESE Foundation has transformed our school. The learning materials and infrastructure support have improved our students\' performance significantly.'
    }
  ];

  const metrics = [
    { icon: Users, value: '1,500+', label: 'Lives Impacted' },
    { icon: BookOpen, value: '500+', label: 'Students Supported' },
    { icon: Home, value: '25+', label: 'Institutions Visited' },
    { icon: Heart, value: '50+', label: 'Community Events' }
  ];

  return (
    <section id="impact" className="py-20 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Our Impact</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-lato leading-relaxed">
            Since 2023, we've been making a tangible difference in communities across Kenya. 
            Here are the stories and numbers that showcase our collective impact.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-playfair">
                  {metric.value}
                </div>
                <div className="text-white/80 font-lato font-medium">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Quote className="h-8 w-8 text-cream mb-6" />
              <p className="text-white mb-6 leading-relaxed italic font-lato text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold text-white font-playfair">{testimonial.name}</div>
                  <div className="text-white/80 text-sm font-lato">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4 font-playfair">Be Part of Our Story</h3>
            <p className="text-xl text-white/90 mb-8 font-lato max-w-2xl mx-auto">
              Every contribution, no matter how small, creates ripples of positive change in our communities.
            </p>
            <button className="bg-cream text-charcoal px-8 py-4 rounded-full font-lato font-semibold hover:bg-white transition-colors duration-200 transform hover:scale-105">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
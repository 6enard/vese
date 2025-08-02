import React from 'react';
import { BookOpen, Users, Heart, Home, Shirt, GraduationCap } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Home,
      title: 'Orphanage Visits',
      description: 'Regular visits to orphanages and street children\'s homes, providing emotional support, recreational activities, and essential care.',
      image: 'https://images.pexels.com/photos/8617708/pexels-photo-8617708.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '15+ homes visited'
    },
    {
      icon: BookOpen,
      title: 'Educational Materials',
      description: 'Providing books, stationery, uniforms, and learning resources to underprivileged students across Kenya.',
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '500+ students supported'
    },
    {
      icon: Shirt,
      title: 'Essential Donations',
      description: 'Collecting and distributing clothes, food, and essential items to families and individuals in need.',
      image: 'https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '1000+ items donated'
    },
    {
      icon: GraduationCap,
      title: 'School Improvement',
      description: 'Improving conditions in public schools through infrastructure support, learning materials, and facility upgrades.',
      image: 'https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '10+ schools improved'
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Supporting women through small-scale farming initiatives, skills training, and microfinance opportunities.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '200+ women empowered'
    },
    {
      icon: Heart,
      title: 'Community Outreach',
      description: 'Organizing community events, health camps, and awareness programs to strengthen social bonds.',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: '50+ events organized'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">Our Programs</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-lato leading-relaxed">
            Through targeted programs, we address the most pressing needs in our communities, 
            creating sustainable change that empowers individuals and strengthens society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className="h-5 w-5 text-sage" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-playfair">{program.title}</h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed font-lato">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-sage bg-sage/10 px-4 py-2 rounded-full font-lato">
                      {program.impact}
                    </span>
                    <button className="text-sage font-semibold hover:text-sage/80 transition-colors duration-200 font-lato">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-sage rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-playfair">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 opacity-90 font-lato max-w-2xl mx-auto">
              Join us in our mission to transform lives and create lasting change in communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sage px-8 py-4 rounded-full font-lato font-semibold hover:bg-cream transition-colors duration-200 transform hover:scale-105">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-lato font-semibold hover:bg-white hover:text-sage transition-all duration-200 transform hover:scale-105">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
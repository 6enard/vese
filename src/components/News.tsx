import React from 'react';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: 'Successful School Supply Drive in Kibera',
      excerpt: 'Our recent initiative provided educational materials to over 200 students in Kibera slums, helping them continue their studies.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/8617708/pexels-photo-8617708.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education'
    },
    {
      title: 'Women\'s Farming Cooperative Launch',
      excerpt: 'Launched a new farming cooperative supporting 50 women in rural Kenya with seeds, tools, and training.',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Empowerment'
    },
    {
      title: 'Partnership with Local Universities',
      excerpt: 'Expanded our reach by partnering with three additional universities to increase student volunteer participation.',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/8349335/pexels-photo-8349335.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Partnership'
    }
  ];

  const events = [
    {
      title: 'Community Health Camp',
      date: '2024-03-15',
      location: 'Mathare, Nairobi',
      type: 'Health'
    },
    {
      title: 'Educational Materials Drive',
      date: '2024-04-22',
      location: 'Multiple Locations',
      type: 'Education'
    },
    {
      title: 'Volunteer Training Workshop',
      date: '2024-05-10',
      location: 'University of Nairobi',
      type: 'Training'
    }
  ];

  return (
    <section id="news" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">Latest Updates</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-lato leading-relaxed">
            Stay informed about our recent activities, upcoming events, and the impact 
            we're making in communities across Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-charcoal mb-8 font-playfair">Recent News</h3>
            <div className="space-y-8">
              {news.map((article, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full font-lato">
                          {article.category}
                        </span>
                        <div className="flex items-center ml-4 text-charcoal/60 text-sm font-lato">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-charcoal mb-3 font-playfair">{article.title}</h4>
                      <p className="text-charcoal/70 mb-4 leading-relaxed font-lato">{article.excerpt}</p>
                      <button className="text-sage font-semibold hover:text-sage/80 transition-colors duration-200 flex items-center font-lato">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 font-playfair">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-cream text-charcoal text-xs font-semibold px-3 py-1 rounded-full font-lato">
                      {event.type}
                    </span>
                    <div className="text-right text-sm text-charcoal/60 font-lato">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h4 className="font-bold text-charcoal mb-3 font-playfair">{event.title}</h4>
                  <div className="flex items-center text-charcoal/70 text-sm mb-4 font-lato">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                  <button className="text-sage font-semibold hover:text-sage/80 transition-colors duration-200 text-sm font-lato">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 bg-sage rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-3 font-playfair">Stay Updated</h4>
              <p className="text-sm mb-4 text-white/90 font-lato">Get the latest news and updates delivered to your inbox.</p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg text-charcoal font-lato focus:outline-none focus:ring-2 focus:ring-cream"
                />
                <button className="bg-cream text-charcoal px-4 py-2 rounded-lg font-lato font-semibold hover:bg-white transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
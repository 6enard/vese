import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">Get In Touch</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-lato leading-relaxed">
            Ready to join our mission? Whether you want to volunteer, partner with us, 
            or learn more about our work, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-light rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <Send className="h-6 w-6 text-sage mr-3" />
              <h3 className="text-2xl font-bold text-charcoal font-playfair">Send us a message</h3>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2 font-lato">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-cream rounded-2xl focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200 font-lato"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2 font-lato">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-cream rounded-2xl focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200 font-lato"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2 font-lato">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-cream rounded-2xl focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200 font-lato"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2 font-lato">
                  I'm interested in
                </label>
                <select className="w-full px-4 py-3 border border-cream rounded-2xl focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200 font-lato">
                  <option>Volunteering</option>
                  <option>Partnership Opportunities</option>
                  <option>Making a Donation</option>
                  <option>General Inquiry</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2 font-lato">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-cream rounded-2xl focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200 font-lato"
                  placeholder="Tell us how you'd like to get involved..."
                ></textarea>
              </div>
              
              <button className="w-full bg-sage hover:bg-sage/90 text-white py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 font-lato">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 font-playfair">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-sage/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 font-playfair">Location</h4>
                  <p className="text-charcoal/70 font-lato">
                    University of Nairobi<br />
                    Nairobi, Kenya<br />
                    East Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 font-playfair">Phone</h4>
                  <p className="text-charcoal/70 font-lato">+254 700 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 font-playfair">Email</h4>
                  <p className="text-charcoal/70 font-lato">info@vesefoundation.org</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 font-playfair">Availability</h4>
                  <p className="text-charcoal/70 font-lato">
                    Monday - Friday: 2:00 PM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-sage to-sage/80 rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-3 font-playfair">Ready to Make an Impact?</h4>
              <p className="mb-6 text-white/90 font-lato">
                Join our community of student changemakers and help us transform lives 
                across Kenya through education and empowerment.
              </p>
              <button className="bg-white text-sage px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors duration-200 transform hover:scale-105 font-lato">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
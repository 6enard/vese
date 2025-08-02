import React from 'react';
import { Linkedin, Twitter, Mail, Users } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Sarah Wanjiru',
      role: 'Founder & President',
      image: 'https://images.pexels.com/photos/3785100/pexels-photo-3785100.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Computer Science student at University of Nairobi, passionate about using technology for social good.',
      university: 'University of Nairobi',
      social: { linkedin: '#', twitter: '#', email: 'sarah@vesefoundation.org' }
    },
    {
      name: 'David Kipchoge',
      role: 'Programs Director',
      image: 'https://images.pexels.com/photos/3785097/pexels-photo-3785097.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Business Administration student at Strathmore University, coordinating our community outreach programs.',
      university: 'Strathmore University',
      social: { linkedin: '#', twitter: '#', email: 'david@vesefoundation.org' }
    },
    {
      name: 'Faith Achieng',
      role: 'Education Coordinator',
      image: 'https://images.pexels.com/photos/3785095/pexels-photo-3785095.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Education student at Kenyatta University, leading our educational support initiatives.',
      university: 'Kenyatta University',
      social: { linkedin: '#', twitter: '#', email: 'faith@vesefoundation.org' }
    },
    {
      name: 'Michael Ochieng',
      role: 'Community Relations',
      image: 'https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Social Work student at University of Nairobi, building relationships with partner organizations.',
      university: 'University of Nairobi',
      social: { linkedin: '#', twitter: '#', email: 'michael@vesefoundation.org' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sage/10 px-4 py-2 rounded-full mb-6">
            <img
              src="/logo2.png"
              alt="VESE Foundation"
              className="h-5 w-auto object-contain mr-2 rounded border border-sage/20"
            />
            <span className="text-sage font-lato font-medium text-sm">Student-Led Organization</span>
          </div>
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">Meet Our Team</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-lato leading-relaxed">
            We are passionate students from various universities across Kenya, united by our 
            commitment to creating positive change in our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.social.linkedin} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Linkedin className="h-4 w-4 text-sage" />
                    </a>
                    <a href={member.social.twitter} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Twitter className="h-4 w-4 text-sage" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Mail className="h-4 w-4 text-sage" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 font-playfair">{member.name}</h3>
              <p className="text-sage font-semibold mb-2 font-lato">{member.role}</p>
              <p className="text-charcoal/60 text-sm mb-3 font-lato">{member.university}</p>
              <p className="text-charcoal/70 text-sm leading-relaxed font-lato">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join Our Team */}
        <div className="bg-light rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-charcoal mb-4 font-playfair">Join Our Team</h3>
          <p className="text-xl text-charcoal/80 mb-8 font-lato max-w-2xl mx-auto">
            Are you a student passionate about making a difference? We're always looking for 
            dedicated individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sage text-white px-8 py-4 rounded-full font-lato font-semibold hover:bg-sage/90 transition-colors duration-200 transform hover:scale-105">
              Become a Volunteer
            </button>
            <button className="border-2 border-sage text-sage px-8 py-4 rounded-full font-lato font-semibold hover:bg-sage hover:text-white transition-all duration-200 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
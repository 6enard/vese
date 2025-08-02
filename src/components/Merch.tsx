import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Phone, Palette, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Merch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const colors = [
    { name: 'Pink', color: 'bg-pink-400' },
    { name: 'Black', color: 'bg-black' },
    { name: 'Grey', color: 'bg-gray-400' },
    { name: 'White', color: 'bg-white border-2 border-gray-300' },
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Green', color: 'bg-green-500' }
  ];

  const capImages = [
    { color: 'Pink', bgColor: 'bg-pink-400' },
    { color: 'Black', bgColor: 'bg-black' },
    { color: 'Grey', bgColor: 'bg-gray-400' },
    { color: 'White', bgColor: 'bg-white border-2 border-gray-300' },
    { color: 'Blue', bgColor: 'bg-blue-500' },
    { color: 'Red', bgColor: 'bg-red-500' },
    { color: 'Orange', bgColor: 'bg-orange-500' },
    { color: 'Green', bgColor: 'bg-green-500' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % capImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + capImages.length) % capImages.length);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = '254794675446';
    const message = encodeURIComponent('Hi! I would like to place an order for VESE Foundation merchandise. Please help me with the ordering process.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="merch" className="py-20 bg-gradient-to-br from-light via-cream/30 to-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sage/10 px-4 py-2 rounded-full mb-6">
            <img
              src="/logo2.png"
              alt="VESE Foundation"
              className="h-5 w-auto object-contain mr-2 rounded border border-sage/20 shadow-sm bg-white/95"
            />
            <span className="text-sage font-lato font-medium text-sm">Inclusion & Diversity</span>
          </div>
          <h2 className="text-4xl font-bold text-charcoal mb-6 font-playfair">MERCH</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-charcoal/80 mb-6 font-lato leading-relaxed">
              Welcome to VESE Foundation Store! Support our mission by shopping our exclusive 
              merchandise and event tickets. Every purchase helps fund our cause, making a real 
              difference in the community.
            </p>
            <p className="text-lg text-charcoal/70 font-lato leading-relaxed">
              From stylish apparel to unique accessories, and tickets to our exciting events, 
              there's something for everyone. Join us in creating positive change, one purchase at a time.
            </p>
          </div>
        </div>

        {/* Caps Carousel */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Carousel */}
              <div className="bg-gradient-to-br from-sage/20 to-cream/30 p-8 lg:p-12 flex items-center justify-center relative">
                <div className="relative w-full max-w-sm">
                  {/* Carousel Container */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {capImages.map((cap, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-8">
                          <div className="relative">
                            <div className={`w-48 h-48 mx-auto rounded-full shadow-2xl flex items-center justify-center ${cap.bgColor}`}>
                              <div className="text-center">
                                <img
                                  src="/logo2.png"
                                  alt="VESE Foundation Cap"
                                  className="h-12 w-auto object-contain mx-auto mb-3 rounded-lg shadow-md border border-gray-200/50 bg-white/95"
                                />
                                <div className="text-lg font-bold text-white font-playfair drop-shadow-lg">VESE</div>
                                <div className="text-xs text-white/90 font-lato drop-shadow">Foundation</div>
                              </div>
                            </div>
                            <div className="text-center mt-4">
                              <div className="text-lg font-bold text-charcoal font-playfair">{cap.color} Cap</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                  >
                    <ChevronLeft className="h-5 w-5 text-charcoal" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                  >
                    <ChevronRight className="h-5 w-5 text-charcoal" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {capImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentSlide ? 'bg-sage' : 'bg-sage/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute -top-4 -right-4 bg-sage text-white px-4 py-2 rounded-full font-bold text-lg font-lato shadow-lg">
                    699 KSh
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-charcoal mb-4 font-playfair">
                  VESE Foundation Caps
                </h3>
                <div className="text-2xl font-bold text-sage mb-6 font-playfair">
                  @ 699 KSh ONLY
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-charcoal mb-4 font-playfair flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-sage" />
                    Colours Available:
                  </h4>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-12 h-12 rounded-full mx-auto mb-2 shadow-md ${color.color}`}></div>
                        <span className="text-sm text-charcoal/70 font-lato">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-lato font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How to Order */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-6 w-6 text-sage mr-3" />
              <h3 className="text-2xl font-bold text-charcoal font-playfair">How To Order</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-lato">1</div>
                <p className="text-charcoal/80 font-lato">
                  Identify the item you want. Note the colour and sizing (where applicable).
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-lato">2</div>
                <p className="text-charcoal/80 font-lato">
                  Provide your Name, Item you want to purchase and the Quantity of the item.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-lato">3</div>
                <p className="text-charcoal/80 font-lato">
                  Contact <span className="font-semibold text-sage">0794675446</span> to make an order via WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sage rounded-3xl p-8 text-white">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-bold font-playfair">Payment & Support</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="font-lato">Payment will be made via the same number</span>
              </div>
              <p className="text-white/90 font-lato">
                If you have any inquiries or need any sort of clarification please don't hesitate to ask.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <img
                  src="/logo2.png"
                  alt="VESE Foundation"
                  className="h-6 w-auto object-contain mr-2 rounded shadow border border-white/30 bg-white/95"
                />
                <h4 className="font-bold font-playfair">Support Our Mission</h4>
              </div>
              <p className="text-white/90 text-sm font-lato">
                Every purchase directly supports our community programs and helps us continue 
                making a positive impact across Kenya.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-cream/50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-charcoal mb-4 font-playfair">
              Wear Your Support
            </h3>
            <p className="text-xl text-charcoal/80 mb-8 font-lato max-w-2xl mx-auto">
              Show your commitment to positive change while supporting our cause. 
              Every cap sold helps fund our community programs.
            </p>
            <button
              onClick={handleWhatsAppOrder}
              className="bg-sage hover:bg-sage/90 text-white px-8 py-4 rounded-full font-lato font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Shopping</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
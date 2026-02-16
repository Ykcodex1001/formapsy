import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Instagram, Facebook, Mail, Award, Users, BookOpen, 
  CheckCircle, Target, User, Users as UsersIcon, MessageCircle,
  Clock, Calendar, MapPin, GraduationCap, Brain, Heart, Sparkles
} from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        if (isInView) {
          el.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: Brain, text: "التعرف على كامل الصعوبات", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, text: "اتقان المقابلة مع الطفل والوالدين", color: "from-purple-500 to-pink-500" },
    { icon: Target, text: "سيرورة التشخيص", color: "from-orange-500 to-red-500" },
    { icon: GraduationCap, text: "استعمال اختبارات binet و nemi2", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, text: "البروتوكولات العلاجية", color: "from-indigo-500 to-purple-500" },
  ];

  const features = [
    { icon: Clock, text: "   عام كامل مع متابعة فورية"   },
    { icon: Calendar, text: "انطلاق المستوى الاول في 28 فيفري و 7 مارس " },
    { icon: MapPin, text: "حضوري وعن بعد" },
  ];

  // Unsplash images for course context
  const heroImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80";
  
  const backgroundPattern = "https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Header with Logo - Simplified */}
 <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-b from-black/30 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with image */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-lg transition-all opacity-0 group-hover:opacity-100" />
                <img 
                  src="/logo.png"
                  alt=" formapsy"
                  className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-[#001e3a] rounded-lg items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className={`font-cairo-bold text-lg hidden sm:block transition-colors duration-300 ${
                scrolled ? 'text-[#001e3a]' : 'text-white'
              }`}>
                FORMAPSY
              </span>
            </div>
            
            {/* Navigation and CTA */}
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 ml-8">
                <a href="#about" className={`font-cairo-medium text-sm transition-colors hover:opacity-80 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}>عن البرنامج</a>
                <a href="#about" className={`font-cairo-medium text-sm transition-colors hover:opacity-80 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}>المميزات</a>
                <a href="#pricing" className={`font-cairo-medium text-sm transition-colors hover:opacity-80 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}>الأسعار</a>
              </nav>
              
              <button 
                onClick={scrollToForm}
                className={`relative group overflow-hidden px-6 py-2.5 rounded-full font-cairo-semibold text-sm transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-[#001e3a] to-[#002b4e] text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white text-[#001e3a] hover:bg-gray-100'
                }`}
              >
                <span className="relative z-10">سجل الآن</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002b4e] to-[#001e3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean with image from Unsplash */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Children learning and studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#001e3a]/90 via-[#001e3a]/70 to-[#001e3a]/60" />
        </div>

        {/* Hero Content - Minimal */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            صعوبات التعلم
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-gray-200 animate-fade-in-up delay-200">
            من التشخيص إلى التكفل
          </p>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-300">
            نظرية وتطبيقية 100%  لمدة عام بمعدل مستوى في الشهر 
          </p>

          {/* Features - Icons only */}
          <div id="about" className="flex justify-center gap-6 mb-10 animate-fade-in-up delay-400">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-white text-[#001e3a] text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-500"
          >
            سجل الآن
          </button>
        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 px-4 bg-white relative">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-5">
          <img src={backgroundPattern} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header - Minimal */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e3a] mb-3">
              تفاصيل البرنامج
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#001e3a] to-[#002b4e] mx-auto rounded-full" />
          </div>

          {/* Countdown Timer */}
          <div className="mb-16 animate-on-scroll">
            <CountdownTimer />
          </div>

          {/* Benefits Grid - Icons only with minimal text */}
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group text-center animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${item.color} p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-full h-full" />
                </div>
                <p className="text-sm font-medium text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Price Cards - Simplified */}
          <div id="pricing" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Student Price */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -50%
              </div>
              <User className="w-12 h-12 text-[#001e3a] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#001e3a] mb-2">طالب</h3>
              <p className="text-2xl font-bold text-[#001e3a] mb-1">3000 DA</p>
              <p className="text-sm text-gray-600 mb-4">للمستوى الواحد</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#001e3a] text-white py-2 rounded-xl text-sm hover:bg-[#002b4e] transition-all"
              >
                سجل الآن
              </button>
            </div>

            {/* Professional Price */}
            <div className="bg-gradient-to-br from-gray-800 to-[#001e3a] p-6 rounded-2xl text-center relative overflow-hidden group hover:shadow-xl transition-all">
              <UsersIcon className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">مهني</h3>
              <p className="text-2xl font-bold text-white mb-1">6000 DA</p>
              <p className="text-sm text-gray-300 mb-4">للمستوى الواحد</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-white text-[#001e3a] py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all"
              >
                سجل الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {/* Section Header - Minimal */}
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e3a] mb-2">
              سجل الآن
            </h2>
            <p className="text-gray-600">
              املأ النموذج وسنقوم بالتواصل معك
            </p>
          </div>

          {/* Form Card - Clean */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-on-scroll">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <Footer scrollToForm={scrollToForm} />
    </div>
  );
}

export default App;
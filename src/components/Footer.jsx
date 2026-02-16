import React, { useState } from 'react';
import { 
  Instagram, Facebook, Mail, MessageCircle, Phone, MapPin, 
  ChevronUp, Clock, Award, Users, BookOpen, Send, Heart
} from 'lucide-react';

const Footer = ({ scrollToForm }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CRU3Pu9h7/", label: "فيسبوك", color: "hover:bg-[#1877f2]" },
    { icon: Instagram, href: "https://www.instagram.com/forma.psy/", label: "إنستغرام", color: "hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcaf45]" },
    { icon: MessageCircle, href: "https://wa.me/0775181540", label: "واتساب", color: "hover:bg-[#25D366]" },
    { icon: Mail, href: "mailto:formapsybus@gmail.com", label: "بريد إلكتروني", color: "hover:bg-[#EA4335]" },
  ];

  const quickLinks = [
    { label: "الرئيسية", href: "#", icon: ChevronUp },
    { label: "التسجيل", onClick: scrollToForm, icon: BookOpen },
    { label: "عن البرنامج", href: "#about", icon: Users },
  ];


  return (
    <footer className="relative bg-gradient-to-b from-[#001e3a] to-[#002b4e] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Logo and Description - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50" />
                <div >
                  <img 
                  src="/logo.png"
                  alt="صعوبات التعلم"
                  className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-l from-white to-gray-300 bg-clip-text text-transparent">
                  FORMAPSY
                </h3>
                <p className="text-gray-400 text-sm">مركز متخصص في التأهيل والتدريب</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              برنامج متكامل لصعوبات التعلم من التشخيص إلى التكفل. نخبة من المختصين مع أحدث المناهج العالمية.
            </p>

           
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-600 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all hover:translate-x-1"
                    >
                      <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <link.icon className="w-4 h-4" />
                      </span>
                      <span>{link.label}</span>
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all hover:translate-x-1"
                    >
                      <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <link.icon className="w-4 h-4" />
                      </span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              معلومات الاتصال
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-600 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">رقم الهاتف</p>
                  <p className="text-white font-medium">0775181540</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                  <p className="text-white font-medium">formapsybus@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <MapPin className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">العنوان</p>
                  <p className="text-white font-medium">سطيف </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              تابعنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-600 rounded-full" />
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:scale-105 transition-all duration-300 ${social.color} hover:bg-opacity-100`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>

        
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          {/* Separator with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-right order-2 md:order-1">
              © {new Date().getFullYear()} <span className="text-white font-semibold">FormaPsy</span>. جميع الحقوق محفوظة
            </p>
            
            <div className="flex gap-6 order-1 md:order-2">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                <span>الشروط والأحكام</span>
                <span className="w-0 group-hover:w-4 overflow-hidden transition-all">•</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                <span>سياسة الخصوصية</span>
                <span className="w-0 group-hover:w-4 overflow-hidden transition-all">•</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-xl group"
          aria-label="العودة للأعلى"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
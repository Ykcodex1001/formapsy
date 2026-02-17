import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import Toast from './Toast';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    type: "Student",
    city: "",
    sessions: "Presential",
  });
  
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setFocusedField(null);
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  };

  const validateField = (field, value) => {
    switch(field) {
      case 'email':
        return !value || /\S+@\S+\.\S+/.test(value) ? null : "البريد الإلكتروني غير صحيح";
      case 'phone':
        return !value || value.length >= 10 ? null : "رقم الهاتف يجب أن يكون 10 أرقام على الأقل";
      case 'nom':
        return !value || value.length >= 3 ? null : "الاسم يجب أن يكون 3 أحرف على الأقل";
      default:
        return null;
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nom.trim()) errors.nom = "الرجاء إدخال الاسم";
    else if (formData.nom.trim().length < 3) errors.nom = "الاسم قصير جداً";
    
    if (!formData.email.trim()) errors.email = "الرجاء إدخال البريد الإلكتروني";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "البريد الإلكتروني غير صحيح";
    
    if (!formData.phone.trim()) errors.phone = "الرجاء إدخال رقم الهاتف";
    else if (formData.phone.trim().length < 10) errors.phone = "رقم الهاتف غير صحيح";
    
    if (!formData.city.trim()) errors.city = "الرجاء إدخال المدينة";
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors)[0]);
      return;
    }

    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    formBody.append("entry.1130251952", formData.nom);
    formBody.append("entry.230377386", formData.email);
    formBody.append("entry.416384800", formData.phone);
    formBody.append("entry.808046012", formData.type);
    formBody.append("entry.99445358", formData.city);
    formBody.append("entry.248210842", formData.sessions);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfX99_yxa9ALBbBs-cyXqhYYa0OF4nPxJ8hjjPMg_98NRQyhw/formResponse",
        {
          method: "POST",
          body: formBody,
          mode: "no-cors",
        }
      );
      
      setShowToast(true);

      // ✅ Meta Pixel Lead Event (added only)
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Workshop Registration",
          value: formData.type === "Student" ? 3000 : 6000,
          currency: "DZD"
        });
      }

      setFormData({
        nom: "",
        email: "",
        phone: "",
        type: "Student",
        city: "",
        sessions: "Presential",
      });

      setTouchedFields({});
      setTimeout(() => setShowToast(false), 3000);

    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">تقدم التسجيل</span>
          <span className="text-sm font-semibold text-[#001e3a]">3 خطوات</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-l from-[#001e3a] to-[#002b4e] transition-all duration-500"
            style={{ width: `${Object.values(formData).filter(v => v).length * 16.6}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
        {/* الاسم الكامل */}
        <FormField
          icon={User}
          name="nom"
          type="text"
          placeholder="الاسم واللقب"
          value={formData.nom}
          onChange={handleChange}
          onFocus={() => setFocusedField('nom')}
          onBlur={() => handleBlur('nom')}
          error={touchedFields.nom && validateField('nom', formData.nom)}
          isFocused={focusedField === 'nom'}
          required
        />

        {/* البريد الإلكتروني */}
        <FormField
          icon={Mail}
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => handleBlur('email')}
          error={touchedFields.email && validateField('email', formData.email)}
          isFocused={focusedField === 'email'}
          required
        />

        {/* رقم الهاتف */}
        <FormField
          icon={Phone}
          name="phone"
          type="tel"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => handleBlur('phone')}
          error={touchedFields.phone && validateField('phone', formData.phone)}
          isFocused={focusedField === 'phone'}
          required
        />

        <div className="grid md:grid-cols-2 gap-4">
          {/* نوع المسجل */}
          <SelectField
            icon={GraduationCap}
            name="type"
            value={formData.type}
            onChange={handleChange}
            options={[
              { value: "Student", label: "طالب", icon: "🎓" },
              { value: "Other", label: "مهني", icon: "💼" }
            ]}
            isFocused={focusedField === 'type'}
            onFocus={() => setFocusedField('type')}
            onBlur={() => setFocusedField(null)}
          />

          {/* المدينة */}
          <FormField
            icon={MapPin}
            name="city"
            type="text"
            placeholder="المدينة"
            value={formData.city}
            onChange={handleChange}
            onFocus={() => setFocusedField('city')}
            onBlur={() => handleBlur('city')}
            error={touchedFields.city && !formData.city && "الرجاء إدخال المدينة"}
            isFocused={focusedField === 'city'}
            required
          />
        </div>

        {/* نوع الحضور */}
        <SelectField
          icon={Globe}
          name="sessions"
          value={formData.sessions}
          onChange={handleChange}
          options={[
            { value: "Presential", label: "حضوري", icon: "🏛️" },
            { value: "Online", label: "عن بعد", icon: "💻" }
          ]}
          isFocused={focusedField === 'sessions'}
          onFocus={() => setFocusedField('sessions')}
          onBlur={() => setFocusedField(null)}
        />

        {/* شروط التسجيل */}
        <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>
            بالتسجيل أنت توافق على الشروط والأحكام وسيتم التواصل معك خلال 24 ساعة لتأكيد الحجز
          </p>
        </div>

        {/* زر الإرسال */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#001e3a] to-[#002b4e] rounded-xl opacity-100 group-hover:opacity-90 transition-opacity" />
          <div className="relative bg-gradient-to-r from-[#001e3a] to-[#002b4e] text-white w-full py-4 rounded-xl font-semibold transition-all transform group-hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <span>تأكيد التسجيل</span>
                <CheckCircle className="w-5 h-5" />
              </>
            )}
          </div>
        </button>
      </form>
      
      {showToast && (
        <Toast message="تم إرسال التسجيل بنجاح! سنتواصل معك قريباً" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

// حقل الإدخال المحسن
const FormField = ({ 
  icon: Icon, 
  name, 
  type, 
  placeholder, 
  value, 
  onChange,
  onFocus,
  onBlur,
  error,
  isFocused,
  required 
}) => (
  <div className="relative group">
    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
      isFocused || value ? 'text-[#001e3a]' : 'text-gray-400 group-hover:text-gray-600'
    }`}>
      <Icon className="w-5 h-5" />
    </div>
    
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      required={required}
      dir="rtl"
      className={`w-full pr-12 pl-4 py-3 bg-white border-2 rounded-xl outline-none transition-all duration-300 ${
        error 
          ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
          : isFocused || value
            ? 'border-[#001e3a] ring-4 ring-[#001e3a]/10'
            : 'border-gray-200 hover:border-gray-300 focus:border-[#001e3a] focus:ring-4 focus:ring-[#001e3a]/10'
      }`}
    />
    
    {error && (
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <AlertCircle className="w-5 h-5 text-red-500" />
      </div>
    )}
    
    {!error && value && !isFocused && (
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <CheckCircle className="w-5 h-5 text-green-500" />
      </div>
    )}
    
    {error && (
      <p className="text-red-500 text-xs mt-1 mr-2">{error}</p>
    )}
  </div>
);

// حقل الاختيار المحسن
const SelectField = ({ 
  icon: Icon, 
  name, 
  value, 
  onChange, 
  options,
  isFocused,
  onFocus,
  onBlur
}) => (
  <div className="relative group">
    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
      isFocused || value ? 'text-[#001e3a]' : 'text-gray-400 group-hover:text-gray-600'
    }`}>
      <Icon className="w-5 h-5" />
    </div>
    
    <select
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      dir="rtl"
      className="w-full pr-12 pl-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none appearance-none cursor-pointer hover:border-gray-300 focus:border-[#001e3a] focus:ring-4 focus:ring-[#001e3a]/10 transition-all duration-300"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.icon} {option.label}
        </option>
      ))}
    </select>
    
    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

export default RegistrationForm;

import React, { useState, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';

const CountdownTimer = () => {
  const targetDate = '2026-02-28T09:30:00';
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="bg-gradient-to-r from-[#001e3a] to-[#002b4e] text-white py-8 px-4 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-4">البرنامج قد بدأ!</h3>
        <p className="text-center text-xl">يمكنك التسجيل للدورة القادمة</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#001e3a] to-[#002b4e] text-white py-8 px-4 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold text-center mb-6">ينطلق البرنامج قريباً</h3>
      <div className="flex justify-center gap-4 md:gap-8">
        <TimeUnit value={days} label="يوم" />
        <TimeUnit value={hours} label="ساعة" />
        <TimeUnit value={minutes} label="دقيقة" />
        <TimeUnit value={seconds} label="ثانية" />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
      <span className="text-3xl md:text-4xl font-bold">{value}</span>
    </div>
    <span className="text-sm mt-2 block">{label}</span>
  </div>
);

export default CountdownTimer;
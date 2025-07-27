'use client';

import { useRef, useState, forwardRef } from 'react';
import Select, { StylesConfig } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import { sanityClient } from '@/sanity/lib/sanityClient';
import { Button } from './ui/button';
import { countries, CustomOption, CustomSingleValue } from './countries';
import { ReactNode } from "react";

const callTimeOptions = [
  { value: "morning", label: <span>Morning (9 AM – 12 PM)</span> },
  { value: "afternoon", label: <span>Afternoon (12 PM – 3 PM)</span> },
  { value: "evening", label: <span>Evening (3 PM – 6 PM)</span> },
  { value: "anytime", label: <span>Anytime</span> },
];

const interestedOptions = [
  'Branding & Graphic Design',
  'Social Media Management',
  'Online Marketing Campaign',
  'Video Production & Photography',
  'Influencer Marketing',
  'Website Design',
  'Paid Ads & Performance Marketing',
  'Events Management',
  'Copywriting',
  'SEO & Analytics',
];

const CustomInput = forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
  <div className="relative w-full">
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      className="w-full border border-gray-600 rounded px-3 py-2 bg-transparent text-lg placeholder:text-gray-400 pr-10"
      placeholder="Select date"
    />
    <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
));
CustomInput.displayName = 'CustomInput';

const customStyles: StylesConfig<{ label: ReactNode; value: string }, false> = {
  control: (base) => ({
    ...base,
    background: 'transparent',
    minHeight: '48px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    color: 'white',
    fontSize: '1.125rem',
  }),
  menu: (base) => ({
    ...base,
    background: '#0e0e0e',
    borderRadius: '4px',
    border: '1px solid #ffffff',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    fontSize: '1.125rem',
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '200px',
    overflowY: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? 'transparent' : 'transparent',
    ':hover': {
      background: '#277cb5ff',
      color: 'white',
    },
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    color: 'white',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  input: (base) => ({
    ...base,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  placeholder: (base) => ({
    ...base,
    color: '#ccc',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#ffffff',
  }),
};

type IndividualFormData = {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  selectedDate: Date | null;
  inquiry: string;
  referralSource: string;
  primaryInterest: string;
  preferredCallTime: string;
  budget: string;
};

type RequiredField = 'fullName' | 'email' | 'phone' | 'selectedDate' | 'inquiry' | 'referralSource';

export default function IndividualContactForm() {
  const [formData, setFormData] = useState<IndividualFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: countries[0].value,
    selectedDate: null,
    inquiry: '',
    referralSource: '',
    primaryInterest: '',
    preferredCallTime: '',
    budget: '',
  });

  const [dateKey, setDateKey] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const requiredFields: RequiredField[] = ['fullName', 'email', 'phone', 'selectedDate', 'inquiry', 'referralSource'];
    const newErrors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await sanityClient.create({
        _type: 'individualContact',
        ...formData,
        selectedDate: formData.selectedDate ? new Date(formData.selectedDate).toISOString() : null,
        submittedAt: new Date().toISOString(),
        contactType: 'individual',
      });

      alert('Message sent successfully!');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: countries[0].value,
        selectedDate: null,
        inquiry: '',
        referralSource: '',
        primaryInterest: '',
        preferredCallTime: '',
        budget: '',
      });

      setDateKey(prev => prev + 1);

    } catch (error) {
      console.error(error);
      alert('Submission failed. Try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 bg-[linear-gradient(to_bottom,_#4899E3_-130%,_transparent_30%)] border border-[#55A1E7] shadow-[0_0_30px_3px_#55A1E7] max-w-2xl mx-auto p-4 space-y-10 rounded-lg font-poppins text-white text-lg font-semibold"
    >
      <h1 className="text-3xl">Let our business help yours.</h1>
      <p className="text-white-800 text-lg font-light mb-6">We want to hear from you.</p>

      <label className="block mb-1">Full Name *</label>
      <input 
        name="fullName" 
        value={formData.fullName} 
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
        placeholder="Full Name" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">Email *</label>
      <input 
        name="email" 
        type="email" 
        value={formData.email} 
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        placeholder="Email" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">Phone *</label>
      <div className="flex gap-2">
        <Select 
          options={countries} 
          styles={customStyles} 
          value={countries.find(c => c.value === formData.countryCode)} 
          onChange={(val) => val && setFormData({ ...formData, countryCode: val.value })} 
          className="w-2/3 text-white" 
          isSearchable={true}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue
          }}
        />
        <input 
          name="phone" 
          value={formData.phone} 
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
          placeholder="Phone" 
          className="w-2/3 border border-gray-600 rounded px-3 py-2 text-lg font-light" 
        />
      </div>

      <label className="block mb-1">Date of Submission *</label>
      <DatePicker
        key={dateKey}
        selected={formData.selectedDate}
        onChange={(date) => setFormData({ ...formData, selectedDate: date })}
        customInput={<CustomInput />}
      />

      <label className="block mb-1">I am interested in *</label>
      <Select 
        options={interestedOptions.map(opt => ({ label: <span>{opt}</span>, value: opt }))} 
        styles={customStyles} 
        value={formData.primaryInterest ? { label: <span>{formData.primaryInterest}</span>, value: formData.primaryInterest } : null}
        onChange={(val) => setFormData({ ...formData, primaryInterest: val ? val.value : '' })} 
        placeholder="Select an option"
        isClearable={false}
      />

      <label className="block mb-1">Inquiry Details *</label>
      <textarea 
        name="inquiry" 
        value={formData.inquiry} 
        onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">Budget (AED) - Monthly or per project *</label>
      <input 
        name="budget" 
        type="number" 
        value={formData.budget} 
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">What is the best time to call you?</label>
      <Select 
        options={callTimeOptions} 
        styles={customStyles} 
        value={formData.preferredCallTime ? callTimeOptions.find(opt => opt.value === formData.preferredCallTime) : null}
        onChange={(val) => setFormData({ ...formData, preferredCallTime: val ? val.value : '' })} 
        placeholder="Select preferred call time"
        isClearable={false}
      />

      <label className="block mb-1">Where did you hear about us? *</label>
      <input 
        name="referralSource" 
        value={formData.referralSource} 
        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <Button 
        type="submit" 
        className="w-[150px] text-white h-[45px] mx-auto block mb-10 border border-[#5AA5E9] bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] hover:shadow-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  );
} 
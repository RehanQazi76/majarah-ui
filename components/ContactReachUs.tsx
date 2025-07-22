// Refactored ContactForm component without shadcn
'use client';

import { useRef, useState, forwardRef, JSX } from 'react';
import Select, { StylesConfig, SingleValue } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import { sanityClient } from '@/sanity/lib/sanityClient';
import { Button } from './ui/button';

const countries = [
  { label: <div className="flex items-center gap-2"><img src="https://flagcdn.com/w40/in.png" className="w-5 h-4" />+91 India</div>, value: '+91' },
  { label: <div className="flex items-center gap-2"><img src="https://flagcdn.com/w40/us.png" className="w-5 h-4" />+1 USA</div>, value: '+1' },
];

const businessSizeOptions = [
  { value: "small", label: <span>Small</span> },
  { value: "medium", label: <span>Medium</span> },
  { value: "large", label: <span>Large</span> },
];

const yearsInBusinessOptions = [
  { value: "less_than_2", label: <span>Less than 2 years</span> },
  { value: "5_10_years", label: <span>5–10 years</span> },
  { value: "10_plus", label: <span>10+ years</span> },
  { value: "not_established", label: <span>Not established yet</span> },
];

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

const customStyles: StylesConfig<{ label: JSX.Element; value: string }, false> = {
  control: (base) => ({ ...base, background: 'transparent', minHeight: '48px' }),
  menu: (base) => ({ ...base, background: '#fff6f6ff', borderRadius: '4px', border: '1px solid #4899E3' }),
  option: (base, state) => ({ ...base, background: state.isSelected ? '#fff' : 'transparent', ':hover': { background: '#82acdcff', color: 'white' } }),
  singleValue: (base) => ({ ...base, color: 'black' }),
  dropdownIndicator: (base) => ({ ...base, color: '#080808ff' }),
};

type FormData = {
  businessName: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  selectedDate: Date | null;
  inquiry: string;
  referralSource: string;
  businessSize: string;
  yearsInBusiness: string;
  primaryInterest: string;
  secondaryInterests: string[];
  preferredCallTime: string;
  budget: string;
};

type RequiredField = 'businessName' | 'fullName' | 'email' | 'phone' | 'selectedDate' | 'inquiry' | 'referralSource' | 'budget';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    fullName: '',
    email: '',
    phone: '',
    countryCode: countries[0].value,
    selectedDate: null,
    inquiry: '',
    referralSource: '',
    businessSize: businessSizeOptions[0].value,
    yearsInBusiness: '',
    primaryInterest: '',
    secondaryInterests: [],
    preferredCallTime: '',
    budget: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const requiredFields: RequiredField[] = ['businessName', 'fullName', 'email', 'phone', 'selectedDate', 'inquiry', 'referralSource', 'budget'];
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
        _type: 'contact',
        ...formData,
        selectedDate: formData.selectedDate ? new Date(formData.selectedDate).toISOString() : null,
        submittedAt: new Date().toISOString(),
      });
      alert('Message sent successfully!');
      setFormData({
        businessName: '', fullName: '', email: '', phone: '', countryCode: countries[0].value,
        selectedDate: null, inquiry: '', referralSource: '', businessSize: businessSizeOptions[0].value,
        yearsInBusiness: '', primaryInterest: '', secondaryInterests: [], preferredCallTime: '', budget: '',
      });
    } catch (error) {
      console.error(error);
      alert('Submission failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}className="max-w-2xl mx-auto p-4 space-y-14 rounded-lg shadow-xl bg-[#0e0e0e] bg-white font-poppins font-regular text-black text-xl font-semibold">
      
      {/* <div className="border-b border-black w-full mb-5" /> */}
      <h1 className="text-4xl mt-3">Let our business help yours.</h1>
      <p className="text-gray-800 text-lg font-light mb-4">We want to hear from you.</p>
      
      <input name="businessName" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Business Name *" className="w-full border border-gray-600 rounded px-3 py-2" />
      <input name="fullName" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Full Name *" className="w-full border border-gray-600 rounded px-3 py-2" />
      <input name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email *" className="w-full border border-gray-600 rounded px-3 py-2" />

      <div className="flex gap-2">
        <Select options={countries} styles={customStyles} value={countries.find(c => c.value === formData.countryCode)}
          onChange={(val) => val && setFormData({ ...formData, countryCode: val.value })} className="w-1/3" />
        <input name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone *" className="w-2/3 border border-gray-600 rounded px-3 py-2" />
      </div>

      <DatePicker selected={formData.selectedDate} onChange={(date) => setFormData({ ...formData, selectedDate: date })} customInput={<CustomInput />} />

      <Select options={interestedOptions.map(opt => ({ label: <span>{opt}</span>, value: opt }))} styles={customStyles} placeholder="Primary Interest"
        onChange={(val) => val && setFormData({ ...formData, primaryInterest: val.value })} />

      <textarea name="inquiry" value={formData.inquiry} onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })} placeholder="Inquiry *" className="w-full border border-gray-600 rounded px-3 py-2" />

      <input name="budget" type="number" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} placeholder="Budget (AED) *" className="w-full border border-gray-600 rounded px-3 py-2" />

      <Select options={businessSizeOptions} styles={customStyles} placeholder="Business Size"
        onChange={(val) => val && setFormData({ ...formData, businessSize: val.value })} />

      <Select options={yearsInBusinessOptions} styles={customStyles} placeholder="Years in Business"
        onChange={(val) => val && setFormData({ ...formData, yearsInBusiness: val.value })} />

      <Select options={callTimeOptions} styles={customStyles} placeholder="Preferred Call Time"
        onChange={(val) => val && setFormData({ ...formData, preferredCallTime: val.value })} />

      <input name="referralSource" value={formData.referralSource} onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })} placeholder="referralSource *" className="w-full border border-gray-600 rounded px-3 py-2" />

     
      <Button type="submit" className="w-[150px] bg-blue-600 text-white hover:bg-blue-900 h-[45px] mx-auto block mb-5">
        Submit
      </Button>
    </form>
  );
}
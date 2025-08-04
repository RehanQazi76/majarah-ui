'use client';
import { JSX, useRef, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { SingleValue } from 'react-select';
import { CalendarDays } from "lucide-react";
import React, { forwardRef } from 'react';


// Country list
const countries = [
  {
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
        +91 India
      </div>
    ),
    value: '+91',
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-4" />
        +1 USA
      </div>
    ),
    value: '+1',
  },
];

const Logo = () => (
    <div className="flex items-center gap-2 mb-4">
      <img src="/icons/logoblack.svg" alt="Logo" className="w-60 h-auto" />
    </div>
  );

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

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, onChange, placeholder }, ref) => (
    <div className="relative w-full">
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder || "Select date"}
        className="w-full border border-gray-600 rounded px-3 py-2 bg-transparent text-lg font-poppins placeholder:text-gray-400 pr-10"
      />
      <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  )
);

CustomInput.displayName = "CustomInput";

const businessSizeOptions = [
  { value: "small (1- 10 Employees", label: <span>Small</span> },
  { value: "medium (10-50 Employees", label: <span>Medium</span> },
  { value: "large (50+ Employees", label: <span>Large</span> },
]

const yearsInBusinessOptions = [
  { value: "less_than_2", label: <span>Less than 2 years</span> },
  { value: "5_10_years", label: <span>5–10 years</span> },
  { value: "10_plus", label: <span>10+ years</span> },
  { value: "not_established", label: <span>Not established yet</span> },
]

const callTimeOptions = [
  { value: "morning", label: <span>Morning (9 AM – 12 PM)</span> },
  { value: "afternoon", label: <span>Afternoon (12 PM – 3 PM)</span> },
  { value: "evening", label: <span>Evening (3 PM – 6 PM)</span> },
  { value: "anytime", label: <span>Anytime</span> },
]

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState<{
    label: JSX.Element;
    value: string;
  } | null>(countries[0]);

  const formattedOptions = interestedOptions.map((opt) => ({
  value: opt,
  label: <span className="text-gray/600">{opt}</span>,
}));

const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const customStyles: StylesConfig<{ label: JSX.Element; value: string }, false> = {
  control: (base) => ({
    ...base,
    background: 'transparent',
    color: 'white',
    minHeight: '48px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '15px',
  }),
  menu: (base) => ({
    ...base,
    background: '#fff6f6ff',
    borderRadius: '4px',
    marginTop: '2px',
    maxHeight: '300px',
    overflowY: 'auto',
     overflowX: 'hidden',
     padding: 0,
     margin: 0,
     border: '1px solid #4899E3',
  }),

  menuList: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
    overflowY: 'auto',
    maxHeight: '200px',
  }),

  option: (base, state) => ({
    ...base,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '15px',
    paddingTop: '6px',
    paddingBottom: '6px',
    lineHeight: '1.2',
    background: state.isSelected ? '#ffffffff' : 'transparent',
    color: '#4B5563', // Tailwind's gray-600
    ':hover': {
      background: '#82acdcff',
      color: 'white',
    },
  }),

  singleValue: (base) => ({ ...base, color: 'black' }),
  dropdownIndicator: (base) => ({ ...base, color: '#080808ff' }),
};

interface FormData {
  businessName: string;
  fullName: string;
  email: string;
  phone: string;
  selectedDate: string | Date | null;
  inquiry: string;
  referral: string;
  budget: string;
}

const [formData, setFormData] = useState<FormData>({
  businessName: '',
  fullName: '',
  email: '',
  phone: '',
  selectedDate: null,
  inquiry: '',
  referral: '',
  budget: '',
});

const businessNameRef = useRef<HTMLInputElement>(null!);
const fullNameRef = useRef<HTMLInputElement>(null!);
const emailRef = useRef<HTMLInputElement>(null!);
const inquiryRef = useRef <HTMLTextAreaElement>(null!);




  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
  const newErrors: Record<string, string> = {};

  if (!formData.businessName) newErrors.businessName = 'Required';
  if (!formData.fullName) newErrors.fullName = 'Required';
  if (!formData.email) newErrors.email = 'Required';
  if (!formData.phone) newErrors.phone = 'Required';
  if (!formData.selectedDate) newErrors.selectedDate = 'Required';
  if (!formData.inquiry) newErrors.inquiry = 'Required';
  if (!formData.referral) newErrors.referral = 'Required';
  if (!formData.budget) newErrors.budget = 'Required';

  for (const [name, value] of Object.entries(formData)) {
    const error = validateField(name, value?.toString() || '');
    if (error) {
      newErrors[name] = error;
    }
  }

  setErrors(newErrors);

  setTouched(
    Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Visual order of the form fields with refs
  const fieldOrder = ['businessName', 'fullName', 'email', 'inquiry'];

  // Scroll to the first invalid field based on form layout order
  for (const fieldName of fieldOrder) {
    if (newErrors[fieldName] && fieldRefs[fieldName]?.current) {
      fieldRefs[fieldName]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      fieldRefs[fieldName]?.current?.focus();
      break;
    }
  }

  return Object.keys(newErrors).length === 0;
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  // Update form data
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Real-time validation
  if (touched[name]) {
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }
};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted', formData);
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const showError = (field: string) => {
  return touched[field] && !!errors[field]; // ✅ return the condition
};

const validateField = (name: string, value: string) => {
  switch (name) {
    case 'email':
      if (!value) return 'Invalid email address';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) return 'Invalid email address';
      return '';
 
    // other validations...
    default:
      return '';
  }
};

const fieldRefs: Record<string, React.RefObject<HTMLInputElement | HTMLTextAreaElement>> = {
  businessName: businessNameRef,
  fullName: fullNameRef,
  email: emailRef,
  inquiry: inquiryRef
};


const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  return (
    <form
      onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-14 rounded-lg shadow-xl bg-[#0e0e0e] bg-white font-poppins font-regular text-black text-xl font-semibold"
    >
         <Logo />

    <div className="border-b border-black w-full mb-5" />
      <h1 className="text-4xl mt-3">Let our business help yours.</h1>
      <p className="text-gray-800 text-lg font-light mb-4">We want to hear from you.</p>
      <p className="text-lg text-gray-800 font-light mb-5s">
        P.S. If you are applying for a job position, your application will not be considered if you use this form.
      </p>

      <div>
        <label className="block mb-1">Name of Business *</label>
        <Input
         ref={businessNameRef}
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          onBlur={() => handleBlur('businessName')}
          className={`bg-transparent border ${showError('businessName') ? 'border-red-500' : 'border-gray-600'} h-12 text-lg`}
          placeholder="Your Business Name"
        />
        {showError('businessName') && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
      </div>

      <div>
      <label className="block mb-1">First & Last Name *</label>
      <Input
      ref={fullNameRef}
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        onBlur={() => handleBlur('fullName')}
        className={`bg-transparent border ${showError('fullName') ? 'border-red-500' : 'border-gray-600'} h-12 text-lg`}
        placeholder="Your Full Name"
      />
      {showError('fullName') && (
        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
      )}
    </div>

     <div>
      <label className="block mb-1">Email *</label>
      <Input
        ref={emailRef}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        className={`bg-transparent border ${showError('email') ? 'border-red-500' : 'border-gray-600'} h-12 text-lg`}
        placeholder="you@example.com"
      />
      {showError('email') && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>


      <div className="flex gap-2">
        <div className="w-1/3">
          <label className="block mb-1">Phone *</label>
          <Select
         options={countries}
        value={selectedCountry}
        onChange={(val: SingleValue<{ label: JSX.Element; value: string }>) => val && setSelectedCountry(val)}
        styles={customStyles} // ✅ apply your custom styles here
        className="text-gray/1000"
/>
        </div>
        <div className="w-2/3">
          <label className="block mb-1">&nbsp;</label>
          <Input className="bg-transparent text-gray/1000 border-gray-600 h-[48px]" placeholder="xxxxx xxxxx" />
        </div>
      </div>

      <div>
      <label className="block mb-1">Date of Submission</label>
       <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="dd-MM-yyyy"
        isClearable
        placeholderText="dd-mm-yyyy"
/>

      </div>

      <div className="mb-4">
      <label className="block text-gray/1000 mb-2">I am mostly interested in... *</label>
      <Select
        options={formattedOptions}
        styles={customStyles}
        placeholder="Select one"
        isSearchable={false}
      />
    </div>

      <div>
        <label className="block mb-4">I am also interested in... *</label>
        <div className="space-y-5 mt-2">
          {interestedOptions.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Checkbox id={item} />
              <label htmlFor={item} className="font-poppins font-normal text-gray/600 text-base">{item}</label>
            </div>
          ))}
        </div>
      </div>

     <div>
  <label className="block mb-1">Inquiry Details <span className="text-red-500">*</span></label>
  <Textarea
    ref={inquiryRef}
    name="inquiry"
    value={formData.inquiry}
    onChange={handleChange}
    onBlur={() => handleBlur('inquiry')}
    className={`text-xl font-poppins font-normal bg-transparent resize-none h-24 overflow-y-auto border ${
      showError('inquiry') ? 'border-red-500' : 'border-gray-600'
    } text-gray-600`}
    placeholder="Please provide details..."
    maxLength={2000}
  />
  {showError('inquiry') && (
    <p className="text-red-500 text-sm mt-1">{errors.inquiry}</p>
  )}
</div>



      <div>
    <label className="block mb-2">Budget (AED - Monthly)</label>
    
    <input
        type="number"
        className=" text-lg font-poppins font-normal bg-transparent text-gray/600 border border-gray-600 rounded px-3 py-2 w-full"
        placeholder="Monthly or per project"
        min="0"
        step="1"
    />
    </div>

      <div>
    <label className="block mb-1">Business Size</label>
    <Select
        options={businessSizeOptions}
        styles={customStyles}
        placeholder="Select size"
        isSearchable={false}
    />
    </div>

     <div>
    <label className="block mb-1">Years in Business</label>
    <Select
        options={yearsInBusinessOptions}
        styles={customStyles}
        placeholder="Select"
        isSearchable={false}
    />
    </div>

      <div>
    <label className="block mb-1s">What is the best time to call you? *</label>
    <Select
        options={callTimeOptions}
        styles={customStyles}
        placeholder="Select time"
        isSearchable={false}
    />
    </div>

      <div>
        <label className="block mb-1">Where did you hear about us? *</label>
        <Input className="bg-transparent text-gray/1000 border-gray-600 h-[48px]" placeholder="E.g., Google, Instagram, Referral..." />
      </div>

      <Button type="submit" className="w-[150px] bg-blue-600 text-white hover:bg-blue-900 h-[45px] mx-auto block mb-5">
        Submit
      </Button>
    </form>
  );
}

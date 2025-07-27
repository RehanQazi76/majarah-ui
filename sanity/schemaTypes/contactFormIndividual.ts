import { Rule } from 'sanity';

// sanity/schemaTypes/contact.ts
interface ContactFormFieldIndividual {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: Rule) => Rule;
    of?: Array<{ type: string }>;
    initialValue?: () => string;
    readOnly?: boolean;
}

interface ContactFormSchemaIndividual {
    name: string;
    title: string;
    type: string;
    fields: ContactFormFieldIndividual[];
}

const contactFormSchemaIndividual: ContactFormSchemaIndividual = {
    name: 'individualContact',
    title: 'Individual Contact Submissions',
    type: 'document',
    fields: [
        {
            name: 'contactType',
            title: 'Contact Type',
            type: 'string',
            initialValue: () => 'individual',
            readOnly: true
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().email()
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'countryCode',
            title: 'Country Code',
            type: 'string'
        },
        {
            name: 'selectedDate',
            title: 'Date of Submission',
            type: 'datetime'
        },
        {
            name: 'primaryInterest',
            title: 'Primary Interest',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
       
        {
            name: 'inquiry',
            title: 'Inquiry Details',
            type: 'text',
            validation: (Rule: Rule) => Rule.required().max(2000)
        },
        {
            name: 'budget',
            title: 'Budget (Monthly)',
            type: 'string',
            validation: (Rule: Rule) => Rule.min(0)
        },
       
        
        {
            name: 'preferredCallTime',
            title: 'Preferred Call Time',
            type: 'string'
        },
        {
            name: 'referralSource',
            title: 'Referral Source',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            readOnly: true
        }
    ]
};

export default contactFormSchemaIndividual;


import { Customer } from './customer';

export const CUSTOMERDATA: Customer[] = [
    {
        id: 1,
        firstName: 'Steve',
        lastName: 'Bernard',
        addressOne: '71 Mockingbird Lane',
        addressTwo: 'Unit 1',
        city: 'Mockland',
        state: 'PA',
        zip: '43834',
        phone: '610-555-1111',
        lines: [
            {
                number: '610-555-1111',
                plan: 'Unlimited Plan',
                data: 'Unlimited Data'
            },
            {
                number: '610-555-2222',
                plan: 'Free Plan',
                data: '5GB Data'
            },
            {
                number: '610-555-3333',
                plan: 'Free Plan',
                data: '5GB Data'
            },
            {
                number: '610-555-4444',
                plan: 'Free Plan',
                data: '7GB Data'
            },
            {
                number: '610-555-5555',
                plan: 'Free Plan',
                data: '10GB Data'
            }
        ]
    },
    {
        id: 2,
        firstName: 'Steve',
        lastName: 'Bernard',
        addressOne: '70 Mockingbird Lane',
        addressTwo: 'Unit 5',
        city: 'Mockland',
        state: 'PA',
        zip: '43834',
        phone: '610-555-0000',
        lines: [
            {
                number: '610-555-2222',
                plan: 'Unlimited Plan',
                data: 'Unlimited Data'
            },
            {
                number: '610-555-2222',
                plan: 'Free Plan',
                data: '5GB Data'
            },
            {
                number: '610-555-3333',
                plan: 'Free Plan',
                data: '5GB Data'
            },
            {
                number: '610-555-4444',
                plan: 'Free Plan',
                data: '7GB Data'
            },
        ]
    },
    {
        id: 3,
        firstName: 'Steve',
        lastName: 'Bernard',
        addressOne: '70 Mockingbird Lane',
        addressTwo: 'Unit 5',
        city: 'Mockland',
        state: 'PA',
        zip: '43834',
        phone: '610-555-0000',
        lines: [
            {
                number: '610-555-1111',
                plan: 'Unlimited Plan',
                data: 'Unlimited Data'
            },
            {
                number: '610-555-2222',
                plan: 'Free Plan',
                data: '5GB Data'
            },
            {
                number: '610-555-3333',
                plan: 'Free Plan',
                data: '5GB Data'
            }
        ]
    }
];

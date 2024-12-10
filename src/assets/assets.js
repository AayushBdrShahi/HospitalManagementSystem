import Heros_img from './Heros.png'
import logo from './logo.png'
import profile from './profile.png'
import menu_icon from './menu_icon.svg'
import verified_icon from './verified_icon.svg'
import upload_area from './upload_area.png'
import info_icon from './info_icon.svg'
import cross_icon from './cross_icon.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_Physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Eye from'./Eye.png'


export const assets ={

    Heros_img,
    logo,
    profile,
    menu_icon,
    verified_icon,
    info_icon,
    upload_area,
    cross_icon
}

export const specialityData =[
    {
        speciality: "General_physician",
        image:General_physician,
    },
     {
        speciality: "Gynecologist",
        image:Gynecologist,
    },
    {
        speciality: "Dermatologist",
        image:Dermatologist,
    },
    {
        speciality: "Gastroenterologist",
        image:Gastroenterologist,
    }, {
        speciality: "Neurologist",
        image:Neurologist,
    }, {
        speciality: "Eye_OPD",
        image:Eye,
    },

]






export const doctors =[
    {
        _id:"doc1",
        name:"Dr.Michael Green",
        image: doc1,
        speciality: 'General_physician',
        degree: "MBBS",
        experience: '5 years',
        about: 'Dr. Green specializes in joint replacement surgeries and sports injury management, helping patients regain mobility and lead active lives.',
        fees:65,
        address: {
            line1: '89 Elm Street',
            line2: 'Downtown, San Francisco'
        }
    },
    {
        _id:"doc2",
        name:"Dr.Emily Brown",
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MD, Obstetrics & Gynecology',
        experience: '9 years',
        about: 'Dr. Emily Brown provides comprehensive women’s health care, including prenatal care, family planning, and advanced gynecological procedures.',
        fees:70,
        address: {
            line1: '78 Coral Drive',
            line2: 'Women’s Health Clinic, Miami'
        }
    },{
        _id:"doc3",
        name: 'Dr. James Anderson',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD, Dermatology',
        experience: '6 years',
        about: 'Dr. Anderson is passionate about skincare and helps patients with a range of conditions, from acne to chronic skin disorders, with advanced treatments.',
        fees:55,
        address: {
            line1: '23 Rose Lane',
            line2: 'Uptown, Chicago'
        }
    },{
        _id:"doc4",
        name: 'Dr. Sophia Wilson',
        image: doc4,
        speciality: 'Neurologist',
        degree: 'DM, Neurology',
        experience: '12 Years',
        about: 'Dr. Wilson focuses on treating complex neurological disorders and emphasizes patient-centered approaches for effective care.',
        fees:100,
        address: {
            line1: '12 Beacon Street',
            line2: 'Medical Square, Boston'
        }
    },{
        _id:"doc5",
        name: 'Dr. William Carter',
        image: doc5,
        speciality: 'Gynecologist',
        degree: 'MD, Obstetrics & Gynecology',
        experience: '9 Years',
        about: 'Dr. Carter provides comprehensive women’s health care, including prenatal care, family planning, and advanced gynecological procedures.',
        fees:60,
        address: {
            line1: '78 Coral Drive',
            line2: 'Women’s Health Clinic, Miami'
        }
    },{
        _id:"doc6",
        name: 'Dr. Olivia Johnson',
        image: doc6,
        speciality: 'Dermatologist',
        speciality: 'Dermatologist',
        experience: '6 Years',
        about: 'Dr.Johnson is passionate about skincare and helps patients with a range of conditions, from acne to chronic skin disorders, with advanced treatments.',
        fees:55,
        address: {
            line1: '23 Rose Lane',
            line2: 'Uptown, Chicago'
        }
    },{
        _id:"doc7",
        name: 'Dr. Harry Anderson',
        image: doc7,
        speciality: 'Neurologist',
        degree: 'DM, Neurology',
        experience: '12 Years',
        about: 'Dr. Harry focuses on treating complex neurological disorders and emphasizes patient-centered approaches for effective care.',
        fees:100,
        address: {
            line1: '12 Beacon Street',
            line2: 'Medical Square, Boston'
        }
    },{
        _id:"doc8",
        name: 'Dr. Ava Harris',
        image: doc8,
        speciality: 'General_physician',
        degree: "MBBS",
        experience: '5 years',
        about: 'Dr. Ava specializes in joint replacement surgeries and sports injury management, helping patients regain mobility and lead active lives.',
        fees:70,
        address: {
            line1: '56 Olive Lane',
            line2: 'Diabetes Care Unit, Dallas'
        }
    },{
        _id:"doc9",
        name: 'Dr. Sarah Johnson',
        image: doc9,
        speciality: 'Gastroenterologist',
        degree: 'MD, Gastroenterology',
        experience: '10 years',
        about: 'Dr.Sarah provides expert care in diagnosing and managing digestive system disorders.',
        fees:70,
        address: {
            line1: '89 Elm Street',
            line2: 'Downtown, San Francisco'
        }
    },
    {
        _id:"doc9",
        name: 'Dr. Sarah Johnson',
        image: doc9,
        speciality: 'Eye_OPD',
        degree: 'MD, EYE_OPD',
        experience: '10 years',
        about: 'Dr.Sarah provides expert care in diagnosing and managing digestive system disorders.',
        fees:70,
        address: {
            line1: '89 Elm Street',
            line2: 'Downtown, San Francisco'
        }
    },{
        _id:"doc10",
        name: 'Dr. Ava Martinez',
        image: doc10,
        speciality: 'Gastroenterologist',
        degree: 'MD, Gastroenterology',
        experience: '6 Years',
        about: 'Dr. Ava Martinez specializes in advanced gastrointestinal treatments.',
        fees:65,
        address: {
            line1: '56 Olive Lane',
            line2: 'Gastro Health Center, Dallas'
        }
    },{
        _id:"doc10",
        name: 'Dr. Ava Martinez',
        image: doc10,
        speciality: 'Physiotherapy',
        degree: 'MD,Physiotherapy',
        experience: '6 Years',
        about: 'Dr. Ava Martinez specializes in advanced gastrointestinal treatments.',
        fees:65,
        address: {
            line1: '56 Olive Lane',
            line2: 'Gastro Health Center, Dallas'
        }
    },
]
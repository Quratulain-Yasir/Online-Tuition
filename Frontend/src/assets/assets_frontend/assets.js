import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_img from './contact_img.jpg'
import about1_img from './about_img.jpg'
import about2_img from './about2_img.jpg'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import upload_area from './upload_area.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import teach1 from './teach1.png'
import teach2 from './teach2.png'
import teach3 from './teach3.png'
import teach4 from './teach4.png'
import teach5 from './teach5.png'
import teach6 from './teach6.png'
import teach7 from './teach7.png'
import teach8 from './teach8.png'
import teach9 from './teach9.png'
import teach10 from './teach10.png'
import teach11 from './teach11.png'
import teach12 from './teach12.png'
import teach13 from './teach13.png'
import teach14 from './teach14.png'
import teach15 from './teach15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_img,
    about1_img,
    about2_img,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    upload_area
}

export const specialityData = [
     {
        speciality: 'Computer Science',
        image: General_physician
    },
    {
        speciality: 'Chemistry',
        image: Gynecologist
    },
    {
        speciality: 'Physics',
        image: Dermatologist
    },
    {
        speciality: 'Math',
        image: Pediatricians
    },
    {
        speciality: 'English',
        image: Neurologist
    },
    {
        speciality: 'German',
        image: Gastroenterologist
    },
    {
        speciality: 'Biology',
        image: Gastroenterologist
    },
]

export const teachers = [
    {
        _id:"tech1" , 
        name:"Ali Rahman" ,
        image: teach1 ,
        speciality:"Math" , 
        degree:"PHD Math" ,
        experience:"4 years" , 
        about: "Ali Rahman has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application." ,
        fees:"50" , 
        address: {
            line1:"17th Cross, Richmond" ,
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach2',
        name: 'Imran Ali',
        image: teach2,
        speciality: 'Physics',
        degree: 'Master',
        experience: '3 Years',
        about: 'Imran Ali has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "60",
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach3',
        name: 'Sarah Patel',
        image: teach3,
        speciality: 'Biology',
        degree: 'PHD',
        experience: '4 Years',
        about: 'Sarah Patel has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "30",
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach4',
        name: 'Siri Lee',
        image: teach4,
        speciality: 'Computer Science',
        degree: 'Master',
        experience: '2 Years',
        about: 'Siri Lee has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "$40",
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach5',
        name: 'Jennifer Garcia',
        image: teach5,
        speciality: 'Computer Science',
        degree: 'Master',
        experience: '4 Years',
        about: 'Jennifer Garcia has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "50",
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach6',
        name: 'Andrew Williams',
        image: teach6,
        speciality: 'Biology',
        degree: 'PHD',
        experience: '4 Years',
        about: 'Andrew Williams has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "50",
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach7',
        name: 'Christopher Davis',
        image: teach7,
        speciality: 'Math',
        degree: 'Master',
        experience: '4 Years',
        about: 'Davis has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "50",
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach8',
        name: 'Fiza Rahman',
        image: teach8,
        speciality: 'Math',
        degree: 'PHD',
        experience: '3 Years',
        about: 'Fiza has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "60",
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach9',
        name: 'Talha',
        image: teach9,
        speciality: 'Chemistry',
        degree: 'Master',
        experience: '3 Years',
        about: 'Talha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach10',
        name: 'Jeffrey',
        image: teach10,
        speciality: 'Biology',
        degree: 'Master',
        experience: '2 Years',
        about: 'Jeffrey has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "40",
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach11',
        name: 'Zoe Kelly',
        image: teach11,
        speciality: 'Chemistry',
        degree: 'Master',
        experience: '4 Years',
        about: 'Zoe Kelly has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "50",
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach12',
        name: 'Patrick Harris',
        image: teach12,
        speciality: 'English',
        degree: 'Master',
        experience: '4 Years',
        about: 'Patrick Harris has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach13',
        name: 'Umar',
        image: teach13,
        speciality: 'German',
        degree: 'Master',
        experience: '4 Years',
        about: 'Umar has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "50",
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach14',
        name: 'Safdar',
        image: teach14,
        speciality: 'German',
        degree: 'Master',
        experience: '3 Years',
        about: 'Safdar has a strong commitment to delivering comprehensive lectures, focusing on main points, easy wording, and real world application.',
        fees: "60",
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teach15',
        name: 'Amelia Hill',
        image: teach15,
        speciality: 'English',
        degree: 'MS ENGLISH',
        experience: '1 Years',
        about: 'Amelia Hill has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: "30",
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
]
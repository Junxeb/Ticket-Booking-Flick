import logo from './logo.png'
import gdhLogo from './gdhLogo.png'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    gdhLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
}

export const flickTrailers = [
    {
        image: "https://img.youtube.com/vi/hRFY_Fesa9Q/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/hRFY_Fesa9Q?si=hUg3zAiT98upS_9g'
    },
    {
        image: "https://img.youtube.com/vi/0fksoEJvdLE/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/0fksoEJvdLE?si=kNg4DROb1OSG0NUn"'
    },
    {
        image: "https://img.youtube.com/vi/BY4Ucfcls1g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/BY4Ucfcls1g?si=QoU1iF5XlilRH9YM'
    },
    {
        image: "https://img.youtube.com/vi/WTLgg8oRSBE/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/WTLgg8oRSBE?si=WzTkLL73XHFFEYuB'
    },
]

// รายชื่อนักแสดง
const flickCastsData = [
    { "name": "Jeff Satur", "profile_path": "https://s.isanook.com/jo/0/ud/494/2472073/338608755_1168277337214118_68.jpg?ip/resize/w728/q80/jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "2026001",
        "id": 202601,
        "title": "Purple Heart",
        "overview": "เรื่องราวของ 'แคสซี' นักร้องนักแต่งเพลงสาวที่จำเป็นต้องแต่งงานปลอมๆ กับ 'ลุค' นาวิกโยธินหนุ่ม เพื่อหวังผลประโยชน์ด้านสวัสดิการรักษาโรคเบาหวานของเธอ แต่เมื่อโศกนาฏกรรมเกิดขึ้น ความสัมพันธ์ปลอมๆ กลับกลายเป็นความรักที่จริงจังขึ้นมา",
        "poster_path": "https://image.tmdb.org/t/p/original/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
        "backdrop_path": "https://variety.com/wp-content/uploads/2022/04/PH_SG_0001A.jpeg?crop=304px%2C0px%2C3896px%2C2190px&resize=1000%2C563",
        "genres": [
            { "id": 28, "name": "Romantic" },
            { "id": 14, "name": "Drama" },
        ],
        "casts": flickCastsData,
        "release_date": "2026-04-01",
        "original_language": "ENGLISH",
        "tagline": "unusual gallantry, extraordinary fidelity, and essential service",
        "vote_average": 6.7,
        "vote_count": 15000,
        "runtime": 124,
    },
    {
        "_id": "2026002",
        "id": 2026002,
        "title": "กังฟู แพนด้า 4",
        "overview": "หลังจากผ่านการปราบวายร้ายมา 3 ครั้ง โป ถูกเลือกให้เป็นผู้นำทางจิตวิญญาณแห่งหุบเขาแห่งสันติสุข ซึ่งทำให้เขาต้องยุติบทบาทนักรบมังกร โปพบว่าการเป็นผู้นำทางจิตวิญญาณนั้นยากกว่าการต่อสู้มาก และเขาต้องรีบหาและฝึกฝนนักรบมังกรคนใหม่มาแทนที่",
        "poster_path": "https://image.tmdb.org/t/p/original/qU7zorO8CcDsasZE6y5L6hxeIvd.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w500_and_h282_face/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
        "genres": [
            { "id": 27, "name": "Action" },
            { "id": 9648, "name": "Adventure" },
            { "id": 59, "name": "Comedy" }
        ],
        "casts": flickCastsData,
        "release_date": "2026-03-28",
        "original_language": "THAI",
        "tagline": "Big Wisdom. Small Staff.",
        "vote_average": 7.532,
        "vote_count": 18000,
        "runtime": 93,
    },
    {
        "_id": "2026003",
        "id": 2026003,
        "title": "หลานม่า",
        "overview": "เอ็ม เด็กหนุ่มที่ตัดสินใจดร็อปเรียนเพื่อมาเอาดีทางการเป็นนักแคสต์เกมแต่ไม่รุ่ง เมื่อเห็นมุ่ย ลูกพี่ลูกน้องได้มรดกจากการดูแลอาม่าที่ป่วย เอ็มจึงเกิดไอเดียอยากได้มรดกบ้าง เขาตัดสินใจไปดูแล อาม่า ผู้ป่วยเป็นมะเร็งระยะสุดท้าย โดยหวังจะรวยทางลัด",
        "poster_path": "https://gdh559.com/assets/uploads/imgInp/edtiorupload/images/007f82ce9e039e871bb26743b339d071.jpeg",
        "backdrop_path": "https://storage.googleapis.com/atime-media-prod/content/13da56b6-38b9-4817-8af6-7d712d22fa97.jpeg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Drama" },
        ],
        "casts": flickCastsData,
        "release_date": "2026-04-15",
        "original_language": "THAI",
        "tagline": "บันทึกช่วงเวลาที่มีค่าของครอบครัว",
        "vote_average": 9.6,
        "vote_count": 27500,
        "runtime": 126,
    },
    {
        "_id": "2026004",
        "id": 2026004,
        "title": "Bad Boys: Ride 0r Die",
        "overview": "กัปตันโฮเวิร์ด ผู้ล่วงลับ ถูกใส่ร้ายว่ามีความเกี่ยวข้องกับแก๊งค้ายาเสพติด ทำให้คู่หู 'Bad boys' อย่าง ไมค์ และ มาร์คัส ต้องออกปฏิบัติการกู้ชื่อเสียงให้กับอดีตหัวหน้าของพวกเขา ",
        "poster_path": "https://media.themoviedb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Comedy" },

        ],
        "casts": flickCastsData,
        "release_date": "2026-04-20",
        "original_language": "ENGLISH",
        "tagline": "Grab your ride or die, the Bad Boys are home.",
        "vote_average": 8.945,
        "vote_count": 35960,
        "runtime": 115,
    },
    {
        "_id": "2026008",
        "id": 2026008,
        "title": "วิมานหนาม",
        "overview": "หลังจาก 'เสก' เสียชีวิตลง 'ทองคำ' คู่รักหนุ่มผู้ลงทุนลงแรงสร้างบ้านและสวนทุเรียนไว้ให้เสก กลับต้องรับมือกับแม่และน้องสาวของเสกที่เข้ามาจัดการและแย่งชิงสมบัติ ทำให้ทองคำต้องทำทุกวิถีทางเพื่อปกป้อง 'วิมาน' ที่ควรจะเป็นของเขา",
        "poster_path": "https://mpics.mgronline.com/pics/Images/567000006120402.JPEG",
        "backdrop_path": "https://themomentum.co/wp-content/uploads/2024/08/Web_Wide-Screen_screen-and-sound-290867-1280x720.jpg",
        "genres": [
            { "id": 28, "name": "Drama" },
            { "id": 98, "name": "Thriller" },
            { "id": 15, "name": "Romantic" }
        ],
        "casts": flickCastsData,
        "release_date": "2026-03-22",
        "original_language": "THAI",
        "tagline": "เตรียมขุดหนามในตัวออกมาฟาดฟัน เพื่อแย่งชิงวิมานในฝันมาครอบครอง.",
        "vote_average": 8.235,
        "vote_count": 23569,
        "runtime": 102,
    },
    
    {
        "_id": "2026006",
        "id": 2026006,
        "title": "Inside out 2",
        "overview": "ชีวิตของ Riley Anderson ในช่วงวัยรุ่น เมื่อเธอต้องเผชิญกับอารมณ์ใหม่ๆ และการเปลี่ยนแปลงในชีวิต",
        "poster_path": "https://image.tmdb.org/t/p/original/xeqXXTE1Cd3qNaAEOT6qbhhCsgJ.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/yVgW3PW5Xxk4PHCDzd9f31Aejg5.jpg",
        "genres": [
            { "id": 28, "name": "Comedy" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Family" }
        ],
        "casts": flickCastsData,
        "release_date": "2026-04-03",
        "original_language": "ENGLISH",
        "tagline": "Make room for new emotions.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 96,
    },
    {
        "_id": "2026007",
        "id": 2026007,
        "title": "Don't Breathe",
        "overview": "ร็อคกี้ อเล็กซ์ และ มอนนี่ แก๊งหัวขโมยในเมืองดีทรอยต์ ได้วางแผนปล้นบ้านหลังหนึ่งซึ่งเป็นที่อยู่อาศัยของชายชราตาบอดคนหนึ่ง ที่ดูภายนอกดูอ่อนแอและน่าสงสาร พวกเขาเชื่อว่าเป็นเป้าหมายที่ง่ายและจะได้รับเงินก้อนโตเพื่อใช้ตั้งตัว",
        "poster_path": "https://image.tmdb.org/t/p/original/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/dItuxD2MjMyrMykhHkLDHdZR7Ei.jpg",
        "genres": [
            { "id": 28, "name": "Horror" },
            { "id": 878, "name": "Thriller" },
            { "id": 12, "name": "Crime" }
        ],
        "casts": flickCastsData,
        "release_date": "2026-03-25",
        "original_language": "ENGLISH",
        "tagline": "Don't move. Don't blink. Don't even breathe.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 90,
    },
    {
        "_id": "2026005",
        "id": 2026005,
        "title": "รักเรายังคิดถึง",
        "overview": "18 ปีก่อนที่ไต้หวัน จิมมี่ ได้พบเจอกับ อามิ พวกเขาทั้งสองได้ทำงานด้วยกันตลอดช่วงฤดูร้อน และจิมมี่ก็ได้ตกหลุมรักเธอ แต่จู่ ๆ อามิก็ตัดสินใจว่าจะเดินทางกลับญี่ปุ่นเวลาผ่านไปหลายปี จิมมี่ก็ได้เจอโปสการ์ดที่เขาได้รับจากอามิ เมื่อ 18 ปีก่อน ความทรงจำของรักครั้งแรกของเขาก็ได้ย้อนกลับมา และทำให้เขาตัดสินใจเดินทางมาญี่ปุ่นเพื่อตามหารักแรกที่เขาไม่เคยได้พูดคำว่ารักบอกเธอ",
        "poster_path": "https://image.tmdb.org/t/p/original/6EIyKWUcE6S4g3KxlbeJUXLFLIX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/qu27OPbaIO9OBj3zd4h9bdS6e58.jpg",
        "genres": [
            { "id": 10751, "name": "Romaintic" },
            { "id": 35, "name": "Drama" },
        ],
        "casts": flickCastsData,
        "release_date": "2026-03-31",
        "original_language": "CHINESE (TRADITIONAL)",
        "tagline": "18 years ago, the first love began...",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 124,
    },
    
]

export const flickDateTimeData = {
    "2026-04-25": [
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T07:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2026-04-26": [
        { "time": "2026-04-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2026-04-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2026-04-26T07:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2026-04-27": [
        { "time": "2026-04-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2026-04-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2026-04-27T07:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2026-04-28": [
        { "time": "2026-04-28T03:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2026-04-28T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2026-04-28T07:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const flickDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const flickBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Flick", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Flick", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Flick", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]
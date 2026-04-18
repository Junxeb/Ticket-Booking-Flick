import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParadiseSection = () => {

    // ใช้ useNavigate เพื่อให้สามารถนำทางไปยัง movies ได้เมื่อผู้ใช้คลิกที่ปุ่ม "Explore Movies"
    const navigate = useNavigate();

    // ส่วนนี้เป็นส่วนของหน้าแรกที่แสดงข้อมูลเกี่ยวกับภาพยนตร์เรื่อง "The Paradise of Thorns" 
    return (
        <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 
        bg-[url("/Paradiseofthornsbg.jpg")] bg-cover bg-center h-screen'>
            <img src={assets.gdhLogo} alt="" className="max-h-20 lg:h-20 mt-20 " />

            <h1 className="text-5xl md:text-[69px] md:leading-18 font-semibold
            max-w-110">The Paradise <br /> of Thorns</h1>

            <div className="flex items-center gap-4 text-gray-300">
                <span>Drama | Thriller </span>
                <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4.5 h-4.5"/>2024
                </div>
                <div className="flex items-center gap-1">
                    <ClockIcon className="w-4.5 h-4.5"/>2h 5m
                </div>
            </div>

            <p className="max-w-md text-gray-300">หลังจาก "เสก" เสียชีวิตลง "ทองคำ" 
            คู่รักหนุ่มผู้ลงทุนลงแรงสร้างบ้านและสวนทุเรียนไว้ให้เสก กลับต้องรับมือกับแม่และน้องสาวของเสก
            ที่เข้ามาจัดการและแย่งชิงสมบัติ ทำให้ทองคำต้องทำทุกวิถีทางเพื่อปกป้อง "วิมาน" ที่ควรจะเป็นของเขา</p>

            <button onClick={() => navigate('/movies')} className="flex items-center gap-1 px-6 py-3 
            text-sm bg-red hover:bg-darkred transition rounded-full font-medium cursor-pointer">
                Explore Movies
                <ArrowRight className="w-5 h-5"/>
            </button>

        </div>
    )
}

export default ParadiseSection;
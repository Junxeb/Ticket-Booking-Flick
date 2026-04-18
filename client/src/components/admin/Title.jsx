import React from "react";

// แสดงชื่อหัวเรื่องที่หน้า admin
const Title = ({ text1, text2 }) => {
    return (
        <h1 className="font-medium text-2xl">
            {text1}<span className="ml-2 underline text-red">{text2}</span>

        </h1>
    )
}
export default Title;
// K Converter
// เปลี่ยนค่าการโหวตจาก หมื่น แสดงเป็น k
export const kConverter = (num) => {
    if (num >= 1000) {
        if (num / 1000) {
            return (num  / 1000).toFixed(1) + "k"
        } else {
            return num
        }
    }
}
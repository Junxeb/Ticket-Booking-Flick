// เปลี่ยนชื่อ วัน เดือน ปี และเวลาในตั๋ว
export const dateFormat = (date) => {
    return new Date(date).toLocaleString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
}
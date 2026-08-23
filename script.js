// 1. تحديث اسم الراسل (قم بتغيير الاسم هنا)
document.getElementById('myName').textContent = "اسمك هنا";

// 2. العداد التنازلي (قم بتغيير التاريخ لتاريخ عيد ميلادها)
const birthdayDate = new Date("2026-12-31T00:00:00").getTime(); // غير التاريخ هنا (السنة-الشار-اليوم)

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.countdown-box').innerHTML = "<h2>🎉 اليوم هو عيد الميلاد! 🎉</h2>";
        return;
    }

    document.getElementById("days").innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById("hours").innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById("minutes").innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById("seconds").innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}, 1000);

// 3. وظائف الأزرار
function showLove() {
    document.getElementById('birthdayScreen').style.display = 'flex';
}

function closeBirthday() {
    document.getElementById('birthdayScreen').style.display = 'none';
}

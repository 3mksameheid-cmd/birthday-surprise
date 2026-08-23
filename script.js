// 1. تحديث اسم الراسل (اكتب اسمك هنا)
document.getElementById('myName').textContent = "اكتب اسمك هنا";

// 2. العداد التنازلي: مضبوط على نهاية يوم بكرة (24 أغسطس 2026، الساعة 11:59:59 مساءً)
const birthdayDate = new Date("2026-08-24T23:59:59").getTime(); 

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // لما الوقت يخلص
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.countdown-box').innerHTML = "<h2>🎉 كل سنة وانتي طيبة يا رودينا! 🎉</h2>";
        return;
    }

    // حساب الأيام والساعات والدقائق والثواني
    document.getElementById("days").innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById("hours").innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById("minutes").innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById("seconds").innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}, 1000);

// 3. وظائف الأزرار لفتح الشاشة
function showLove() {
    document.getElementById('birthdayScreen').style.display = 'flex';
}

function closeBirthday() {
    document.getElementById('birthdayScreen').style.display = 'none';
}

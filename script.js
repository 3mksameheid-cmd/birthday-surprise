// =====================================
// بيانات الموقع
// =====================================

const girlName = "رودينا";
const myName = "سامح";

// عيد ميلاد رودينا
// 24 أغسطس 2026 - الساعة 12:00 صباحًا
const birthdayDate = new Date("2026-08-24T00:00:00");


// =====================================
// وضع الأسماء داخل الموقع
// =====================================

document.getElementById("girlName").textContent = girlName;
document.getElementById("birthdayGirlName").textContent = girlName;
document.getElementById("myName").textContent = myName;


// =====================================
// العد التنازلي
// =====================================

function updateCountdown() {

    const now = new Date();
    const difference = birthdayDate - now;

    // لو عيد الميلاد وصل
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        // إظهار شاشة عيد الميلاد
        document.getElementById("birthdayScreen").style.display = "flex";

        // تشغيل الاحتفال
        createConfetti();

        clearInterval(countdownInterval);

        return;
    }


    // حساب الأيام
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    // حساب الساعات
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    // حساب الدقائق
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    // حساب الثواني
    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // عرض العد التنازلي

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// تشغيل العد التنازلي كل ثانية
const countdownInterval = setInterval(
    updateCountdown,
    1000
);


// تشغيله فورًا بدون انتظار ثانية
updateCountdown();


// =====================================
// زر "اضغطي هنا ❤️"
// =====================================

function showLove() {

    // إنشاء 30 قلب
    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "floating-heart";

            heart.innerHTML = "❤️";


            // مكان القلب
            heart.style.left =
                Math.random() * 100 + "vw";


            // حجم القلب
            heart.style.fontSize =
                Math.random() * 35 + 25 + "px";


            // سرعة الحركة
            heart.style.animationDuration =
                Math.random() * 3 + 3 + "s";


            document.body.appendChild(heart);


            // حذف القلب بعد انتهاء الحركة
            setTimeout(() => {

                heart.remove();

            }, 7000);

        }, i * 80);
    }


    // الرسالة
    alert(
        "بصي يا رودينا، يمكن أنا مش دايمًا بعرف أقول اللي جوايا، بس بجد وجودك فارق معايا أكتر مما تتخيلي. كل سنة وانتي طيبة يا رودينا ❤️\n\nسامح"
    );
}


// =====================================
// زر فتح الرسالة
// =====================================

function closeBirthday() {

    // إخفاء شاشة عيد الميلاد
    document.getElementById(
        "birthdayScreen"
    ).style.display = "none";


    // تشغيل الأغنية
    const song = document.getElementById("song");

    if (song) {

        song.play().catch(() => {});

    }
}


// =====================================
// احتفال عيد الميلاد
// =====================================

function createConfetti() {

    // إنشاء 100 قلب ولمعة
    for (let i = 0; i < 100; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";


        // تنويع بين القلوب واللمعات
        heart.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "✨";


        // مكان البداية
        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom = "-30px";


        // حجم عشوائي
        heart.style.fontSize =
            Math.random() * 30 + 20 + "px";


        // سرعة عشوائية
        heart.style.animationDuration =
            Math.random() * 4 + 3 + "s";


        document.body.appendChild(heart);


        // إزالة العنصر
        setTimeout(() => {

            heart.remove();

        }, 8000);
    }
}


// =====================================
// قلوب مستمرة في الخلفية
// =====================================

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "♡";


    // مكان القلب
    heart.style.left =
        Math.random() * 100 + "vw";


    // حجم القلب
    heart.style.fontSize =
        Math.random() * 30 + 15 + "px";


    // سرعة الحركة
    heart.style.animationDuration =
        Math.random() * 6 + 6 + "s";


    document.body.appendChild(heart);


    // إزالة القلب
    setTimeout(() => {

        heart.remove();

    }, 12000);

}, 1200);

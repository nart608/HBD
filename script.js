const infoPage = document.getElementById('info-page');
const cakePage = document.getElementById('cake-page');
const letterPage = document.getElementById('letter-page');

const birthdateInput = document.getElementById('birthdate');
const prepareCakeBtn = document.getElementById('prepare-cake-btn');
const ageSummary = document.getElementById('age-summary');
const happyBdayText = document.getElementById('happy-bday-text');

const cakeImg = document.getElementById('cake-img');
const messageText = document.getElementById('message-text');

// ===== เลือก element ของการ์ดแบบใหม่ =====
const letter = document.querySelector('.letter');
const letterInstruction = document.getElementById('letter-instruction');
// ==========================================

const cakeImageUrl = 'เค้กชมพู.png'; // <--- แทนที่ด้วย URL รูปเค้กของคุณตรงนี้!

// ===== ปรับปรุงข้อความอวยพรให้ตรงกับรูปตัวอย่าง =====
const messageTemplates = [
    "สุขสันต์วันเกิดนะคนเก่ง! ขอบคุณที่เกิดมานะ ขอให้โลกใบนี้ใจดีกับเธอเสมอ ขอให้ทุกๆ วันมีแต่รอยยิ้มและเสียงหัวเราะนะ",
    "เธออายุเพิ่มขึ้นอีกปีแล้วนะ แต่ยังน่ารักเหมือนเดิมเลย! ขอให้ปีนี้เป็นปีที่เต็มไปด้วยความสุข สิ่งดีๆ และความฝันที่เธออยากทำ ขอให้เธอมีแรงกายแรงใจที่พร้อมสู้กับทุกเรื่องที่เข้ามานะ",
    "Happy Birthday! ขอให้วันเกิดปีนี้มีแต่เรื่องเซอร์ไพรส์ดีๆ เข้ามาในชีวิต ขอให้ทุกเส้นทางที่เลือกเดินนำไปสู่ความสำเร็จและความสุขที่ตามหานะ เราจะคอยเป็นกำลังใจให้ตรงนี้เสมอ"
];
// =======================================================

birthdateInput.addEventListener('blur', () => {
    const input = birthdateInput.value;
    const date = new Date(input);

    if (!isNaN(date.getTime())) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        birthdateInput.value = `${year}-${month}-${day}`;
    }
});

prepareCakeBtn.addEventListener('click', () => {
    const birthdate = new Date(birthdateInput.value);
    if (isNaN(birthdate.getTime())) {
        ageSummary.textContent = "กรุณากรอกวันเกิดให้ถูกต้อง!";
        return;
    }

    const today = new Date();
    const ageInYears = today.getFullYear() - birthdate.getFullYear();
    const ageInDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));

    ageSummary.textContent = `คุณอายุ ${ageInYears} ปี และเกิดมาแล้ว ${ageInDays} วัน!`;
    cakeImg.src = cakeImageUrl;
    happyBdayText.textContent = "Happy Birthday!";

    infoPage.style.display = 'none';
    cakePage.style.display = 'flex';
});

cakeImg.addEventListener('click', () => {
    cakePage.style.display = 'none';
    letterPage.style.display = 'flex';
});

// ===== Event Listener สำหรับการ์ดแบบใหม่ (เหมือนเดิม แต่ทำงานกับดีไซน์ใหม่) =====
let isLetterOpened = false;

letter.addEventListener('click', () => {
    if (!isLetterOpened) {
        const randomMessage = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
        messageText.textContent = randomMessage.replace("! ", "!\n"); // ลองเพิ่มขึ้นบรรทัดใหม่
        
        letter.classList.add('open');
        isLetterOpened = true;

        letterInstruction.textContent = "หวังว่าเธอจะชอบนะ!";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const codeDigits = document.querySelectorAll('.code-digit');
    const keys = document.querySelectorAll('.key');
    const clearKey = document.getElementById('clear-key');
    const enterKey = document.getElementById('enter-key');
    const unlockButton = document.getElementById('unlock-button');

    let currentCode = []; // เก็บตัวเลขที่ผู้ใช้กด
    const correctCode = ['1', '2', '3', '4']; // <--- กำหนดรหัสลับที่ถูกต้องตรงนี้

    // อัพเดทการแสดงผลตัวเลข
    function updateCodeDisplay() {
        codeDigits.forEach((digit, index) => {
            digit.textContent = currentCode[index] || '';
        });
    }

    // จัดการการกดปุ่มตัวเลข
    keys.forEach(key => {
        if (!key.classList.contains('special-key')) {
            key.addEventListener('click', () => {
                if (currentCode.length < correctCode.length) {
                    currentCode.push(key.textContent);
                    updateCodeDisplay();
                }
            });
        }
    });

    // จัดการปุ่ม Backspace (ลบตัวสุดท้าย)
    clearKey.addEventListener('click', () => {
        currentCode.pop();
        updateCodeDisplay();
    });

    // จัดการปุ่ม Enter (ตรวจสอบรหัส)
    enterKey.addEventListener('click', checkCode);
    unlockButton.addEventListener('click', checkCode);

    function checkCode() {
        if (currentCode.length === correctCode.length) {
            const enteredCode = currentCode.join('');
            const expectedCode = correctCode.join('');

            if (enteredCode === expectedCode) {
                alert('รหัสถูกต้อง! ของขวัญรอคุณอยู่แล้ว 😊');
                // เปลี่ยนไปหน้าถัดไป หรือแสดงของขวัญ
                window.location.href = 'page3.html'; // <--- เปลี่ยนไปหน้าของขวัญ
            } else {
                alert('รหัสไม่ถูกต้อง ลองใหม่อีกครั้งนะ!');
                currentCode = [];
                updateCodeDisplay();
            }
        } else {
            alert('กรุณาใส่รหัสให้ครบ 4 หลักนะ');
        }
    }

    updateCodeDisplay();
});


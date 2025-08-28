const startButton = document.getElementById('startButton');

startButton.addEventListener('click', function(event) {
    event.preventDefault(); // ป้องกันการเปลี่ยนหน้าทันที

    // --- ส่วนของ Ripple Effect ---
    const rect = startButton.getBoundingClientRect();
    const ripple = document.createElement('span');
    
    // คำนวณขนาดและตำแหน่งของคลื่น
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // กำหนดสไตล์และคลาสให้กับ element ของคลื่น
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    // นำคลื่นไปใส่ในปุ่ม
    startButton.appendChild(ripple);
    // ----------------------------

    // สั่งให้หน้าเว็บเริ่มจางหาย
    document.body.classList.add('fade-out');

    // รอให้แอนิเมชันจางหายทำงานจนจบ (0.5 วินาที) แล้วค่อยเปลี่ยนหน้า
    setTimeout(function() {
        window.location.href = 'page2.html';
    }, 500);

    // ลบ element ของคลื่นออกไปเมื่อแอนิเมชันจบ เพื่อไม่ให้รกหน้าเว็บ
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
const scrollButton = document.getElementById('scrollButton');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

// Hàm cập nhật trạng thái nút cuộn
function updateScrollButton() {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

    if (isAtBottom) {
        scrollButton.textContent = '↑';
        scrollButton.title = 'Cuộn lên đầu trang';
    } else {
        scrollButton.textContent = '↓';
        scrollButton.title = 'Cuộn xuống cuối trang';
    }
}

// Sự kiện click cho nút cuộn
scrollButton.addEventListener('click', function () {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', updateScrollButton);

// Cập nhật trạng thái nút khi trang tải xong
updateScrollButton();

// Dark mode và cập nhật văn bản nút
toggleDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Cập nhật văn bản nút
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeButton.textContent = 'Light Mode';
    } else {
        toggleDarkModeButton.textContent = 'Dark Mode';
    }
});

// Contact me
document.getElementById('contactMe').addEventListener('click', function () {
    window.location.href = 'mailto:leviethung17112003@gmail.com';
});

// Hiệu ứng fade-in khi cuộn trang
const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
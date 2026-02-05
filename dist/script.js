// 添加到现有的JavaScript中
// 返回顶部按钮
const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backToTopButton);

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// 点击返回顶部
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
{
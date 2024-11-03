document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 活动卡片悬停效果
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 当前活动的参与按钮
    const joinButtons = document.querySelectorAll('.join-now');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('感谢您的参与！');
        });
    });

    // 往期活动的查看详情按钮
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('查看活动详情');
        });
    });
}); 
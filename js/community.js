document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 用户故事卡片悬停效果
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 社区讨论项悬停效果
    const discussionItems = document.querySelectorAll('.discussion-item');
    
    discussionItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
}); 
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 联系信息项悬停效果
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // 表单提交效果
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快与您联系！');
        form.reset();
    });

    // 初始化 Leaflet 地图
    if (typeof L !== 'undefined' && document.getElementById('companyMap')) {
        const map = L.map('companyMap', {
            center: [31.2304, 121.4737], // 上海坐标
            zoom: 13,
            scrollWheelZoom: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([31.2304, 121.4737]).addTo(map)
            .bindPopup('海飞丝上海总部')
            .openPopup();
    }
}); 
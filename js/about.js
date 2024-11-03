document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 延迟加载地图
    const mapContainer = document.getElementById('worldMap');
    const mapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMap();
                observer.unobserve(mapContainer);
            }
        });
    }, { threshold: 0.1 });

    mapObserver.observe(mapContainer);

    function loadMap() {
        if (typeof L !== 'undefined') {
            const map = L.map('worldMap', {
                center: [20, 0],
                zoom: 2,
                scrollWheelZoom: false
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // 添加全球布局标记点
            const locations = [
                { lat: 40.7128, lng: -74.0060, name: "纽约总部" },
                { lat: 31.2304, lng: 121.4737, name: "上海研发中心" },
                { lat: 51.5074, lng: -0.1278, name: "伦敦分部" },
                { lat: -33.8688, lng: 151.2093, name: "悉尼办事处" }
            ];

            locations.forEach(location => {
                const marker = L.marker([location.lat, location.lng])
                    .bindPopup(`<b>${location.name}</b>`)
                    .addTo(map);

                marker.on('mouseover', function(e) {
                    this.openPopup();
                });
            });
        }
    }

    // 时间线动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // 数字增长动画
    function animateValue(element, start, end, duration) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        const timer = setInterval(function() {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const numberElements = document.querySelectorAll('.stat .number');
    
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = parseInt(element.getAttribute('data-value'));
                animateValue(element, 0, finalValue, 2000);
                statsObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.5
    });

    numberElements.forEach(element => {
        statsObserver.observe(element);
    });

    // 企业文化卡片动画
    const valueItems = document.querySelectorAll('.value-item');
    
    valueItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.color = '#0066cc';
            }
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.color = '';
            }
            item.style.transform = 'translateY(0)';
        });
    });

    // 研发实力图标动画
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.research-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
            item.style.backgroundColor = '#f8f9fa';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.research-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
            item.style.backgroundColor = '#fff';
        });
    });

    // 社会责任卡片动画
    const responsibilityItems = document.querySelectorAll('.responsibility-item');
    
    responsibilityItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
            item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // 加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 
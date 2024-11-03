document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 导航栏滚动效果
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        if (scrollTop === 0) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // 搜索框效果
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
        <div class="search-container">
            <input type="text" placeholder="搜索产品...">
            <button class="close-search"><i class="fas fa-times"></i></button>
        </div>
    `;
    document.body.appendChild(searchOverlay);

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchOverlay.querySelector('input').focus();
    });

    searchOverlay.querySelector('.close-search').addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // 产品卡片悬停效果增强
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.hover-info').style.opacity = '1';
            card.querySelector('.hover-info').style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.hover-info').style.opacity = '0';
            card.querySelector('.hover-info').style.transform = 'translateY(10px)';
        });
    });

    // 数字增长动画增强
    const stats = document.querySelectorAll('.number');
    
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateValue(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    // 平滑滚动效果
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

    // 返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 用户评价轮播增强
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    // 添加导航点
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'testimonial-dots';
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    testimonialSlider.appendChild(dotsContainer);

    function showTestimonial(index) {
        testimonials[currentTestimonial].classList.remove('active');
        document.querySelectorAll('.testimonial-dots .dot')[currentTestimonial].classList.remove('active');
        
        currentTestimonial = index;
        
        testimonials[currentTestimonial].classList.add('active');
        document.querySelectorAll('.testimonial-dots .dot')[currentTestimonial].classList.add('active');
    }

    // 自动轮播
    setInterval(() => {
        showTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);
}); 
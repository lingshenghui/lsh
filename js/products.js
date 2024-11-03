document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // 价格滑块
    const priceSlider = document.querySelector('.price-slider input');
    const priceValue = document.querySelector('.price-value');

    priceSlider.addEventListener('input', function() {
        priceValue.textContent = `¥${this.value}`;
    });

    // 产品筛选
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        // 实现产品筛选逻辑
        const selectedFilters = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        // 这里添加筛选逻辑
    }

    // 快速查看功能
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const productModal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            productModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function() {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // 点击模态框外部关闭
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 产品图片画廊
    const mainImage = document.querySelector('.product-gallery img');
    const thumbnails = document.querySelectorAll('.thumbnail-list img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src.replace('-thumb', '-large');
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 数量选择器
    const quantityInput = document.querySelector('.quantity-selector input');
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');

    decreaseBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // 分页功能
    const pageNumbers = document.querySelectorAll('.page-numbers span');
    const prevPage = document.querySelector('.prev-page');
    const nextPage = document.querySelector('.next-page');

    pageNumbers.forEach(number => {
        number.addEventListener('click', function() {
            pageNumbers.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            // 这里添加页面切换逻辑
        });
    });

    prevPage.addEventListener('click', function() {
        const currentPage = document.querySelector('.page-numbers span.active');
        const prevElement = currentPage.previousElementSibling;
        if (prevElement) {
            currentPage.classList.remove('active');
            prevElement.classList.add('active');
            // 这里添加页面切换逻辑
        }
    });

    nextPage.addEventListener('click', function() {
        const currentPage = document.querySelector('.page-numbers span.active');
        const nextElement = currentPage.nextElementSibling;
        if (nextElement) {
            currentPage.classList.remove('active');
            nextElement.classList.add('active');
            // 这里添加页面切换逻辑
        }
    });

    // 添加到购物车动画
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('added');
            button.textContent = '已加入购物车';
            
            setTimeout(() => {
                button.classList.remove('added');
                button.textContent = '加入购物车';
            }, 2000);
        });
    });
}); 
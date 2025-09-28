// 现代化工业网站交互脚本 - 简化版

// 页面加载完成后立即隐藏加载器
window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 500);
});

// DOM加载完成后初始化功能
document.addEventListener('DOMContentLoaded', function() {
    // 隐藏加载器（备用方案）
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 2000);

    // 初始化主题切换
    initTheme();
    
    // 初始化导航
    initNavigation();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 初始化产品卡片动画
    initProductCards();
});

// 主题切换功能
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // 检查本地存储的主题或系统偏好
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else {
        html.classList.toggle('dark', systemDark);
    }
    
    // 主题切换按钮点击事件
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            html.classList.toggle('dark', e.matches);
        }
    });
}

// 导航功能
function initNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭移动端菜单
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
    
    // 为产品卡片添加滚动动画类
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.classList.add('scroll-animate');
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // 监听滚动
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100');
            }
        });
        
        // 点击返回顶部
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 产品卡片交互
function initProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// 联系电话点击统计
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('电话联系被点击:', this.href);
        // 这里可以添加统计代码
    });
});

// 页面性能优化
function optimizePerformance() {
    // 预加载关键资源
    const criticalImages = [
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=NORGREN+电磁阀+1',
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=NORGREN+减压阀+2',
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=NORGREN+气缸+3'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 确保即使出错也隐藏加载器
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// 初始化性能优化
optimizePerformance();

// 获奖荣誉滑动功能
function initAwardsSlider() {
    const slider = document.getElementById('awards-slider');
    const prevBtn = document.getElementById('awards-prev');
    const nextBtn = document.getElementById('awards-next');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const cardWidth = 320; // 卡片宽度 + 间距
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
    
    // 自动隐藏/显示按钮
    function updateButtons() {
        const scrollLeft = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        
        prevBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        nextBtn.style.opacity = scrollLeft < maxScroll ? '1' : '0.5';
    }
    
    slider.addEventListener('scroll', updateButtons);
    updateButtons(); // 初始化按钮状态
}

// 产品轮播功能
function initProductCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!slides.length || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    let isAnimating = false;
    
    // 显示指定幻灯片
    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        // 隐藏当前幻灯片
        slides[currentSlide].style.opacity = '0';
        
        // 更新指示器
        indicators[currentSlide].classList.remove('active');
        indicators[index].classList.add('active');
        
        // 显示新幻灯片
        setTimeout(() => {
            slides[currentSlide].style.opacity = '0';
            slides[index].style.opacity = '1';
            currentSlide = index;
            
            // 重新触发文字动画
            const currentSlideElement = slides[currentSlide];
            const h2 = currentSlideElement.querySelector('h2');
            const p = currentSlideElement.querySelector('p');
            const flex = currentSlideElement.querySelector('.flex');
            
            if (h2) {
                h2.style.animation = 'none';
                h2.offsetHeight; // 触发重排
                h2.style.animation = 'slideInUp 0.8s ease-out 0.2s both';
            }
            if (p) {
                p.style.animation = 'none';
                p.offsetHeight;
                p.style.animation = 'slideInUp 0.8s ease-out 0.4s both';
            }
            if (flex) {
                flex.style.animation = 'none';
                flex.offsetHeight;
                flex.style.animation = 'slideInUp 0.8s ease-out 0.6s both';
            }
            
            isAnimating = false;
        }, 300);
    }
    
    // 下一张
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // 上一张
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // 绑定事件
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // 指示器点击
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentSlide) {
                showSlide(index);
            }
        });
    });
    
    // 自动播放
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停自动播放
    const carousel = document.getElementById('product-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化，确保DOM完全加载
    setTimeout(() => {
        initAwardsSlider();
        initProductCarousel();
    }, 100);
});
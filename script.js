/**
 * Plant Cell Atlas - Interactive Scripts
 */

// ============================================
// Internationalization (i18n) System
// ============================================
const translations = {
    zh: {
        // Navigation
        'nav.about': '关于我们',
        'nav.atlas': '细胞图谱',
        'nav.research': '研究方向',
        'nav.publications': '发表论文',
        'nav.team': '团队',
        'nav.contact': '联系方式',
        
        // Hero
        'hero.subtitle': '探索植物单细胞世界的奥秘<br>构建全面的植物细胞图谱',
        'hero.browseAtlas': '浏览图谱',
        'hero.learnMore': '了解更多',
        'hero.scrollDown': '向下滚动',
        
        // About
        'about.title': '关于 Plant Cell Atlas',
        'about.lead': 'Plant Cell Atlas 项目致力于构建全面、高分辨率的植物单细胞转录组图谱，揭示植物细胞的多样性与复杂性。',
        'about.desc1': '我们运用前沿的单细胞测序技术，系统性地解析不同植物物种、不同发育阶段和不同组织器官中的细胞类型组成，为理解植物生长发育、环境响应和进化提供重要的细胞层面的洞见。',
        'about.desc2': '本项目由中国科学院分子植物科学卓越创新中心 (CEMPS) Wang Lab 主持，与国内外多个研究团队合作推进。',
        'about.stats.species': '植物物种',
        'about.stats.cells': '单细胞数据',
        'about.stats.cellTypes': '细胞类型',
        'about.stats.partners': '合作机构',
        
        // Atlas
        'atlas.title': '细胞图谱数据库',
        'atlas.desc': '探索我们发表的植物单细胞数据集',
        'atlas.explore': '探索图谱 →',
        'atlas.athRoot.desc': '拟南芥根部发育的单细胞转录组图谱',
        'atlas.athShoot.desc': '拟南芥茎尖生长点的单细胞图谱',
        'atlas.mpCensus.desc': '地钱成熟与衰老轨迹的单细胞图谱',
        
        // Research
        'research.title': '研究方向',
        'research.desc': '从"单点突破"到"多点开花"，再到"系统整合"的研究范式',
        'research.r1.tag': 'Developmental Atlases',
        'research.r1.title': '植物细胞发育的"时空图谱"',
        'research.r1.lead': '解析植物关键器官在单细胞水平上的发育逻辑，从模式植物向农作物延伸。',
        'research.r1.point1': '<strong>模式植物研究</strong>：通过对拟南芥根部和茎尖生长点的单细胞测序，首次在细胞分辨率下描绘发育完整景观，解析细胞命运决定因素',
        'research.r1.point2': '<strong>农作物应用</strong>：将研究扩展至水稻，通过 scRNA-seq 与 ATAC-seq 整合分析，揭示单子叶植物根系的细胞分化轨迹',
        'research.r1.point3': '<strong>成熟与衰老</strong>：通过对苔藓植物地钱的研究，探索植物从成熟到衰老的单细胞时序变化',
        'research.r2.tag': 'Evolution & Unified Atlas',
        'research.r2.title': '跨物种演化与"植物细胞大图谱"',
        'research.r2.lead': '寻找不同植物物种之间细胞类型的内在联系，回答植物"如何演化"的宏大命题。',
        'research.r2.point1': '<strong>统一图谱构建</strong>：构建涵盖多种维管植物的"统一细胞图谱"（Unified Cell Atlas），识别不同物种间共有的"基础基因"',
        'research.r2.point2': '<strong>细胞演化探索</strong>：比较蕨类、苔藓及被子植物的细胞类型，探索维管系统在亿万年演化中的起源规律',
        'research.r2.point3': '<strong>基因挖掘</strong>：利用跨物种图谱数据，加速发现对植物发育至关重要的保守功能基因',
        'research.r3.tag': 'Methodological Innovation',
        'research.r3.title': '针对复杂植物样本的"技术破局"',
        'research.r3.lead': '针对植物细胞壁、组织难解离、样本保存困难等痛点，开展技术攻关。',
        'research.r3.point1': '<strong>FX-Cell 方法学</strong>：开发 FX-Cell 技术，解决"难消化"植物样本及"超低温冷冻"样本的单细胞测序难题，扩展技术适用范围',
        'research.r3.point2': '<strong>多组学整合</strong>：整合转录组、表观组及空间信息，实现对植物细胞状态的立体刻画',
        
        // Publications
        'publications.title': '代表性论文',
        'publications.viewMore': '查看更多',
        
        // Team
        'team.title': '研究团队',
        'team.desc': '来自 CEMPS 的优秀科研人员',
        'team.pi.role': '课题组长 / 研究员',
        'team.pi.focus': '单细胞组学与植物发育生物学',
        'team.postdoc.name': '博士后研究员',
        'team.postdoc.role': '博士后',
        'team.postdoc.focus': '生物信息学与数据分析',
        'team.phd.name': '博士研究生',
        'team.phd.role': '研究生',
        'team.phd.focus': '单细胞测序技术开发',
        'team.ra.name': '科研助理',
        'team.ra.role': '实验技术员',
        'team.ra.focus': '实验室管理与技术支持',
        
        // Contact
        'contact.title': '联系我们',
        'contact.desc': '欢迎对植物单细胞研究感兴趣的研究者与我们合作交流。我们期待与您共同推进植物细胞图谱的构建。',
        'contact.address': '地址',
        'contact.addressValue': '上海市徐汇区枫林路300号<br>中国科学院分子植物科学卓越创新中心',
        'contact.email': '邮箱',
        'contact.form.name': '姓名',
        'contact.form.email': '邮箱',
        'contact.form.affiliation': '单位',
        'contact.form.message': '留言',
        'contact.form.submit': '发送消息',
        
        // Footer
        'footer.text': '© 2025 WangLab @ CEMPS. All rights reserved.<br>中国科学院分子植物科学卓越创新中心',
        
        // Form messages
        'form.sending': '正在发送...',
        'form.sent': '✓ 已发送',
        'form.subject': 'Plant Cell Atlas 网站咨询',
        'form.nameLabel': '姓名',
        'form.emailLabel': '邮箱',
        'form.affiliationLabel': '单位',
        'form.affiliationEmpty': '未填写',
        'form.messageLabel': '留言内容'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.atlas': 'Cell Atlas',
        'nav.research': 'Research',
        'nav.publications': 'Publications',
        'nav.team': 'Team',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.subtitle': 'Exploring the mysteries of plant single-cell world<br>Building a comprehensive plant cell atlas',
        'hero.browseAtlas': 'Browse Atlas',
        'hero.learnMore': 'Learn More',
        'hero.scrollDown': 'Scroll Down',
        
        // About
        'about.title': 'About Plant Cell Atlas',
        'about.lead': 'The Plant Cell Atlas project is dedicated to building comprehensive, high-resolution single-cell transcriptomic atlases of plants, revealing the diversity and complexity of plant cells.',
        'about.desc1': 'Using cutting-edge single-cell sequencing technologies, we systematically analyze cell type compositions across different plant species, developmental stages, and tissues, providing crucial cellular-level insights for understanding plant development, environmental responses, and evolution.',
        'about.desc2': 'This project is led by Wang Lab at the Center for Excellence in Molecular Plant Sciences (CEMPS), Chinese Academy of Sciences, in collaboration with multiple research teams worldwide.',
        'about.stats.species': 'Plant Species',
        'about.stats.cells': 'Single Cells',
        'about.stats.cellTypes': 'Cell Types',
        'about.stats.partners': 'Partner Institutions',
        
        // Atlas
        'atlas.title': 'Cell Atlas Database',
        'atlas.desc': 'Explore our published plant single-cell datasets',
        'atlas.explore': 'Explore Atlas →',
        'atlas.athRoot.desc': 'Single-cell transcriptomic atlas of Arabidopsis root development',
        'atlas.athShoot.desc': 'Single-cell atlas of Arabidopsis vegetative shoot apex',
        'atlas.mpCensus.desc': 'Single-cell atlas of Marchantia polymorpha maturation and aging trajectory',
        
        // Research
        'research.title': 'Research Directions',
        'research.desc': 'From "single breakthrough" to "multi-point flowering" to "systematic integration"',
        'research.r1.tag': 'Developmental Atlases',
        'research.r1.title': 'Plant Cell Developmental "Spatiotemporal Atlases"',
        'research.r1.lead': 'Deciphering the developmental logic of key plant organs at single-cell resolution, extending from model plants to crops.',
        'research.r1.point1': '<strong>Model Plant Research</strong>: Single-cell sequencing of Arabidopsis root and shoot apex, first to depict the complete developmental landscape at cellular resolution and identify cell fate determinants',
        'research.r1.point2': '<strong>Crop Applications</strong>: Extended to rice through integrated scRNA-seq and ATAC-seq analysis, revealing cell differentiation trajectories in monocot roots',
        'research.r1.point3': '<strong>Maturation & Aging</strong>: Exploring single-cell temporal changes from maturation to senescence through studies on the moss Marchantia polymorpha',
        'research.r2.tag': 'Evolution & Unified Atlas',
        'research.r2.title': 'Cross-species Evolution & "Unified Plant Cell Atlas"',
        'research.r2.lead': 'Seeking intrinsic connections between cell types across different plant species, addressing the grand question of "how plants evolved."',
        'research.r2.point1': '<strong>Unified Atlas Construction</strong>: Building a "Unified Cell Atlas" covering multiple vascular plants, identifying "foundational genes" shared across species',
        'research.r2.point2': '<strong>Cellular Evolution</strong>: Comparing cell types across ferns, mosses, and angiosperms to explore the origin of vascular systems over billions of years',
        'research.r2.point3': '<strong>Gene Discovery</strong>: Leveraging cross-species atlas data to accelerate discovery of conserved functional genes critical for plant development',
        'research.r3.tag': 'Methodological Innovation',
        'research.r3.title': '"Technical Breakthroughs" for Complex Plant Samples',
        'research.r3.lead': 'Addressing challenges like plant cell walls, difficult tissue dissociation, and sample preservation.',
        'research.r3.point1': '<strong>FX-Cell Methodology</strong>: Developed FX-Cell technique to solve single-cell sequencing challenges for "hard-to-digest" and cryopreserved plant samples, expanding the applicability of the technology',
        'research.r3.point2': '<strong>Multi-omics Integration</strong>: Integrating transcriptomics, epigenomics, and spatial information to achieve comprehensive characterization of plant cell states',
        
        // Publications
        'publications.title': 'Representative Publications',
        'publications.viewMore': 'View More',
        
        // Team
        'team.title': 'Research Team',
        'team.desc': 'Outstanding researchers from CEMPS',
        'team.pi.role': 'Principal Investigator',
        'team.pi.focus': 'Single-cell Omics & Plant Developmental Biology',
        'team.postdoc.name': 'Postdoctoral Researcher',
        'team.postdoc.role': 'Postdoc',
        'team.postdoc.focus': 'Bioinformatics & Data Analysis',
        'team.phd.name': 'PhD Student',
        'team.phd.role': 'Graduate Student',
        'team.phd.focus': 'Single-cell Sequencing Technology Development',
        'team.ra.name': 'Research Assistant',
        'team.ra.role': 'Lab Technician',
        'team.ra.focus': 'Lab Management & Technical Support',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.desc': 'We welcome researchers interested in plant single-cell studies to collaborate with us. We look forward to advancing the construction of plant cell atlas together.',
        'contact.address': 'Address',
        'contact.addressValue': '300 Fenglin Road, Xuhui District, Shanghai<br>Center for Excellence in Molecular Plant Sciences, CAS',
        'contact.email': 'Email',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.affiliation': 'Affiliation',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        
        // Footer
        'footer.text': '© 2025 WangLab @ CEMPS. All rights reserved.<br>Center for Excellence in Molecular Plant Sciences, CAS',
        
        // Form messages
        'form.sending': 'Sending...',
        'form.sent': '✓ Sent',
        'form.subject': 'Plant Cell Atlas Website Inquiry',
        'form.nameLabel': 'Name',
        'form.emailLabel': 'Email',
        'form.affiliationLabel': 'Affiliation',
        'form.affiliationEmpty': 'Not provided',
        'form.messageLabel': 'Message'
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'zh';

// Get translation by key
function t(key) {
    return translations[currentLang][key] || key;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Switch language
function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    // Apply translations on load
    applyTranslations();
    
    // Language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
});

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-card, .atlas-card, .research-card, .pub-item, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Add animation class
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Navigation background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(13, 26, 15, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(13, 26, 15, 0.95), rgba(13, 26, 15, 0))';
        nav.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Stagger animation for grid items
const staggerItems = (selector, delay = 100) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * delay}ms`;
    });
};

staggerItems('.stat-card', 100);
staggerItems('.atlas-card', 80);
staggerItems('.research-card', 80);
staggerItems('.team-card', 100);

// Form submission handling (for GitHub Pages, we'll show a message)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Create mailto link as fallback for static sites
        const subject = encodeURIComponent(t('form.subject'));
        const body = encodeURIComponent(
            `${t('form.nameLabel')}: ${data.name}\n` +
            `${t('form.emailLabel')}: ${data.email}\n` +
            `${t('form.affiliationLabel')}: ${data.affiliation || t('form.affiliationEmpty')}\n\n` +
            `${t('form.messageLabel')}:\n${data.message}`
        );
        
        // Show success message
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = t('form.sending');
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = t('form.sent');
            btn.style.background = '#22c55e';
            
            // Open email client
            window.location.href = `mailto:wanglab@cemps.ac.cn?subject=${subject}&body=${body}`;
            
            // Reset form
            setTimeout(() => {
                this.reset();
                btn.textContent = t('contact.form.submit');
                btn.disabled = false;
                btn.style.background = '';
            }, 2000);
        }, 800);
    });
}

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            if (target >= 1000000) {
                element.textContent = (current / 1000000).toFixed(1) + 'M+';
            } else if (target >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'K+';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (target >= 1000000) {
                element.textContent = (target / 1000000).toFixed(0) + 'M+';
            } else {
                element.textContent = target + '+';
            }
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.count);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Parallax effect for hero cells
const cells = document.querySelectorAll('.cell');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            cells.forEach((cell, index) => {
                const speed = 0.05 + (index * 0.02);
                cell.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-text)';
        }
    });
});

console.log('🌱 Plant Cell Atlas website loaded successfully!');

/* ============ CONFIGURAÇÃO (edite aqui) ============ */

// ID do vídeo do YouTube do showreel (a parte depois de "v=" no link). Deixe vazio até o vídeo estar pronto.
const SHOWREEL_YOUTUBE_ID = '';

// Depoimentos reais. Cada item: { name, role, quote }. Enquanto a lista estiver vazia, a seção fica oculta.
const testimonials = [
    // { name: 'Nome', role: 'Cargo, Empresa', quote: 'Texto do depoimento.' }
];

/* ============ CONTEÚDO DOS PROJETOS ============ */

const projectData = {
    tatuape: {
        image: 'assets/img/project/tatuape.jpg',
        title: 'Tatuapé Conceito',
        tags: ['Artistas', 'Influenciadores', 'Vídeo', 'Edição'],
        pt: {
            category: 'Artistas e influenciadores / 2023 a 2024',
            intro: 'Conteúdo em vídeo para uma loja de roupas de griffe premium, feito junto com influenciadores e artistas. Cada gravação pensada para alcance e viralização.',
            facts: [
                ['Cliente', 'Tatuapé Conceito'],
                ['Meu papel', 'Produção de conteúdo digital com influenciadores'],
                ['Artistas', 'Rodrigo Faro, Charles do Bronx, Boca de 09, Lucas Tilty, Tamires e MC Ryan'],
                ['Resultado', 'Mais de 200 milhões de views. Um vídeo com 21,5 milhões.']
            ],
            soon: 'Vídeos deste projeto entram em breve'
        },
        en: {
            category: 'Artists and influencers / 2023 to 2024',
            intro: 'Video content for a premium designer clothing store, made with influencers and artists. Every shoot planned for reach and virality.',
            facts: [
                ['Client', 'Tatuapé Conceito'],
                ['My role', 'Digital content production with influencers'],
                ['Artists', 'Rodrigo Faro, Charles do Bronx, Boca de 09, Lucas Tilty, Tamires and MC Ryan'],
                ['Result', 'Over 200 million views. One video with 21.5 million.']
            ],
            soon: 'Videos from this project coming soon'
        }
    },
    porsche: {
        image: 'assets/img/project/porsche-1.jpg',
        title: 'Porsche 911 Carrera',
        tags: ['Foto', 'Automotivo', 'Detalhes', 'Interior'],
        gallery: ['assets/img/project/porsche-4.jpg', 'assets/img/project/porsche-5.jpg', 'assets/img/project/porsche-7.jpg'],
        pt: {
            category: 'Fotografia automotiva',
            intro: 'Ensaio de um Porsche 911 Carrera branco. Exterior, detalhes de acabamento e interior, com luz e enquadramento que destacam o desenho do carro.',
            facts: [
                ['Meu papel', 'Fotografia'],
                ['Entrega', '18 fotos em formato de post (1080x1350)']
            ]
        },
        en: {
            category: 'Automotive photography',
            intro: 'Photo shoot of a white Porsche 911 Carrera. Exterior, finish details and interior, with light and framing that show off the shape of the car.',
            facts: [
                ['My role', 'Photography'],
                ['Delivery', '18 photos in post format (1080x1350)']
            ]
        }
    },
    ace: {
        image: 'assets/img/project/ace.jpg',
        title: 'Carnaval SP',
        tags: ['Eventos', 'Cobertura', 'Pós-produção', 'Liderança'],
        pt: {
            category: 'Eventos / 2025 a 2026',
            intro: 'Cobertura do Carnaval de São Paulo dentro da Ace iGaming (B1), sob a minha liderança na produção e na pós-produção.',
            facts: [
                ['Cliente', 'Ace iGaming (B1)'],
                ['Meu papel', 'Head de produção audiovisual e pós-produção'],
                ['Equipe', '6 pessoas']
            ],
            soon: 'Vídeos deste projeto entram em breve'
        },
        en: {
            category: 'Events / 2025 to 2026',
            intro: 'Coverage of the São Paulo Carnival at Ace iGaming (B1), under my leadership in production and post-production.',
            facts: [
                ['Client', 'Ace iGaming (B1)'],
                ['My role', 'Head of audiovisual production and post-production'],
                ['Team', '6 people']
            ],
            soon: 'Videos from this project coming soon'
        }
    },
    studio: {
        image: 'assets/img/project/studio.jpg',
        title: 'Studio Pic Abstrato',
        tags: ['Vídeo', 'Motion', 'Direção'],
        pt: {
            category: 'Vídeo / 2018 até hoje',
            intro: 'Minha produtora, em atividade desde 2018, com trabalhos para marcas, artistas e o poder público.',
            facts: [
                ['Clientes', 'Magalu, Adidas, Claudia Leitte e Prefeitura de Guarulhos'],
                ['Meu papel', 'Fundador e produtor']
            ],
            soon: 'Vídeos deste projeto entram em breve'
        },
        en: {
            category: 'Video / 2018 to today',
            intro: 'My production company, active since 2018, with work for brands, artists and the public sector.',
            facts: [
                ['Clients', 'Magalu, Adidas, Claudia Leitte and the City of Guarulhos'],
                ['My role', 'Founder and producer']
            ],
            soon: 'Videos from this project coming soon'
        }
    }
};

const serviceData = {
    direcao: { number: '01',
        pt: { title: 'Direção audiovisual & estratégia', intro: 'Liderança de equipes, direção de set e planejamento editorial. Da concepção do roteiro à entrega de conteúdos orientados a dados e conversão.', details: ['Conceito criativo e roteiro', 'Direção de set e liderança de equipe', 'Planejamento editorial'] },
        en: { title: 'Audiovisual direction & strategy', intro: 'Team leadership, set direction and editorial planning. From the script concept to delivering content driven by data and conversion.', details: ['Creative concept and script', 'Set direction and team leadership', 'Editorial planning'] } },
    captacao: { number: '02',
        pt: { title: 'Captação de vídeo e fotografia', intro: 'Operação avançada de câmeras DSLR, drone, gimbal e smartphones. Montagem de set, iluminação (gaffer) e captação de áudio para qualquer formato.', details: ['Câmeras DSLR, drone, gimbal e smartphone', 'Montagem de set e iluminação', 'Captação de áudio'] },
        en: { title: 'Video and photo capture', intro: 'Advanced operation of DSLR cameras, drones, gimbals and smartphones. Set building, lighting (gaffer) and audio capture for any format.', details: ['DSLR, drone, gimbal and smartphone', 'Set building and lighting', 'Audio capture'] } },
    edicao: { number: '03',
        pt: { title: 'Pós-produção, motion & VFX', intro: 'Edição dinâmica, color grading e finalização de alto impacto. Criação de animações e motion design utilizando Premiere Pro e After Effects.', details: ['Edição dinâmica', 'Color grading e finalização', 'Motion design e VFX'] },
        en: { title: 'Post-production, motion & VFX', intro: 'Dynamic editing, color grading and high-impact finishing. Animation and motion design built in Premiere Pro and After Effects.', details: ['Dynamic editing', 'Color grading and finishing', 'Motion design and VFX'] } },
    ia: { number: '04',
        pt: { title: 'Inovação com inteligência artificial', intro: 'Automação de processos criativos e integração de ferramentas de I.A. na produção e roteirização, ganhando escala sem perder qualidade.', details: ['Vídeos com I.A, do roteiro ao arquivo final', 'Automação de processos criativos', 'Escala sem perder qualidade'] },
        en: { title: 'Innovation with artificial intelligence', intro: 'Automation of creative processes and AI tools integrated into production and scripting, gaining scale without losing quality.', details: ['AI video, from script to final file', 'Creative process automation', 'Scale without losing quality'] } },
    apps: { number: '05',
        pt: { title: 'Soluções digitais & gestão', intro: 'Desenvolvimento de dashboards e apps internos para controle de fluxo de trabalho, prazos e análise de performance (KPIs) do time.', details: ['Controle do fluxo de produção', 'Prazos e demandas do time', 'Dashboards e KPIs'] },
        en: { title: 'Digital solutions & management', intro: 'Dashboards and internal apps to control workflow, deadlines and team performance analysis (KPIs).', details: ['Production workflow control', 'Deadlines and team requests', 'Dashboards and KPIs'] } },
    eventos: { number: '06',
        pt: { title: 'Cobertura de eventos & transmissões', intro: 'Setups ágeis para coberturas de grande porte, transmissões ao vivo (lives) e ativações de marcas com entrega em tempo real.', details: ['Coberturas de grande porte', 'Transmissões ao vivo', 'Ativações de marcas'] },
        en: { title: 'Event coverage & live streaming', intro: 'Agile setups for large-scale coverage, live streams and brand activations with real-time delivery.', details: ['Large-scale coverage', 'Live streams', 'Brand activations'] } }
};

const UI = {
    pt: { similar: 'Quero um projeto parecido', talk: 'Falar sobre este serviço', what: 'O que eu faço', empty: 'O showreel está em edição e entra aqui em breve.', sending: 'Abrindo o WhatsApp com a sua mensagem…', wa: (n, c, m) => `Olá, Diego! Meu nome é ${n}${c ? ' (' + c + ')' : ''}.\n\n${m}`, close: 'Fechar' },
    en: { similar: 'I want a similar project', talk: 'Talk about this service', what: 'What I do', empty: 'The showreel is being edited and will be here soon.', sending: 'Opening WhatsApp with your message…', wa: (n, c, m) => `Hi Diego! My name is ${n}${c ? ' (' + c + ')' : ''}.\n\n${m}`, close: 'Close' }
};

/* ============ ESTADO: IDIOMA E TEMA ============ */

let lang = 'pt';
try { if (localStorage.getItem('ds-lang') === 'en') lang = 'en'; } catch (e) {}

function applyLang(l) {
    lang = l;
    try { localStorage.setItem('ds-lang', l); } catch (e) {}
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
    document.title = l === 'en' ? 'Diego dos Santos | Audiovisual Direction, Videomaker and Digital Marketing' : 'Diego dos Santos | Direção Audiovisual, Videomaker e Marketing Digital';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
        const k = el.getAttribute('data-i18n');
        el.innerHTML = l === 'en' && window.I18N.en[k] !== undefined ? window.I18N.en[k] : el.dataset.pt;
    });
    document.querySelectorAll('[data-lang-set]').forEach((b) => b.classList.toggle('active', b.dataset.langSet === l));
    document.querySelectorAll('.modal-close').forEach((b) => b.setAttribute('aria-label', UI[l].close));
    renderTestimonials();
}

function applyTheme(t) {
    document.body.classList.toggle('light-mode', t === 'light');
    try { localStorage.setItem('oa-theme', t); } catch (e) {}
    document.querySelectorAll('[data-theme-set]').forEach((b) => b.classList.toggle('active', b.dataset.themeSet === t));
}

/* ============ RENDER ============ */

function renderProject(key) {
    const data = projectData[key];
    if (!data) return;
    const c = data[lang];
    const facts = c.facts && c.facts.length ? `<dl class="project-facts">${c.facts.map((f) => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl>` : '';
    const gallery = data.gallery ? `<div class="project-gallery">${data.gallery.map((src) => `<img src="${src}" alt="${data.title}" loading="lazy" />`).join('')}</div>` : '';
    const soon = c.soon ? `<span class="soon-tag">${c.soon}</span>` : '';
    $('#projectModalBody').html(`<div class="project-detail-hero"><img src="${data.image}" alt="${data.title}" /><div class="project-detail-copy"><span class="modal-kicker">${c.category}</span><h2>${data.title}</h2><p>${c.intro}</p>${facts}<div class="detail-tags">${data.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>${soon}<div class="modal-links"><a href="#contact" data-bs-dismiss="modal">${UI[lang].similar} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></div></div>${gallery}`);
    bootstrap.Modal.getOrCreateInstance(document.getElementById('projectModal')).show();
}

function renderService(key) {
    const data = serviceData[key];
    if (!data) return;
    const c = data[lang];
    $('#serviceModalBody').html(`<article class="service-detail-content"><span class="modal-kicker">${UI[lang].what} / ${data.number}</span><h2>${c.title}</h2><p>${c.intro}</p><div class="service-detail-list">${c.details.map((d) => `<span><i class="fa-solid fa-arrow-up-right-from-square"></i>${d}</span>`).join('')}</div><a class="btn btn-accent" href="#contact" data-bs-dismiss="modal">${UI[lang].talk} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></article>`);
    bootstrap.Modal.getOrCreateInstance(document.getElementById('serviceModal')).show();
}

function renderTestimonials() {
    const section = document.getElementById('reviews');
    if (!section) return;
    if (!testimonials.length) { section.hidden = true; return; }
    section.hidden = false;
    const inner = document.getElementById('testimonialInner');
    inner.innerHTML = testimonials.map((t, i) => {
        const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
        return `<div class="carousel-item${i === 0 ? ' active' : ''}"><blockquote>“${t.quote}”</blockquote><div class="quote-author"><span class="author-avatar">${initials}</span><div><strong>${t.name}</strong><small>${t.role}</small></div></div></div>`;
    }).join('');
    const el = document.getElementById('testimonialCarousel');
    bootstrap.Carousel.getOrCreateInstance(el, { ride: testimonials.length > 1 ? 'carousel' : false });
    el.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach((b) => { b.style.display = testimonials.length > 1 ? '' : 'none'; });
}

function openShowreel() {
    const frame = document.getElementById('showreelFrame');
    if (SHOWREEL_YOUTUBE_ID) {
        frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${SHOWREEL_YOUTUBE_ID}?autoplay=1&rel=0" title="Showreel" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        frame.classList.remove('ratio', 'ratio-16x9');
        frame.innerHTML = `<div class="showreel-empty">${UI[lang].empty}</div>`;
    }
    $.magnificPopup.open({
        items: { src: '#showreel-modal', type: 'inline' },
        mainClass: 'mfp-fade',
        removalDelay: 250,
        callbacks: {
            close: function () {
                frame.innerHTML = '';
                frame.classList.add('ratio', 'ratio-16x9');
            }
        }
    });
}

/* ============ INICIALIZAÇÃO ============ */

$(function () {
    AOS.init({ once: true, offset: 75, duration: 760, easing: 'cubic-bezier(.23,1,.32,1)' });
    $('body').addClass('aos-ready');

    let theme = 'dark';
    try { if (localStorage.getItem('oa-theme') === 'light') theme = 'light'; } catch (e) {}
    applyTheme(theme);
    applyLang(lang);

    $('[data-theme-set]').on('click', function () { applyTheme(String($(this).data('themeSet'))); });
    $('[data-lang-set]').on('click', function () { applyLang(String($(this).data('langSet'))); });

    if (!SHOWREEL_YOUTUBE_ID) $('#showreelSmall').attr('data-i18n', 'v.small');
    else $('#showreelSmall').removeAttr('data-i18n').text('YouTube');
    $('#showreelBtn').on('click', openShowreel);

    $('.nav-link, .brand-mark, .text-link[href^="#"], .nav-contact').on('click', function (event) {
        const target = $(this).attr('href');
        if (target && target.startsWith('#') && target.length > 1) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(target).offset()?.top || 0 }, 720);
            $('.navbar-collapse').removeClass('show');
        }
    });

    $(window).on('mousemove', (event) => $('.cursor-glow').css({ left: event.clientX, top: event.clientY }));
    $(window).on('scroll', () => {
        const scroll = $(window).scrollTop() || 0;
        $('.nav-link').each(function () {
            const id = $(this).attr('href');
            if (id && $(id).length) $(this).toggleClass('active', scroll >= ($(id).offset()?.top || 0) - 160 && scroll < ($(id).offset()?.top || 0) + $(id).outerHeight() - 160);
        });
    });

    $('.counter').each(function () {
        const $counter = $(this);
        const target = Number($counter.data('target'));
        let counted = false;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counted) {
                counted = true;
                $({ number: 0 }).animate({ number: target }, {
                    duration: 1350,
                    easing: 'swing',
                    step: function () { $counter.text(String(Math.floor(this.number)).padStart(2, '0')); },
                    complete: function () { $counter.text(String(target).padStart(2, '0')); }
                });
                observer.disconnect();
            }
        }, { threshold: .65 });
        observer.observe(this);
    });

    $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        $('.project-col').each(function () {
            const matches = filter === 'all' || (' ' + $(this).data('category') + ' ').indexOf(' ' + filter + ' ') > -1;
            $(this).stop(true, true).animate({ opacity: matches ? 1 : 0 }, 180, function () {
                $(this).css('display', matches ? '' : 'none');
            });
        });
    });
    $('.project-open').on('click', function (e) { if ($(this).data('project') === 'soon') { return; } e.preventDefault(); renderProject(String($(this).data('project'))); });
    $('.service-item').on('click keydown', function (event) {
        if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            renderService(String($(this).data('service')));
        }
    });

    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        const name = String($('#name').val()).trim();
        const company = String($('#company').val()).trim();
        const message = String($('#message').val()).trim();
        window.open('https://wa.me/5511989265494?text=' + encodeURIComponent(UI[lang].wa(name, company, message)), '_blank', 'noopener');
        $('#formNote').text(UI[lang].sending).css('color', 'var(--accent)');
        this.reset();
    });
});

/* Bio do hero: largura = largura de "Diego dos Santos", texto justificado */
(function () {
    function fitHeroIntro() {
        var em = document.querySelector('.hero-copy h1 em');
        var intro = document.querySelector('.hero-intro');
        if (!em || !intro) return;
        var w = Math.round(em.getBoundingClientRect().width);
        if (w > 0) { intro.style.maxWidth = w + 'px'; intro.style.width = w + 'px'; }
    }
    window.addEventListener('load', fitHeroIntro);
    window.addEventListener('resize', fitHeroIntro);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHeroIntro);
    document.addEventListener('click', function (e) {
        if (e.target.closest('[data-lang-set],[data-theme-set]')) setTimeout(fitHeroIntro, 50);
    });
})();

/* Carrossel de trabalhos: setas para passar */
(function () {
    var wrap = document.querySelector('.project-carousel');
    if (!wrap) return;
    var track = wrap.querySelector('.project-grid');
    function step() { var c = track.querySelector('.project-col:not([style*="display: none"])'); return c ? c.getBoundingClientRect().width : 300; }
    function update() {
        var max = track.scrollWidth - track.clientWidth - 2;
        wrap.querySelector('.pc-prev').style.opacity = track.scrollLeft > 2 ? 1 : 0;
        wrap.querySelector('.pc-prev').style.pointerEvents = track.scrollLeft > 2 ? 'auto' : 'none';
        wrap.querySelector('.pc-next').style.opacity = track.scrollLeft < max ? 1 : 0;
        wrap.querySelector('.pc-next').style.pointerEvents = track.scrollLeft < max ? 'auto' : 'none';
    }
    wrap.querySelector('.pc-prev').addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    wrap.querySelector('.pc-next').addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.addEventListener('click', function () { track.scrollLeft = 0; setTimeout(update, 400); }); });
    setTimeout(update, 300);
})();

// ===== Player de vídeo dos trabalhos: abre no modal de projeto (vídeo à esquerda, informações à direita) =====
(function () {
    var T = {
        pt: { fmt: 'Formato', v: 'Vertical 9:16', h: 'Horizontal 16:9', orig: 'Ver publicação original', yt: 'Assistir no YouTube', vid: 'Vídeo', views: 'Alcance no post original', vw: 'de views no Instagram' },
        en: { fmt: 'Format', v: 'Vertical 9:16', h: 'Horizontal 16:9', orig: 'View original post', yt: 'Watch on YouTube', vid: 'Video', views: 'Reach on the original post', vw: 'views on Instagram' }
    };
    var modalEl = document.getElementById('projectModal');
    if (modalEl) { modalEl.addEventListener('hidden.bs.modal', function () { var v = modalEl.querySelector('.video-pane'); if (v) { v.innerHTML = ''; } }); }
    document.addEventListener('click', function (e) {
        var a = e.target.closest('.video-open'); if (!a) { return; }
        e.preventDefault();
        var t = T[lang] || T.pt, id = a.dataset.yt, vertical = a.dataset.format === 'vertical';
        var meta = a.querySelector('.project-meta'), kicker = meta.querySelector('span').textContent, intro = meta.querySelector('p').textContent, title = a.dataset.title;
        var links = (a.dataset.orig ? '<a href="' + a.dataset.orig + '" target="_blank" rel="noopener">' + t.orig + ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' : '') +
            '<a href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener">' + t.yt + ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '<a href="#contact" data-bs-dismiss="modal">' + UI[lang].similar + ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a>';
        $('#projectModalBody').html('<div class="project-detail-hero video-hero"><div class="video-pane ' + (vertical ? 'is-vertical' : 'is-horizontal') + '"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1" title="' + title + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>' +
            '<div class="project-detail-copy"><span class="modal-kicker">' + kicker + '</span><h2>' + title + '</h2><p>' + intro + '</p>' +
            '<dl class="project-facts"><div><dt>' + t.fmt + '</dt><dd>' + (vertical ? t.v : t.h) + '</dd></div>' + (a.dataset.views ? '<div><dt>' + t.views + '</dt><dd>' + (lang === 'en' ? a.dataset.views.replace(' mi','M').replace(',','.') : a.dataset.views) + ' ' + t.vw + '</dd></div>' : '') + '</dl>' +
            '<div class="detail-tags"><span>' + kicker + '</span><span>' + (vertical ? t.v : t.h) + '</span></div>' +
            '<div class="modal-links">' + links + '</div></div></div>');
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
    });
})();

// ===== Capas do YouTube: se a melhor não existir, ou for o aviso cinza de "processando", tenta a próxima =====
(function () {
    var order = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', '1', '2', '3'];
    function next(img) {
        var m = img.src.match(/\/vi\/([^/]+)\/([^/.]+)\.jpg/); if (!m) { return; }
        var i = order.indexOf(m[2]) + 1;
        if (i > 0 && i < order.length) { img.src = 'https://i.ytimg.com/vi/' + m[1] + '/' + order[i] + '.jpg'; }
        else { img.classList.add('thumb-missing'); }
    }
    function check(e) {
        var img = e.target; if (!img.matches || !img.matches('.project-image img, .hc-card img') || img.src.indexOf('ytimg.com') < 0) { return; }
        if (e.type === 'error' || img.naturalWidth <= 120) { next(img); }
    }
    document.addEventListener('error', check, true);
    document.addEventListener('load', check, true);
})();

// ===== Carrossel de vídeos do Comunicador =====
(function () {
    var box = document.querySelector('.host-carousel'); if (!box) { return; }
    var track = box.querySelector('.hc-track'), prev = box.querySelector('.hc-prev'), next = box.querySelector('.hc-next');
    function step() { var c = track.querySelector('.hc-card'); return c ? c.getBoundingClientRect().width + 14 : track.clientWidth; }
    function update() { prev.hidden = track.scrollLeft < 8; next.hidden = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8; }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
    track.addEventListener('click', function (e) { if (e.target.closest('.is-soon')) { e.preventDefault(); } });
})();

document.addEventListener('click', function (e) { if (e.target.closest('.is-pending')) { e.preventDefault(); } });

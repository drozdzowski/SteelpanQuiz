(function () {
    const navItems = [
        { href: "index.html", label: "Home" },
        { href: "quiz-categories.html", label: "Quiz Categories" },
        { href: "about-the-quiz.html", label: "About the Quiz" },
        { href: "sources.html", label: "Sources" },
        { href: "games.html", label: "Games" },
        { href: "play-yuhself.html", label: "Play Yuhself" },
        { href: "sponsors.html", label: "Sponsors" },
        { href: "previous-quizzes.html", label: "Previous Quizzes" },
        { href: "practice.html", label: "Practice" },
        { href: "podcast.html", label: "Podcast" },
        // { href: "blog.html", label: "Blog" },
        { href: "news.html", label: "News" },
        { href: "fun-faqs.html", label: "Fun FAQs" },
        { href: "contact.html", label: "Contact" }
        // { href: "register.html", label: "Register" },
        // { href: "donate.html", label: "Donate" }
    ];

    function renderSiteNav(target, index) {
        const toggleId = `site-nav-toggle-${index + 1}`;
        const links = navItems
            .map((item) => `<a href="${item.href}">${item.label}</a>`)
            .join("");

        target.outerHTML = `
<nav class="site-nav" aria-label="Site navigation">
    <input class="site-nav__toggle" type="checkbox" id="${toggleId}">
    <label class="site-nav__menu-label" for="${toggleId}">Menu</label>
    <div class="site-nav__inner">
        ${links}
    </div>
</nav>`;
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-site-nav]").forEach(renderSiteNav);
    });
})();

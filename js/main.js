(function () {
  "use strict";

  var config = window.SITE_CONFIG;
  var games = window.GAMES_DATA || [];

  var currentGameIndex = 0;
  var currentPageIndex = 0;

  if (!config) {
    console.error("SITE_CONFIG が読み込まれていません。data/site.js を確認してください。");
    return;
  }

  var statusLabels = config.statusLabels || {
    developing: "開発中",
    demo: "DEMO公開中",
    released: "公開中",
  };

  var platformLabels = {
    unityroom: "UnityRoom",
    steam: "Steam",
    itch: "itch.io",
    switch: "Nintendo Switch",
    pc: "PC",
    web: "Web",
    other: "Link",
  };

  var icons = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    steam: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.4c0-2.495 2.028-4.522 4.522-4.522 2.494 0 4.522 2.027 4.522 4.522s-2.028 4.522-4.522 4.522h-.105l-4.031 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.798 20.307 6.386 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.663 0-3.015 1.353-3.015 3.015 0 1.663 1.352 3.015 3.015 3.015 1.663 0 3.015-1.352 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.252 0 2.266 1.014 2.266 2.266 0 1.251-1.014 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/></svg>',
    unityroom: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/></svg>',
    itch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 2C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2h-15zm2.2 4.2h2.1l.6 2.1.5-2.1h2.1l.5 2.1.6-2.1h2.1l-1.2 4.2h-2.3l-.5-2-.5 2H7.9l-1.2-4.2z"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
  };

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nl2br(text) {
    return escapeHtml(text).replace(/\n/g, "<br>");
  }

  function getDetailPages(game) {
    if (game.detailPages && game.detailPages.length) {
      return game.detailPages;
    }
    return [
      {
        image: game.still || "",
        text: (game.name ? game.name + "\n\n" : "") + (game.description || ""),
      },
    ];
  }

  function renderHeader() {
    var navItems = config.nav
      .map(function (item) {
        return '<li><a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.label) + "</a></li>";
      })
      .join("");

    document.getElementById("site-header").innerHTML =
      '<div class="header-inner">' +
      '<a href="#home" class="logo">' + escapeHtml(config.brand) + "</a>" +
      '<nav><ul>' + navItems + "</ul></nav>" +
      "</div>";
  }

  function renderHero() {
    var hero = config.hero;
    var subtitleHtml = hero.subtitle
      ? "<p>" + escapeHtml(hero.subtitle) + "</p>"
      : "";
    var showImage = hero.showImage !== false && hero.image;
    var imageHtml = showImage
      ? '<div class="hero-image-wrap">' +
        '<img src="' + escapeHtml(hero.image) + '" alt="' + escapeHtml(hero.imageAlt || "") + '">' +
        "</div>"
      : "";
    var sectionClass = showImage ? "hero" : "hero hero-no-image";

    document.getElementById("home").className = sectionClass;
    document.getElementById("home").innerHTML =
      imageHtml +
      '<div class="hero-text">' +
      "<h1>" + escapeHtml(hero.title) + "</h1>" +
      subtitleHtml +
      "</div>";
  }

  function renderProfile() {
    var profile = config.profile;
    document.getElementById("profile").innerHTML =
      "<h2>" + escapeHtml(profile.title) + "</h2>" +
      '<p class="section-body">' + nl2br(profile.text) + "</p>";
  }

  function renderStatusTag(status) {
    var label = statusLabels[status] || status;
    return '<span class="tag tag-status tag-status-' + escapeHtml(status) + '">' + escapeHtml(label) + "</span>";
  }

  function renderGenreTags(genres) {
    if (!genres || !genres.length) return "";
    return (
      '<div class="tag-group tag-group-genre">' +
      genres
        .map(function (genre) {
          return '<span class="tag tag-genre">' + escapeHtml(genre) + "</span>";
        })
        .join("") +
      "</div>"
    );
  }

  function renderPlatformTags(platforms, clickable) {
    if (!platforms || !platforms.length) return "";
    return (
      '<div class="tag-group tag-group-platform">' +
      platforms
        .map(function (platform) {
          var type = platform.type || "other";
          var label = platform.label || platformLabels[type] || type;
          var url = (platform.url || "").trim();

          if (url && clickable !== false) {
            return (
              '<a class="tag tag-platform tag-platform-' + escapeHtml(type) + '" href="' +
              escapeHtml(url) + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">' +
              escapeHtml(label) + "</a>"
            );
          }

          return (
            '<span class="tag tag-platform tag-platform-' + escapeHtml(type) + ' tag-disabled">' +
            escapeHtml(label) + "</span>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderGameCard(game, index) {
    var stillHtml = game.still
      ? '<img src="' + escapeHtml(game.still) + '" alt="' + escapeHtml(game.name) + '" loading="lazy">'
      : '<div class="game-still-placeholder"><span>No Image</span></div>';

    return (
      '<article class="game-card" data-game-index="' + index + '" role="button" tabindex="0" aria-label="' +
      escapeHtml(game.name) + 'の詳細を見る">' +
      '<div class="game-still">' + stillHtml + "</div>" +
      '<div class="game-info">' +
      '<div class="game-title-row">' +
      "<h3>" + escapeHtml(game.name) + "</h3>" +
      renderStatusTag(game.status) +
      "</div>" +
      '<p class="game-description">' + nl2br(game.description || "") + "</p>" +
      renderGenreTags(game.genres) +
      renderPlatformTags(game.platforms) +
      "</div>" +
      "</article>"
    );
  }

  function renderWorks() {
    var works = config.works;
    var cards = games.map(renderGameCard).join("");

    document.getElementById("games").innerHTML =
      "<h2>" + escapeHtml(works.title) + "</h2>" +
      '<p class="section-note">' + escapeHtml(works.note) + "</p>" +
      '<div class="game-list">' + cards + "</div>";
  }

  function getNewsItems() {
    if (Array.isArray(config.newsItems)) return config.newsItems;
    if (Array.isArray(config.news)) return config.news;
    return [];
  }

  function getNewsTitle() {
    if (config.news && config.news.title) return config.news.title;
    return "お知らせ";
  }

  function renderNews() {
    var items = getNewsItems()
      .filter(function (item) {
        return item && item.date;
      })
      .map(function (item) {
        return (
          '<li class="news-item">' +
          '<time class="news-date">' + escapeHtml(item.date) + "</time>" +
          '<span class="news-text">' + escapeHtml(item.text) + "</span>" +
          "</li>"
        );
      })
      .join("");

    document.getElementById("news").innerHTML =
      "<h2>" + escapeHtml(getNewsTitle()) + "</h2>" +
      '<ul class="news-list">' + items + "</ul>";
  }

  function renderContact() {
    var contact = config.contact;
    var links = (contact.links || [])
      .filter(function (link) {
        return (link.url || "").trim() !== "";
      })
      .map(function (link) {
        var iconKey = link.icon || "link";
        var iconSvg = icons[iconKey] || icons.link;
        return (
          '<a class="sns-link sns-link-' + escapeHtml(iconKey) + '" href="' +
          escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' +
          escapeHtml(link.label) + '">' + iconSvg + "<span>" + escapeHtml(link.label) + "</span></a>"
        );
      })
      .join("");

    var mascotHtml = contact.mascot && contact.mascot.image
      ? '<div class="mascot-wrap">' +
        '<img class="mascot" src="' + escapeHtml(contact.mascot.image) + '" alt="' +
        escapeHtml(contact.mascot.alt || "") + '">' +
        "</div>"
      : "";

    var linksHtml = links
      ? '<div class="sns-links">' + links + "</div>"
      : '<p class="section-note sns-empty">SNSリンクは data/site.js の contact.links に URL を設定してください</p>';

    document.getElementById("contact").innerHTML =
      "<h2>" + escapeHtml(contact.title) + "</h2>" +
      '<p class="section-note">' + escapeHtml(contact.note || "") + "</p>" +
      linksHtml +
      mascotHtml;
  }

  function renderFooter() {
    var footer = config.footer;
    var privacyHtml = footer.privacyUrl
      ? '<p class="footer-links"><a href="' + escapeHtml(footer.privacyUrl) + '">' +
        escapeHtml(footer.privacyLabel || "プライバシーポリシー") + "</a></p>"
      : "";

    document.getElementById("site-footer").innerHTML =
      privacyHtml +
      "<p>" + escapeHtml(footer.copyright) + "</p>";
  }

  function createModal() {
    var modal = document.createElement("div");
    modal.id = "game-modal";
    modal.className = "game-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML =
      '<div class="game-modal-overlay" data-modal-close></div>' +
      '<div class="game-modal-panel" role="dialog" aria-modal="true" aria-labelledby="game-modal-title">' +
      '<button type="button" class="game-modal-close" data-modal-close aria-label="閉じる">&times;</button>' +
      '<div class="game-modal-header">' +
      '<h3 id="game-modal-title"></h3>' +
      '<span class="game-modal-status"></span>' +
      "</div>" +
      '<div class="game-modal-body">' +
      '<button type="button" class="game-modal-nav game-modal-prev" aria-label="前のページ">&#10094;</button>' +
      '<div class="game-modal-content">' +
      '<div class="game-modal-image-wrap"></div>' +
      '<div class="game-modal-text"></div>' +
      "</div>" +
      '<button type="button" class="game-modal-nav game-modal-next" aria-label="次のページ">&#10095;</button>' +
      "</div>" +
      '<div class="game-modal-footer">' +
      '<span class="game-modal-page-indicator"></span>' +
      '<div class="game-modal-platforms"></div>' +
      "</div>" +
      "</div>";
    document.body.appendChild(modal);
    return modal;
  }

  function updateModalContent() {
    var game = games[currentGameIndex];
    if (!game) return;

    var modal = document.getElementById("game-modal");
    var pages = getDetailPages(game);
    var page = pages[currentPageIndex] || pages[0];
    var totalPages = pages.length;

    modal.querySelector("#game-modal-title").textContent = game.name;
    modal.querySelector(".game-modal-status").innerHTML = renderStatusTag(game.status);

    var imageWrap = modal.querySelector(".game-modal-image-wrap");
    if (page.image) {
      imageWrap.innerHTML = '<img src="' + escapeHtml(page.image) + '" alt="' + escapeHtml(game.name) + '">';
      imageWrap.style.display = "";
    } else {
      imageWrap.innerHTML = "";
      imageWrap.style.display = "none";
    }

    modal.querySelector(".game-modal-text").innerHTML = nl2br(page.text || "");
    modal.querySelector(".game-modal-page-indicator").textContent =
      totalPages > 1 ? (currentPageIndex + 1) + " / " + totalPages : "";

    modal.querySelector(".game-modal-platforms").innerHTML =
      renderGenreTags(game.genres) + renderPlatformTags(game.platforms);

    var prevBtn = modal.querySelector(".game-modal-prev");
    var nextBtn = modal.querySelector(".game-modal-next");
    prevBtn.disabled = currentPageIndex <= 0;
    nextBtn.disabled = currentPageIndex >= totalPages - 1;
    prevBtn.style.visibility = totalPages > 1 ? "visible" : "hidden";
    nextBtn.style.visibility = totalPages > 1 ? "visible" : "hidden";
  }

  function openModal(gameIndex) {
    currentGameIndex = gameIndex;
    currentPageIndex = 0;
    var modal = document.getElementById("game-modal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    updateModalContent();
  }

  function closeModal() {
    var modal = document.getElementById("game-modal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function goToPrevPage() {
    if (currentPageIndex > 0) {
      currentPageIndex -= 1;
      updateModalContent();
    }
  }

  function goToNextPage() {
    var pages = getDetailPages(games[currentGameIndex]);
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex += 1;
      updateModalContent();
    }
  }

  function bindGameModal() {
    createModal();

    document.getElementById("games").addEventListener("click", function (event) {
      var card = event.target.closest(".game-card");
      if (!card) return;
      if (event.target.closest("a")) return;
      openModal(parseInt(card.getAttribute("data-game-index"), 10));
    });

    document.getElementById("games").addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      var card = event.target.closest(".game-card");
      if (!card) return;
      event.preventDefault();
      openModal(parseInt(card.getAttribute("data-game-index"), 10));
    });

    var modal = document.getElementById("game-modal");
    modal.querySelector(".game-modal-prev").addEventListener("click", goToPrevPage);
    modal.querySelector(".game-modal-next").addEventListener("click", goToNextPage);

    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (event) {
      var modalEl = document.getElementById("game-modal");
      if (!modalEl.classList.contains("is-open")) return;

      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") goToPrevPage();
      if (event.key === "ArrowRight") goToNextPage();
    });
  }

  function init() {
    document.title = config.brand + " | Official Website";
    renderHeader();
    renderHero();
    renderProfile();
    renderWorks();
    renderNews();
    renderContact();
    renderFooter();
    bindGameModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

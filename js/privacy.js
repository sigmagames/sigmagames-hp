(function () {
  "use strict";

  var privacy = window.PRIVACY_CONFIG;
  var site = window.SITE_CONFIG;

  if (!privacy) {
    document.getElementById("privacy-content").innerHTML =
      "<p>プライバシーポリシーの設定が見つかりません。</p>";
    return;
  }

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

  var sectionsHtml = (privacy.sections || [])
    .map(function (section) {
      return (
        "<section class=\"privacy-section\">" +
        "<h2>" + escapeHtml(section.heading) + "</h2>" +
        "<p>" + nl2br(section.text) + "</p>" +
        "</section>"
      );
    })
    .join("");

  document.getElementById("privacy-content").innerHTML =
    "<h1>" + escapeHtml(privacy.title) + "</h1>" +
    "<p class=\"privacy-updated\">最終更新日：" + escapeHtml(privacy.updated) + "</p>" +
    sectionsHtml;

  if (site && site.footer) {
    document.getElementById("privacy-footer").innerHTML =
      "<p>" + escapeHtml(site.footer.copyright) + "</p>";
  }
})();

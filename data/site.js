// ============================================================
// サイト全体の設定
// このファイルを編集するだけで、ヘッダー・TOP・プロフィール・
// ニュース・SNSリンクなどを変更できます。
// ============================================================

window.SITE_CONFIG = {
  brand: "SIGMAGAMES",

  nav: [
    { label: "TOP", href: "#home" },
    { label: "PROFILE", href: "#profile" },
    { label: "制作ゲーム", href: "#games" },
    { label: "お知らせ", href: "#news" },
    { label: "CONTACT", href: "#contact" },
  ],

  hero: {
    // false にするとTOP画像を非表示（タイトルのみ）
    showImage: false,
    image: "img/ココロノカギTOP.jpg",
    imageAlt: "ココロノカギ",
    title: "SIGMAGAMES Official Website",
    // subtitle を空にすると表示されません
    subtitle: "",
  },

  profile: {
    title: "PROFILE",
    text:
      "SIGMAGAMESは様々なジャンルのゲーム制作を行っています。\n「全ジャンルのゲームを作る」を目標に少しでも心に残るゲーム体験を目指して開発しています。",
  },

  works: {
    title: "制作ゲーム",
    note: "カードをクリックすると詳細を表示します。プラットフォームのタグをクリックするとストアページに移動します",
  },

  news: {
    title: "お知らせ",
  },

  newsItems: [
    { date: "2026.07", text: "公式サイト公開しました！" },
  ],

  contact: {
    title: "OFFICIAL SNS",
    note: "ゲームの進捗や日常の出来事などをポストしています",
    mascot: {
      image: "img/しぐまアイコン.png",
      alt: "しぐまマスコット",
    },
    links: [
      { label: "X (Twitter)", url: "https://x.com/SigmaGames1003", icon: "x" },
      { label: "YouTube", url: "https://www.youtube.com/@%E3%81%97%E3%81%90%E3%81%BE1003", icon: "youtube" },
      { label: "Lit.Link", url: "https://lit.link/sigma1003", icon: "link" },
    ],
  },

  footer: {
    copyright: "© 2026 SIGMAGAMES. All Rights Reserved.",
    privacyLabel: "プライバシーポリシー",
    privacyUrl: "privacy.html",
  },

  statusLabels: {
    developing: "開発中",
    demo: "DEMO公開中",
    released: "公開中",
  },
};

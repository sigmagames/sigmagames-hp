// ============================================================
// サイト全体の設定
// このファイルを編集するだけで、ヘッダー・TOP・プロフィール・
// ニュース・SNSリンクなどを変更できます。
// ============================================================

window.SITE_CONFIG = {
  // ブランド名（ヘッダー・フッターに表示）
  brand: "SIGMAGAMES",

  // ナビゲーション
  nav: [
    { label: "TOP", href: "#home" },
    { label: "PROFILE", href: "#profile" },
    { label: "WORKS", href: "#games" },
    { label: "NEWS", href: "#news" },
    { label: "CONTACT", href: "#contact" },
  ],

  // TOP（ヒーロー）セクション
  hero: {
    image: "img/ココロノカギTOP.jpg",
    imageAlt: "ココロノカギ",
    title: "SIGMAGAMES Official Website",
  },

  // プロフィール
  profile: {
    title: "PROFILE",
    text:
      "SIGMAGAMESはUnityを使用したゲーム制作を行っています。\n少しでも心に残るゲーム体験を目指して開発しています。",
  },

  // ゲーム一覧の見出し
  works: {
    title: "WORKS",
    note: "プラットフォームのタグをクリックすると、それぞれのストアページに移動します",
  },

  // ニュース（新しいものを上に追加）
  news: [
    { date: "2026.07", text: "公式サイト公開しました！" },
  ],

  // コンタクト・SNS
  // url を空文字にするとボタンは非表示になります
  // icon: "x" | "youtube" | "github" | "steam" | "unityroom" | "itch" | "link"
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

  // フッター
  footer: {
    copyright: "© 2026 SIGMAGAMES. All Rights Reserved.",
  },

  // 公開ステータスの表示名（games.js の status と対応）
  statusLabels: {
    developing: "開発中",
    demo: "DEMO公開中",
    released: "公開中",
  },
};

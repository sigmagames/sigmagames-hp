// ============================================================
// ゲーム一覧の設定
// ============================================================
//
// detailPages : 詳細パネル用のページ（左右ボタンで切り替え）
//   - image : 画像パス（省略可）
//   - text  : 表示テキスト（複数行可）

window.GAMES_DATA = [
  {
    name: "ココロノカギ",
    description:
      "感情を思い出し感情を組み合わせる。\n心を鍵として謎を解くノスタルジックな2D探索アドベンチャー",
    still: "img/ココロノカギTOP.jpg",
    status: "demo",
    genres: ["アドベンチャー", "探索", "脱出"],
    platforms: [
      { type: "unityroom", url: "https://unityroom.com/games/kokoronokagidemo" },
    ],
    detailPages: [
      {
        image: "img/ココロノカギ1.jpg",
        text:
          "あなたはココロを操作します。\n不思議な洋館を舞台に、記憶の鍵を集めながら真実へと辿り着こう。",
      },
      {
        image: "img/ココロノカギ2.jpg",
        text:
          "感情を変えながら探索しましょう。",
      },
      {
        image: "img/ココロノカギ3.jpg",
        text:
          "UnityRoomにてDEMO版をプレイできます！",
      },
    ],
  },
  {
    name: "引王",
    description: "ただひたすらにカードを引くゲーム。",
    still: "img/引王.jpg",
    status: "released",
    genres: ["簡単", "カード"],
    platforms: [
      { type: "unityroom", url: "https://unityroom.com/games/hikiou" },
    ],
    detailPages: [
      {
        image: "img/引王.jpg",
        text: "引王\n\nただひたすらにカードを引くゲーム。\nシンプルながら、引きの快感を味わえます。",
      },
    ],
  },
  {
    name: "表裏遊戯",
    description: "3×3の盤面にカードを配置し、相手のカードを「うら」返して奪い合う対戦型カードゲーム。",
    still: "img/表裏遊戯.jpg",
    status: "released",
    genres: ["簡単", "カード", "対戦"],
    platforms: [
      { type: "unityroom", url: "https://unityroom.com/games/hyouriyuugi" },
    ],
    detailPages: [
      {
        image: "img/表裏遊戯.jpg",
        text:
          "表裏遊戯\n\n3×3の盤面にカードを配置し、相手のカードを「うら」返して奪い合う対戦型カードゲーム。",
      },
    ],
  },
  {
    name: "世界の半分を貴様にやろう",
    description: "主人公は勇者...ではなく魔王！？最強の勇者から逃れる術は...魔王の「交渉力」にあった。",
    still: "img/世界の半分を.jpg",
    status: "released",
    genres: ["ネタ", "RPGツクール"],
    platforms: [
      { type: "other", label: "Freem!", url: "https://www.freem.ne.jp/win/game/32094" },
    ],
    detailPages: [
      {
        image: "img/世界の半分を.jpg",
        text:
          "世界の半分を貴様にやろう\n\n主人公は勇者...ではなく魔王！？\n最強の勇者から逃れる術は...魔王の「交渉力」にあった。",
      },
    ],
  },
];

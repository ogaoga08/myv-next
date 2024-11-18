const parts = [
  {
    name: "タン",
    descr:
      "牛の舌。脂肪分が多く、ほどよい歯応えと独特の食感がある。ビタミンB群が豊富に含まれている。火を通しすぎると硬くなるため、さっと炙るように焼くのが良い。",
    softness: 1,
    fat: 3,
    rare: 5,
    engname: "tongue",
    route: "/yakiniku/head-neck/tongue",
  },
  {
    name: "ネック",
    descr:
      "牛の首。程よい脂肪が特徴で、歯応えがありつつもジューシー。タンよりも脂肪が少ないため、あっさりと食べられる。",
    softness: 2,
    fat: 2,
    rare: 3,
    engname: "neck",
    route: "/yakiniku/head-neck/neck",
  },
  {
    name: "ミスジ",
    descr:
      "牛の肩の部位で、非常に柔らかく、脂肪が多い。霜降りが美しく、焼肉でも人気の部位。焼き過ぎると脂が溶けてしまうため、軽く焼くのがおすすめ。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "misuji",
    route: "/yakiniku/shoulder/misuji",
  },
  {
    name: "肩サンカク",
    descr:
      "牛の肩肉で、しっかりとした歯応えが特徴。適度な脂肪と旨味があり、焼肉として非常に人気がある。焼きすぎないように注意が必要。",
    softness: 3,
    fat: 3,
    rare: 3,
    engname: "katasankaku",
    route: "/yakiniku/shoulder/katasankaku",
  },
  {
    name: "ザブトン",
    descr:
      "牛の肩ロースの一部で、非常に柔らかく脂肪が多い。特に霜降りが美しい部位で、高級焼肉として提供されることが多い。",
    softness: 5,
    fat: 5,
    rare: 5,
    engname: "zabuton",
    route: "/yakiniku/shoulder/zabuton",
  },
  {
    name: "サーロイン",
    descr:
      "牛の背中部分で、柔らかく脂肪が多い。適度な霜降りがあり、ステーキとしても焼肉としても人気が高い。旨味が強く、ジューシー。",
    softness: 4,
    fat: 4,
    rare: 5,
    engname: "sirloin",
    route: "/yakiniku/back/sirloin",
  },
  {
    name: "リブロース",
    descr:
      "牛の背中部分で、柔らかく脂肪が多い。霜降りが豊富で、焼肉やステーキとして人気。脂の旨味とジューシーさが特徴。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "ribeye",
    route: "/yakiniku/back/ribeye",
  },
  {
    name: "ヒレ",
    descr:
      "牛の背中の一部で、非常に柔らかく脂肪が少ない。肉質がきめ細かく、焼肉としてもステーキとしても人気がある。あっさりとした味わい。",
    softness: 5,
    fat: 2,
    rare: 5,
    engname: "tenderloin",
    route: "/yakiniku/back/tenderloin",
  },
  {
    name: "シャトーブリアン",
    descr:
      "ヒレの中心部分で、最も柔らかく脂肪が少ない。非常に希少な部位で、高級感があり、特別な機会に提供されることが多い。",
    softness: 5,
    fat: 2,
    rare: 5,
    engname: "chateaubriand",
    route: "/yakiniku/back/chateaubriand",
  },
  {
    name: "タテバラ(カルビ)",
    descr:
      "牛の腹肉で、非常に柔らかく脂肪が多い。ジューシーで濃厚な味わいが特徴。焼肉では定番の部位で、タレとの相性も良い。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "short-rib(karubi)",
    route: "/yakiniku/chest-belly/short-rib",
  },
  {
    name: "カイノミ",
    descr:
      "牛の腹肉で、柔らかく脂肪が多い。焼肉として非常に人気があり、旨味が強くジューシー。軽く炙る程度で食べるのが美味しい。",
    softness: 4,
    fat: 4,
    rare: 3,
    engname: "flap-meat",
    route: "/yakiniku/chest-belly/flap-meat",
  },
  {
    name: "サンカクバラ(特上カルビ)",
    descr:
      "最上級のカルビで、非常に柔らかく脂肪が多い。霜降りが美しく、口の中でとろけるような食感が楽しめる。",
    softness: 5,
    fat: 5,
    rare: 3,
    engname: "sankakubara",
    route: "/yakiniku/chest-belly/sankakubara",
  },
  {
    name: "ランプ",
    descr:
      "サーロインの隣に位置する部位で、程よい歯応えが特徴。脂肪が少なく、ヘルシーであっさりとした味わい。",
    softness: 3,
    fat: 2,
    rare: 4,
    engname: "rump",
    route: "/yakiniku/round/rump",
  },
  {
    name: "イチボ",
    descr:
      "牛のモモ肉の一部で、適度な脂肪が特徴。旨味が強く、しっかりとした食感が楽しめる。焼肉では人気の部位。",
    softness: 3,
    fat: 3,
    rare: 4,
    engname: "ichibo",
    route: "/yakiniku/round/ichibo",
  },
  {
    name: "シキンボ",
    descr:
      "牛のモモ肉の一部で、しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わいが楽しめる。",
    softness: 3,
    fat: 2,
    rare: 3,
    engname: "shikinbo",
    route: "/yakiniku/round/shikinbo",
  },
  {
    name: "シンシン",
    descr:
      "牛のモモ肉の一部で、非常に柔らかく脂肪が少ない。きめ細かい肉質で、ヘルシーであっさりとした味わい。",
    softness: 5,
    fat: 2,
    rare: 3,
    engname: "shinshin",
    route: "/yakiniku/round/shinshin",
  },
  {
    name: "ハツ",
    descr:
      "牛の心臓。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。鉄分が豊富で栄養価が高い。",
    softness: 1,
    fat: 1,
    rare: 5,
    engname: "hatsu",
    route: "/offal/head-chest/hatsu",
  },
  {
    name: "ツラミ",
    descr:
      "牛のほほ肉で、しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。カシラとも呼ばれる。",
    softness: 2,
    fat: 2,
    rare: 3,
    engname: "tsurami",
    route: "/offal/head-chest/tsurami",
  },
  {
    name: "ウルテ",
    descr:
      "牛の喉の気管軟骨。非常に歯応えがあり、独特の食感が楽しめる。脂肪が少なく、ヘルシー。",
    softness: 1,
    fat: 1,
    rare: 3,
    engname: "urute",
    route: "/offal/head-chest/urute",
  },
  {
    name: "シビレ",
    descr:
      "牛の膵臓。ぷりぷりとした食感が特徴。脂肪が適度にあり、旨味が強い。焼きすぎないように注意。",
    softness: 3,
    fat: 3,
    rare: 3,
    engname: "shibire",
    route: "/offal/head-chest/shibire",
  },
  {
    name: "センマイ",
    descr:
      "牛の第三胃。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わい。独特の風味が楽しめる。",
    softness: 1,
    fat: 1,
    rare: 4,
    engname: "senmai",
    route: "/offal/stomach/senmai",
  },
  {
    name: "ハチノス",
    descr:
      "牛の第二胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。",
    softness: 1,
    fat: 1,
    rare: 3,
    engname: "hachinosu",
    route: "/offal/stomach/hachinosu",
  },
  {
    name: "ミノ",
    descr:
      "牛の第一胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。焼き過ぎに注意。",
    softness: 2,
    fat: 2,
    rare: 3,
    engname: "mino",
    route: "/offal/stomach/mino",
  },
  {
    name: "ハラミ(サガリ)",
    descr:
      "牛の横隔膜の一部で、柔らかく歯応えがある。脂肪が適度にあり、ジューシーで濃厚な味わい。",
    softness: 3,
    fat: 3,
    rare: 4,
    engname: "harami(sagari)",
    route: "/offal/abdomen/harami(sagari)",
  },
  {
    name: "レバー",
    descr:
      "牛の肝臓。ふわふわとした食感が特徴。ビタミンAや鉄分が豊富で栄養価が高い。軽く炙る程度で食べるのが美味しい。",
    softness: 5,
    fat: 2,
    rare: 4,
    engname: "liver",
    route: "/offal/abdomen/liver",
  },
  {
    name: "ヒモ(マルチョウ)",
    descr:
      "牛の小腸。脂とぷりぷりとした食感が特徴。非常にジューシーで、焼肉では人気の部位。",
    softness: 4,
    fat: 5,
    rare: 3,
    engname: "himo(marucho)",
    route: "/offal/abdomen/himo(marucho)",
  },
  {
    name: "シマチョウ",
    descr:
      "牛の大腸。しっかりとした歯応えが特徴。脂が多く、濃厚な旨味が楽しめる。",
    softness: 3,
    fat: 5,
    rare: 3,
    engname: "shimacho",
    route: "/offal/abdomen/shimacho",
  },
  {
    name: "マメ",
    descr:
      "牛の腎臓。しっかりとした歯応えが特徴。脂肪が適度にあり、旨味が強い。焼き過ぎに注意。",
    softness: 2,
    fat: 3,
    rare: 3,
    engname: "mame",
    route: "/offal/abdomen/mame",
  },
];

export default parts;

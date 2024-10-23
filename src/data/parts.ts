const parts = [
  {
    name: "タン",
    descr:
      "牛の舌。脂肪分が多く、ほどよい歯応えと独特の食感がある。ビタミンB群が豊富に含まれている。火を通しすぎると硬くなるため、さっと炙るように焼くのが良い。",
    softness: 1,
    fat: 3,
    rare: 5,
    engname: "tongue",
  },
  {
    name: "ネック",
    descr:
      "牛の首。程よい脂肪が特徴で、歯応えがありつつもジューシー。タンよりも脂肪が少ないため、あっさりと食べられる。",
    softness: 2,
    fat: 2,
    rare: 3,
    engname: "neck",
  },
  {
    name: "ミスジ",
    descr:
      "牛の肩の部位で、非常に柔らかく、脂肪が多い。霜降りが美しく、焼肉でも人気の部位。焼き過ぎると脂が溶けてしまうため、軽く焼くのがおすすめ。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "chuck-flap",
  },
  {
    name: "肩サンカク",
    descr:
      "牛の肩肉で、しっかりとした歯応えが特徴。適度な脂肪と旨味があり、焼肉として非常に人気がある。焼きすぎないように注意が必要。",
    softness: 3,
    fat: 3,
    rare: 3,
    engname: "shoulder-triangle",
  },
  {
    name: "ザブトン",
    descr:
      "牛の肩ロースの一部で、非常に柔らかく脂肪が多い。特に霜降りが美しい部位で、高級焼肉として提供されることが多い。",
    softness: 5,
    fat: 5,
    rare: 5,
    engname: "zabuton",
  },
  {
    name: "サーロイン",
    descr:
      "牛の背中部分で、柔らかく脂肪が多い。適度な霜降りがあり、ステーキとしても焼肉としても人気が高い。旨味が強く、ジューシー。",
    softness: 4,
    fat: 4,
    rare: 5,
    engname: "sirloin",
  },
  {
    name: "リブロース",
    descr:
      "牛の背中部分で、柔らかく脂肪が多い。霜降りが豊富で、焼肉やステーキとして人気。脂の旨味とジューシーさが特徴。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "ribeye",
  },
  {
    name: "ヒレ",
    descr:
      "牛の背中の一部で、非常に柔らかく脂肪が少ない。肉質がきめ細かく、焼肉としてもステーキとしても人気がある。あっさりとした味わい。",
    softness: 5,
    fat: 2,
    rare: 5,
    engname: "tenderloin",
  },
  {
    name: "シャトーブリアン",
    descr:
      "ヒレの中心部分で、最も柔らかく脂肪が少ない。非常に希少な部位で、高級感があり、特別な機会に提供されることが多い。",
    softness: 5,
    fat: 2,
    rare: 5,
    engname: "chateaubriand",
  },
  {
    name: "タテバラ(カルビ)",
    descr:
      "牛の腹肉で、非常に柔らかく脂肪が多い。ジューシーで濃厚な味わいが特徴。焼肉では定番の部位で、タレとの相性も良い。",
    softness: 4,
    fat: 4,
    rare: 4,
    engname: "short-rib-(karubi)",
  },
  {
    name: "カイノミ",
    descr:
      "牛の腹肉で、柔らかく脂肪が多い。焼肉として非常に人気があり、旨味が強くジューシー。軽く炙る程度で食べるのが美味しい。",
    softness: 4,
    fat: 4,
    rare: 3,
    engname: "flap-meat",
  },
  {
    name: "サンカクバラ(特上カルビ)",
    descr:
      "最上級のカルビで、非常に柔らかく脂肪が多い。霜降りが美しく、口の中でとろけるような食感が楽しめる。",
    softness: 5,
    fat: 5,
    rare: 3,
    engname: "triangle-rib",
  },
  {
    name: "ランプ",
    descr:
      "サーロインの隣に位置する部位で、程よい歯応えが特徴。脂肪が少なく、ヘルシーであっさりとした味わい。",
    softness: 3,
    fat: 2,
    rare: 4,
    engname: "rump",
  },
  {
    name: "イチボ",
    descr:
      "牛のモモ肉の一部で、適度な脂肪が特徴。旨味が強く、しっかりとした食感が楽しめる。焼肉では人気の部位。",
    softness: 3,
    fat: 3,
    rare: 4,
    engname: "top-sirloin-cap",
  },
  {
    name: "シキンボ",
    descr:
      "牛のモモ肉の一部で、しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わいが楽しめる。",
    softness: 3,
    fat: 2,
    rare: 3,
    engname: "knuckle",
  },
  {
    name: "シンシン",
    descr:
      "牛のモモ肉の一部で、非常に柔らかく脂肪が少ない。きめ細かい肉質で、ヘルシーであっさりとした味わい。",
    softness: 5,
    fat: 2,
    rare: 3,
    engname: "eye-of-round",
  },
];

export default parts;

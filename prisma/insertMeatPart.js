const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const meatParts = await prisma.meatPart.createMany({
    data: [
      {
        name: "タン",
        description:
          "牛の舌。脂肪分が多く、ほどよい歯応えと独特の食感がある。ビタミンB群が豊富に含まれている。火を通しすぎると硬くなるため、さっと炙るように焼くのが良い。",
        softness: 1,
        fat: 3,
        rare: 5,
        YorO: "yakiniku",
        position: "head-neck",
        engName: "tongue",
      },
      {
        name: "ネック",
        description:
          "牛の首。程よい脂肪が特徴で、歯応えがありつつもジューシー。タンよりも脂肪が少ないため、あっさりと食べられる。",
        softness: 2,
        fat: 2,
        rare: 3,
        YorO: "yakiniku",
        position: "head-neck",
        engName: "neck",
      },
      {
        name: "ミスジ",
        description:
          "牛の肩の部位で、非常に柔らかく、脂肪が多い。霜降りが美しく、焼肉でも人気の部位。焼き過ぎると脂が溶けてしまうため、軽く焼くのがおすすめ。",
        softness: 4,
        fat: 4,
        rare: 4,
        YorO: "yakiniku",
        position: "shoulder",
        engName: "misuji",
      },
      {
        name: "肩サンカク",
        description:
          "牛の肩肉で、しっかりとした歯応えが特徴。適度な脂肪と旨味があり、焼肉として非常に人気がある。焼きすぎないように注意が必要。",
        softness: 3,
        fat: 3,
        rare: 3,
        YorO: "yakiniku",
        position: "shoulder",
        engName: "katasankaku",
      },
      {
        name: "ザブトン",
        description:
          "牛の肩ロースの一部で、非常に柔らかく脂肪が多い。特に霜降りが美しい部位で、高級焼肉として提供されることが多い。",
        softness: 5,
        fat: 5,
        rare: 5,
        YorO: "yakiniku",
        position: "shoulder",
        engName: "zabuton",
      },
      {
        name: "サーロイン",
        description:
          "牛の背中部分で、柔らかく脂肪が多い。適度な霜降りがあり、ステーキとしても焼肉としても人気が高い。旨味が強く、ジューシー。",
        softness: 4,
        fat: 4,
        rare: 5,
        YorO: "yakiniku",
        position: "back",
        engName: "sirloin",
      },
      {
        name: "リブロース",
        description:
          "牛の背中部分で、柔らかく脂肪が多い。霜降りが豊富で、焼肉やステーキとして人気。脂の旨味とジューシーさが特徴。",
        softness: 4,
        fat: 4,
        rare: 4,
        YorO: "yakiniku",
        position: "back",
        engName: "ribeye",
      },
      {
        name: "ヒレ",
        description:
          "牛の背中の一部で、非常に柔らかく脂肪が少ない。肉質がきめ細かく、焼肉としてもステーキとしても人気がある。あっさりとした味わい。",
        softness: 5,
        fat: 2,
        rare: 5,
        YorO: "yakiniku",
        position: "back",
        engName: "tenderloin",
      },
      {
        name: "シャトーブリアン",
        description:
          "ヒレの中心部分で、最も柔らかく脂肪が少ない。非常に希少な部位で、高級感があり、特別な機会に提供されることが多い。",
        softness: 5,
        fat: 2,
        rare: 5,
        YorO: "yakiniku",
        position: "back",
        engName: "chateaubriand",
      },
      {
        name: "タテバラ(カルビ)",
        description:
          "牛の腹肉で、非常に柔らかく脂肪が多い。ジューシーで濃厚な味わいが特徴。焼肉では定番の部位で、タレとの相性も良い。",
        softness: 4,
        fat: 4,
        rare: 4,
        YorO: "yakiniku",
        position: "chest-belly",
        engName: "short-rib(karubi)",
      },
      {
        name: "カイノミ",
        description:
          "牛の腹肉で、柔らかく脂肪が多い。焼肉として非常に人気があり、旨味が強くジューシー。軽く炙る程度で食べるのが美味しい。",
        softness: 4,
        fat: 4,
        rare: 3,
        YorO: "yakiniku",
        position: "chest-belly",
        engName: "flap-meat",
      },
      {
        name: "サンカクバラ(特上カルビ)",
        description:
          "最上級のカルビで、非常に柔らかく脂肪が多い。霜降りが美しく、口の中でとろけるような食感が楽しめる。",
        softness: 5,
        fat: 5,
        rare: 3,
        YorO: "yakiniku",
        position: "chest-belly",
        engName: "sankakubara",
      },
      {
        name: "ランプ",
        description:
          "サーロインの隣に位置する部位で、程よい歯応えが特徴。脂肪が少なく、ヘルシーであっさりとした味わい。",
        softness: 3,
        fat: 2,
        rare: 4,
        YorO: "yakiniku",
        position: "round",
        engName: "rump",
      },
      {
        name: "イチボ",
        description:
          "牛のモモ肉の一部で、適度な脂肪が特徴。旨味が強く、しっかりとした食感が楽しめる。焼肉では人気の部位。",
        softness: 3,
        fat: 3,
        rare: 4,
        YorO: "yakiniku",
        position: "round",
        engName: "ichibo",
      },
      {
        name: "シキンボ",
        description:
          "牛のモモ肉の一部で、しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わいが楽しめる。",
        softness: 3,
        fat: 2,
        rare: 3,
        YorO: "yakiniku",
        position: "round",
        engName: "shikinbo",
      },
      {
        name: "シンシン",
        description:
          "牛のモモ肉の一部で、非常に柔らかく脂肪が少ない。きめ細かい肉質で、ヘルシーであっさりとした味わい。",
        softness: 5,
        fat: 2,
        rare: 3,
        YorO: "yakiniku",
        position: "round",
        engName: "shinshin",
      },
      {
        name: "ハツ",
        description:
          "牛の心臓。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。鉄分が豊富で栄養価が高い。",
        softness: 1,
        fat: 1,
        rare: 5,
        YorO: "offal",
        position: "head-chest",
        engName: "hatsu",
      },
      {
        name: "ツラミ",
        description:
          "牛のほほ肉で、しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。カシラとも呼ばれる。",
        softness: 2,
        fat: 2,
        rare: 3,
        YorO: "offal",
        position: "head-chest",
        engName: "tsurami",
      },
      {
        name: "ウルテ",
        description:
          "牛の喉の気管軟骨。非常に歯応えがあり、独特の食感が楽しめる。脂肪が少なく、ヘルシー。",
        softness: 1,
        fat: 1,
        rare: 3,
        YorO: "offal",
        position: "head-chest",
        engName: "urute",
      },
      {
        name: "シビレ",
        description:
          "牛の膵臓。ぷりぷりとした食感が特徴。脂肪が適度にあり、旨味が強い。焼きすぎないように注意。",
        softness: 3,
        fat: 3,
        rare: 3,
        YorO: "offal",
        position: "head-chest",
        engName: "shibire",
      },
      {
        name: "センマイ",
        description:
          "牛の第三胃。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わい。独特の風味が楽しめる。",
        softness: 1,
        fat: 1,
        rare: 4,
        YorO: "offal",
        position: "stomach",
        engName: "senmai",
      },
      {
        name: "ハチノス",
        description:
          "牛の第二胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。",
        softness: 1,
        fat: 1,
        rare: 3,
        YorO: "offal",
        position: "stomach",
        engName: "hachinosu",
      },
      {
        name: "ミノ",
        description:
          "牛の第一胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。焼き過ぎに注意。",
        softness: 2,
        fat: 2,
        rare: 3,
        YorO: "offal",
        position: "stomach",
        engName: "mino",
      },
      {
        name: "ハラミ(サガリ)",
        description:
          "牛の横隔膜の一部で、柔らかく歯応えがある。脂肪が適度にあり、ジューシーで濃厚な味わい。",
        softness: 3,
        fat: 3,
        rare: 4,
        YorO: "offal",
        position: "abdomen",
        engName: "harami(sagari)",
      },
      {
        name: "レバー",
        description:
          "牛の肝臓。ふわふわとした食感が特徴。ビタミンAや鉄分が豊富で栄養価が高い。軽く炙る程度で食べるのが美味しい。",
        softness: 5,
        fat: 2,
        rare: 4,
        YorO: "offal",
        position: "abdomen",
        engName: "liver",
      },
      {
        name: "ヒモ(マルチョウ)",
        description:
          "牛の小腸。脂とぷりぷりとした食感が特徴。非常にジューシーで、焼肉では人気の部位。",
        softness: 4,
        fat: 5,
        rare: 3,
        YorO: "offal",
        position: "abdomen",
        engName: "himo(marucho)",
      },
      {
        name: "シマチョウ",
        description:
          "牛の大腸。しっかりとした歯応えが特徴。脂が多く、濃厚な旨味が楽しめる。",
        softness: 3,
        fat: 5,
        rare: 3,
        YorO: "offal",
        position: "abdomen",
        engName: "shimacho",
      },
      {
        name: "マメ",
        description:
          "牛の腎臓。しっかりとした歯応えが特徴。脂肪が適度にあり、旨味が強い。焼き過ぎに注意。",
        softness: 2,
        fat: 3,
        rare: 3,
        YorO: "offal",
        position: "abdomen",
        engName: "mame",
      },
    ],
  });

  console.log("Inserted MeatParts:", meatParts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

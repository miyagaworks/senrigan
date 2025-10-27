export interface Book {
  asin: string;
  title: string;
  subtitle?: string;
  publishDate: string;
  price: number;
  isFeatured?: boolean;
  description?: string;
  imageUrl?: string; // カスタム画像URLを指定可能
}

export const books: Book[] = [
  {
    asin: "B0FXFHGW37",
    title: "アミダス人",
    subtitle: "それはプラモデルからはじまった",
    publishDate: "2025-10-23",
    price: 99,
    isFeatured: true, // おすすめ書籍
    description: "田舎のプラモデル少年が40歳で独立。\n貯金ゼロから這い上がった「編み出す力」の正体。\n\n読み終わった後にもう一つの扉が開く🔓",
    imageUrl: "https://m.media-amazon.com/images/I/81UO8ZJKY8L._SL1500_.jpg",
  },
  {
    asin: "B0FWJF2YKC",
    title: "ゴルフ録 記録データが導く、あなただけのスコアアップ",
    publishDate: "2025-10-16",
    price: 99,
  },
  {
    asin: "B0FV2DV28C",
    title: "デザイナーこそエンジニアになれ",
    publishDate: "2025-10-07",
    price: 600,
  },
  {
    asin: "B0FTGDVK9S",
    title: "生きる意味 現代人が見失った人生の真実",
    publishDate: "2025-10-01",
    price: 1180,
  },
  {
    asin: "B0FP4SVFDF",
    title: "魂の声 本来の自分と人生の使命",
    publishDate: "2025-08-29",
    price: 99,
  },
  {
    asin: "B0FX3PDRZQ",
    title: "道徳 覚える教育から、考える教育へ",
    publishDate: "2025-10-21",
    price: 500,
  },
];

// Amazon画像URL生成ヘルパー
export const getAmazonImageUrl = (asin: string): string => {
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.jpg`;
};

// Amazon商品ページURL生成ヘルパー
export const getAmazonProductUrl = (asin: string): string => {
  return `https://www.amazon.co.jp/dp/${asin}`;
};

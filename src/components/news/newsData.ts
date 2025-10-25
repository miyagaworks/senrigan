import { NewsItem } from "./types";
import {
  Users2,
  Rocket,
  Code2,
  LineChart,
  Globe2,
  Building2,
  Smartphone,
} from "lucide-react";

export const newsItems: NewsItem[] = [
  {
    id: 8,
    category: "press",
    title: "ゴルフ上達アプリ「上手くなる気がするぅぅぅ」正式リリース",
    date: "2025.10.25",
    icon: LineChart,
    color: "green",
    excerpt:
      "ショット精度を可視化し、傾斜やクラブ別の分析でゴルフ上達をサポートする新アプリをリリースしました。実戦データから本当の課題を発見できます。",
    tags: ["新サービス", "ゴルフ", "スポーツテック", "モバイルアプリ"],
    link: "https://kigasuru.com/",
  },
  {
    id: 7,
    category: "press",
    title: "デジタル名刺サービス「Share」正式リリース",
    date: "2025.06.01",
    icon: Smartphone,
    color: "blue",
    excerpt:
      "複数のSNSアカウントを一元管理できる次世代デジタル名刺サービス「Share」を正式リリースしました。QRコードでワンタッチ共有を実現。",
    tags: ["新サービス", "デジタル名刺", "SNS"],
  },
  {
    id: 1,
    category: "press",
    title: "大手製造業向けDXソリューションの提供を開始",
    date: "2024.03.15",
    icon: Rocket,
    color: "blue",
    excerpt:
      "製造現場のデジタル化を促進し、生産性を向上させる新しいソリューションの提供を開始しました。",
    tags: ["DX", "製造業", "IoT"],
  },
  {
    id: 2,
    category: "blog",
    title: "マイクロフロントエンドアーキテクチャの実践的導入ガイド",
    date: "2024.03.10",
    icon: Code2,
    color: "purple",
    excerpt:
      "大規模Webアプリケーションの開発効率を向上させるマイクロフロントエンドの実装方法を解説します。",
    tags: ["フロントエンド", "アーキテクチャ", "開発手法"],
  },
  {
    id: 3,
    category: "event",
    title: "Tech Conference 2024 春季開催のお知らせ",
    date: "2024.03.05",
    icon: Users2,
    color: "green",
    excerpt:
      "最新のWeb技術トレンドとDXソリューションを紹介する技術カンファレンスを開催します。",
    tags: ["イベント", "技術動向", "DX"],
  },
  {
    id: 4,
    category: "press",
    title: "クラウドネイティブ開発センターの設立",
    date: "2024.03.01",
    icon: Globe2,
    color: "orange",
    excerpt:
      "最新のクラウド技術に特化した開発センターを設立し、高度な技術サービスの提供を開始します。",
    tags: ["クラウド", "組織", "技術革新"],
  },
  {
    id: 5,
    category: "blog",
    title: "AIを活用した業務効率化の実践事例",
    date: "2024.02.28",
    icon: LineChart,
    color: "indigo",
    excerpt:
      "実際のプロジェクトにおけるAI活用事例と、その導入プロセスについて詳しく解説します。",
    tags: ["AI", "業務効率化", "事例紹介"],
  },
  {
    id: 6,
    category: "event",
    title: "DXリーダー育成プログラムの開講",
    date: "2024.02.25",
    icon: Building2,
    color: "teal",
    excerpt:
      "デジタルトランスフォーメーションを推進するリーダーを育成する教育プログラムを開始します。",
    tags: ["教育", "DX", "リーダーシップ"],
  },
];
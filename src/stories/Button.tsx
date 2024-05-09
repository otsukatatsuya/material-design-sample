// Reactライブラリをインポート
import React from "react";

// Tailwindのバリアントを使用するためのtv関数をインポート
import { tv } from "tailwind-variants";

// ボタンのスタイル定義
const button = tv({
  // 基本のスタイル
  base: "text-white rounded-full h-10 px-6 py-1",
  variants: {
    // 色のバリエーション
    color: {
      filled: "text-m3-sys-light-on-primary",
      outlined: "text-m3-sys-light-primary",
    },
    // 背景のバリエーション
    background: {
      filled: "bg-m3-sys-light-primary",
      outlined: "bg-m3-sys-light-on-primary",
    },
    // 枠線のバリエーション
    border: {
      outlined: "border-1 border-m3-sys-light-outline",
    },
  },
});

// Buttonコンポーネントのプロパティの型定義
interface ButtonProps {
  style: "filled" | "outlined" | "text" | "elevated" | "tonal";
  showIcon?: boolean; // アイコンを表示するかどうか
  icon?: React.ReactNode; // アイコンの要素
  children: React.ReactNode; // 子要素
  onClick?: () => void; // クリック時のイベントハンドラ
}

// Buttonコンポーネントの定義
export const Button = ({
  style = "filled", // デフォルトのスタイルは「filled」
  showIcon = false, // アイコンを表示しない
  icon, // アイコン要素
  ...props // その他のプロパティ
}: ButtonProps) => {
  // ボタンのクラス名を設定
  const className = button({
    color: style,
    background: style,
    border: style,
  });

  // ボタン要素の返却
  return (
    <button type="button" className={className} {...props}>
      {props.children} 
    </button>
  );
};

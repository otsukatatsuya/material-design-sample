# 概要・目的
- 出来上がったデザインをどのように実装に落とし込むかを体系的に学ぶ演習
- 実際にReact(TS) + StoryBook + Tailwindを実装する
- [デザイン](https://www.figma.com/file/77z4ekDS0ykkw2ZYg8X0Hp/Material-3-Design-Kit-(Community)?type=design&node-id=53923-27456&mode=dev)

## 現状
- Buttonコンポーネントが存在しない。Storybookは立ち上がっている。

## 目標
- FilledとOutlinedのButtonをStoryBook上で確認できる
- Tailwind・Tailwind Variantを使用する

## 実装関連

### ディレクトリ構成

対象のファイルは以下です

```
.
└── src
    └── stories
        ├── Button.tsx
        └── Button.stories.ts
```

### 実装の流れ
1. Propsを定義する
2. Component・JSXを記述する。
3. Tailwind・Tailwind variantを適用する
4. Storyを定義する
5. StoryBook上で確認する
6. 必要に応じて、修正を行う
7. 2~6を繰り返す


### React(TS)

- [Propsとは](https://ja.react.dev/learn/passing-props-to-a-component)
- [JSXとは](https://ja.react.dev/learn/writing-markup-with-jsx)

### Storybook

- [基本の書き方](https://reffect.co.jp/react/react-typescript-storybook7#StoryBook)
- [特定の状態(story)のコンポーネントを描画する方法](https://qiita.com/masakinihirota/items/ac552b8b492d2b962818#storybook%E3%81%A7%E6%9C%80%E5%B0%8F%E9%99%90%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8B)

### Tailwind

- [よく使う記法](https://zenn.dev/manase/scraps/bc8bfcbffbc2c1)
- [変数を追加する方法](https://tailwindcss.com/docs/customizing-colors)



### Tailwind Variant

- [基本の書き方](https://zenn.dev/yend724/articles/20230603-wgnqrgmj8kymzpev)

## ローカルで作業する手順

- 前提
  - node,npmがinstall済み

1. 任意の作業フォルダに移動
2. 以下のコマンドで、リポジトリを取得
```
git clone https://github.com/otsukatatsuya/material-design-sample.git
```
4. 任意のIDEを用いて、そちらを開く
5. ルートで、以下のコマンドを実行
```
npm i
npm run storybook
```
7. webサーバーが立ち上がり、正常に閲覧できることを確認する

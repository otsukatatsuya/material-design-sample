# 概要・目的
- 出来上がったデザインをどのように実装に落とし込むかを体系的に学ぶ演習
- 実際にReact(TS) + StoryBook + Tailwindを実装する
- [デザイン](https://www.figma.com/file/77z4ekDS0ykkw2ZYg8X0Hp/Material-3-Design-Kit-(Community)?type=design&node-id=51159-4655&mode=dev)

## 現状
- Buttonコンポーネントの、FilledとOutlinedが実装済みで、StoryBook上で確認できる

## 目標
- Iconを表示したButtonコンポーネントをStoryBook上で確認できる
- Elevated buttonsのStoryをStoryBook上で確認できる

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
### React(TS)
- Propsとは
- JSXとは

### Storybook

- [特定の状態(story)のコンポーネントを描画する方法](https://qiita.com/masakinihirota/items/ac552b8b492d2b962818#storybook%E3%81%A7%E6%9C%80%E5%B0%8F%E9%99%90%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8B)

### Tailwind

- 変数を追加する方法
- 横並びにする方法
- スペースを設ける方法


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

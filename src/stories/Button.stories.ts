// Storybookで使用する型をインポート
import type { Meta, StoryObj } from '@storybook/react';
// Storybookのテストモジュールからfnをインポート
import { fn } from '@storybook/test';
// Buttonコンポーネントをインポート
import { Button } from './Button';

// ストーリーの設定方法についての詳細: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button', // タイトル設定
  component: Button, // 対象のコンポーネント
  parameters: {
    layout: 'centered', // レイアウトを中央に配置
  },
  // 自動生成されるAutodocsエントリーについて: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // argTypesに関する詳細: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  // onClickイベントをfnでスパイし、アクションパネルに表示: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>; // Meta型の適用

// デフォルトのメタデータをエクスポート
export default meta;

// Story型を定義
type Story = StoryObj<typeof meta>;

// argを使用したストーリーの書き方について: https://storybook.js.org/docs/writing-stories/args
export const Filled: Story = {
  args: {
    style: 'filled', // ボタンスタイルを'filled'に設定
    children: 'Button', // ボタンに表示するテキスト
  },
};

export const Outlined: Story = {
  args: {
    style: "outlined", // ボタンスタイルを'filled'に設定
    children: 'Button', // ボタンに表示するテキスト
  },
};


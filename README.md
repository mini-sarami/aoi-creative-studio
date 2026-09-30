# AOI Creative Studio — ポートフォリオサイト（架空のデモサイト）

東京・広尾を拠点とするAIクリエイティブスタジオ「AOI Creative Studio」の1ページ・ポートフォリオサイトです。
GitHub Pages での公開を想定して作成しており、フレームワークや外部CDNは使用していません（vanilla HTML / CSS / JS のみ）。

> ※ 掲載しているスタジオ・サービス・作品・人物は、すべて架空のものです。

## ファイル構成

```text
aoi-creative-studio/
├── index.html        # ページ本体（Header / Hero / About / Services / Works / Team / Contact / Footer）
├── style.css         # スタイル（白背景 × ブルーのアクセント、モバイル対応）
├── script.js         # モバイルメニュー・スクロール演出・ダミーフォームの制御
├── .nojekyll         # GitHub Pages の Jekyll 処理を無効化するための空ファイル
├── images/
│   └── google.png    # Hero に表示する Google AI Professional Certificate のバッジ画像
└── assets/
    ├── images/       # １.png 〜 ４.png（ヒーロー / About / Team / Works のポスターで使用）
    └── videos/       # AOIの秘密.mp4、アイドル歌謡番組のライブ映像制作_20260918134457.mp4
```

## ローカルで確認する

プロジェクトのルートで以下を実行し、ブラウザで `http://localhost:8000` を開いてください。

```bash
python3 -m http.server 8000
```

## GitHub Pages への公開手順

1. このフォルダの中身を GitHub リポジトリに push します（`index.html` がリポジトリのルートに配置される構成です）。
2. リポジトリの **Settings → Pages** を開きます。
3. **Source: Deploy from a branch** / **Branch: main（root）** を選択して保存します。
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

`.nojekyll` を配置済みのため Jekyll による処理は行われず、日本語（全角）を含むファイル名のアセットもそのまま配信されます。

## 実装メモ

- 動画タグは `controls` と `preload="metadata"` を指定し、すべて相対パスで読み込んでいます。
- 画像が読み込めない環境でもレイアウトが崩れないよう、アスペクト比を固定したプレースホルダー表示へフォールバックします。
- お問い合わせフォームはダミー実装で、入力内容はどこにも送信・保存されません。
- 外部フォント・CDN・JSライブラリは使用していません。サイトはオフラインでも表示できます。

# SVG

## HTMLファイルでSVGを描画

このリポジトリはドロップダウンメニュー（`select`要素）を使用して、白色の二重線の下にある白色のエリア（`iframe`要素内）に各ディレクトリ内にある`index.html`ファイルの内容が表示されるようにしています。

［**選択してください**］を押下し、どれかを選択して表示させてみてください。

表示された内容は上から順に以下の通りです。

- プレビュー画面（`section`要素）
    - textarea要素内に記述されたコードの結果が表示されてます。
- XMLコード（`textarea`要素）
    - XMLコードが記述されています。
- リセットボタン（`input`要素）
    - textarea要素内に記述されているコードの変更を初期値（読み込まれた最初の状態）に戻すためのボタンです。
<br>

## 共通設定

### XML

svg要素はXML（Extensible Markup Language）マークアップ言語を使用してベクターグラフィックを描画させるための要素です。

### `width`属性と`height`属性

プレビュー画面（section要素）の幅と高さに対して`100%`で描画されるようにしています。

### `viewBox`属性

値は左から順番に`min-x`、`min-y`、`width`、`height`となり、左上の端`0`の地点から幅`300px`、高さ`100px`の大きさで描画されているとなります。

### `xmlns`属性

SVGにはHTMLと同じ名前の要素があるため、それと区別する際の**XML名前空間**となります。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
    <!-- ここから描画させたい要素を記述する -->
</svg>
```

SVG領域内（幅`300px`、高さ`100px`）の背景色を`#000`（黒色）にしています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- SVG領域 -->
    <rect width="100%" height="100%" fill="#000" />
</svg>
```

### CSS

アットルールを使用して画面の幅が`699px`以下の場合、textarea要素内に記述されているコードのフォントサイズを`120%`から`100%`へと変更しています。 

```css
@media screen and (max-width: 699px) {
    textarea {
        font-size: 100%;
    }
}
```

このCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。
<br>

## 基本

[default.html](basic/resources/default.html "basic/resources/default.html")、[xy.html](basic/resources/xy.html "basic/resources/xy.html")、[color.html](basic/resources/color.html "basic/resources/color.html")、[opacity.html](basic/resources/opacity.html "basic/resources/opacity.html")、[fonts.html](basic/resources/fonts.html "basic/resources/fonts.html")の組み合わせ

**共通設定**に記述してある`#000`（黒色）の背景に以下の円弧、三角形、矩形を描画させています。

SVG領域内のX軸`60px`Y軸`55px`の位置に直径`30px`の`#0f0`（半透明の緑色）の円弧を線幅`5px`にして描画させています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 緑色の円弧 -->
    <circle
        cx="60" cy="55"
        r="30"
        fill="#0f0" fill-opacity="0.5"
        stroke="#0f0" stroke-width="5"
    />
</svg>
```

SVG領域内のX軸`145px`Y軸`38px`、X軸`175px`Y軸`85px`、X軸`115px`Y軸`85px`の３つのポイントを線幅`5px`にした線で繋ぎ`#00f`（半透明の青色）の三角形を描画させています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 青色の三角形 -->
    <polygon
        points="145,30 175,85 115,85"
        fill="#00f" fill-opacity="0.5"
        stroke="#00f" stroke-width="5"
    />
</svg>
```

SVG領域内のX軸`205px`Y軸`25px`の位置から幅と高さともに`60px`の`#f0f`（半透明の紫色）の矩形を線幅`5px`にして描画させています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 紫色の矩形 -->
    <rect
        x="205" y="25"
        width="60" height="60"
        fill="#f0f" fill-opacity="0.5"
        stroke="#f0f" stroke-width="5"
    />
</svg>
```

SVG領域内のX軸`95px`Y軸`20px`、X軸`80px`Y軸`30px`の２つのポイントを線幅`1px`で繋いだ`#fff`（白色）の線と塗りつぶしの円弧、テキスト（`stroke`）を使用してどれが線なのかを描画しています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 白色の直線 -->
    <line x1="95" x2="80" y1="20" y2="30" stroke="#fff" stroke-width="1" />
    <!-- 白色の円弧 -->
    <circle cx="80" cy="30" r="2" fill="#fff" />
    <!-- テキスト -->
    <text x="95" y="20" fill="#fff" font-family="sans-serif" font-size="16px">stroke</text>
</svg>
```

SVG領域内のX軸`95px`Y軸`40px`、X軸`75px`Y軸`55px`の２つのポイントを線幅`1px`で繋いだ`#fff`（白色）の線と塗りつぶしの円弧、テキスト（`fill`）を使用してどれが塗りつぶしなのかを描画しています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 白色の直線 -->
    <line x1="95" x2="75" y1="40" y2="55" stroke="#fff" stroke-width="1" />
    <!-- 白色の円弧 -->
    <circle cx="75" cy="55" r="2" fill="#fff" />
    <!-- テキスト -->
    <text x="95" y="40" fill="#fff" font-family="sans-serif" font-size="16px">fill</text>
</svg>
```
<br>

## アニメーション

[transform.html](advanced/resources/transform.html "advanced/resources/transform.html")、[gradation.html](advanced/resources/gradation.html "advanced/resources/gradation.html")、[paths.html](advanced/resources/paths.html "advanced/resources/paths.html")、[animation.html](advanced/resources/animation.html "advanced/resources/animation.html")の組み合わせ

まずはじめに、defs要素を使用して`#0f0`（緑色）から`#0ff`（水色）へと変化する放射グラデーションの設定をします。このdefs要素を使用した設定はsvg要素内の一番上に記述しなくてはいけません。この設定の後に**共通設定**に記述してある`#000`（黒色）の背景、パスで描かれた点線と放射グラデーションやアニメーションなどを設定した円弧を重ねて描画させています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 放射グラデーションの設定 -->
    <defs>
        <radialGradient id="radialGradient">
            <stop offset="0%" stop-color="#0f0" />
            <stop offset="100%" stop-color="#0ff" />
        </radialGradient>
    </defs>
</svg>
```

SVG領域内の`M 80 20`の位置を起点にして`L 40 80`と`L 120 80`の位置にポイントされた線幅`1px`の`#fff`（白色）の三角形の点線を描画させ、`#0f0`（緑色）から`#0ff`（水色）へと変化する放射グラデーションで塗りつぶされた直径`5px`の円弧を`M 80 20`と同じ位置（`translate(80,20)`）から`10秒`かけて繰り返しなぞるようにアニメーションさせています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 白色（三角形）の点線 -->
    <path
        d="M 80 20 L 40 80 L 120 80 Z"
        fill="transparent"
        stroke="#fff"  stroke-width="1"
        stroke-linecap="round" stroke-dasharray="5,5"
    />
    <!-- 円弧（放射グラデーション、座標変換、三角形をなぞるアニメーション） -->
    <circle cx="0" cy="0" r="5" fill="url(#radialGradient)" transform="translate(80,20)">
        <animateMotion path="M 0 0 L -38 60 L 40 60 Z" dur="10s" repeatCount="indefinite" />
    </circle>
</svg>
```

SVG領域内の`M 180 20`の位置を起点にして幅`h 70`と高さ`v 60`の位置にポイントされた線幅`1px`の`#fff`（白色）の矩形の点線を描画させ、`#0f0`（緑色）から`#0ff`（水色）へと変化する放射グラデーションで塗りつぶされた直径`5px`の円弧を`M 180 20`と同じ位置（`translate(180,20)`）から`10秒`かけて繰り返しなぞるようにアニメーションさせています。

```xml
<svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" >
    <!-- 白色（矩形）の点線 -->
    <path
        d="M 180 20 h 70 v 60 h -70 Z"
        fill="transparent"
        stroke="#fff"  stroke-width="1"
        stroke-linecap="round" stroke-dasharray="5,5"
    />
    <!-- 円弧（放射グラデーション、座標変換、矩形をなぞるアニメーション） -->
    <circle cx="0" cy="0" r="5" fill="url(#radialGradient)" transform="translate(180,20)">
        <animateMotion path="M 0 0 v 60 h 70 v -60 Z" dur="10s" repeatCount="indefinite" />
    </circle>
</svg>
```
<br>

※ 日本時間 2024/12/18 に変更しました。
<br><br>

[完成ページへ](https://yscyber.github.io/svg/ "https://yscyber.github.io/svg/")

# 概要

## SVG

### HTMLファイルでSVGを描画

このリポジトリを作成するにあたり、元の題材に関して苦慮しましたが、自分自身のGitHubアカウントロゴを[INKSCAPE](https://inkscape.org/ja/ "https://inkscape.org/ja/")で作成した`.svg`ファイルがあったので、それを活用することにしました。

1. デフォルトのSVGです。ここから変更を加えていきます。
    - もともとは`.svg`ファイルでしたが、単純化(作成した際に付随していたINKSCAPE用の記述を削除するなど)して`.html`ファイルに変換しました。
1. 座標指定
    - `svg`要素内の一番下にある`text`要素の`x`属性(長さ)と`y`属性(長さ)の値を変更して、`circle`要素の領域内の右下に移動させています。
1. 色の変更
    - `svg`要素内の一番下にある`text`要素の`fill`属性(色)の値を<span style="color: #54abba ;">#54abba</span>から<span style="color: #54ba65; ">#54ba65</span>へと変更しています。
1. 透明度
    - `svg`要素内の一番下にある`text`要素に`fill-opacity`属性(透明度)を追加し、値に`0.5`を付与して半透明にしています。
1. フォントを変更
    - `svg`要素内の一番下にある`text`要素の`font-family`属性(書式名)の値を`Impact,sans-serif`から`Georgia,sans-serif`へと変更しましたが、バランスを考慮して、`font-size`属性(長さ)、`x`属性(長さ)、`y`属性(長さ)を変更。さらには`font-weight`属性(太さ)を追加し、値を`bold`(太い)としています。
    - 今回は`Georgia`を使用しましたが、CSSと同様その他のたくさんの値が使用できます。
    - `sans-serif`に関しては、指定するか迷いましたが、念のため、`Impact`、`Georgia`に対応していないブラウザに備えて指定しています。
1. 座標変換
    - `svg`要素内の一番下にある`text`要素に`transform`属性を追加し、値を`translate(38,70) rotate(45)`としています。これは、単純に`circle`要素の領域内の真ん中に`45`度傾いた`text`要素を配置しているだけです。
    - ただし、`translate(x,y)`値を使用する際には、`x`属性、`y`属性を`0`に指定しておかなければなりません。
    - 座標変換もフォントと同様、CSSと同様の値が使用できます。
1. グラデーション
    - `svg`要素内の一番上にある`defs`要素とは、あらかじめ指定しておく要素のための要素(ここでは、`radialGradient`要素(<span style="color: gray; ">灰色 0%</span>から<span style="color: silver; ">銀色 100%</span>へと変換)と`linearGradient`要素(<span style="color: #54abba; ">#54abba 0%</span>から<span style="color: #54ba65; ">#54ba65  50%</span>、さらに<span style="color: #a2ba54;">#a2ba54 100%</span>へと変換))です。`defs`要素内の要素には後述する要素に対して利用できるように`id`属性を与えておき、`radialGradient`要素(`id`属性`radialGradient`)を`circle`要素の`fill`属性(色)に、`linearGradient`要素(`id`属性`linearGradient`)を`text`要素の`fill`属性(色)へと指定します。
    - ここで、`fill`属性(色)へ指定する値に関して気を付けなければいけないことは**url(#id名)**と記述することです。
    - `radialGradient`要素内と`linearGradient`要素内に記述されている`stop`要素に関しては、この2つの要素内でしか使用できず、`offset`属性(0%から100%)、`stop-color`属性(色)、`stop-opacity`属性(透明度)が使用できます。
1. 組み合わせ
    - これまで行ってきた変換をすべて行っていますが、ここでは1つだった`text`要素を2つの`text`要素に分け、それぞれに異なる値を指定しています。
1. パス指定
    - ここでは、`text`要素を削除し、文字はすべて`path`要素で記述してあります。三次ペジェ曲線(Yの曲線)、直線(Yの直線)、三次ペジェ曲線(Sの曲線)、直線(Sの直線)の順番で記述しています。
    - 手書き風に描きたかったので、`stroke-width`属性(太さ)をできるだけ細くし、`stroke-linecap`属性(butt、round、square、inherit)の値を`round`にしてパスの始点と終点を丸くしてみました。
1. アニメーション
    - デフォルトのSVGにアニメーションを追加してみました。
    - `circle`要素と`text`要素の間に`radialGradient`要素(<span style="color: pink; ">ピンク色 0%</span>から<span style="color: orange; ">オレンジ色 100%</span>へと変換)でグラデーションされた小さな球体を新たに`circle`要素で記述しています。
    - 動きは`circle`要素内で`animateMotion`要素を記述し、パスで指定しています。他にも、`dur`属性(時間)の値を`10s`(10秒)と`repeatCount`属性(繰り返し)の値を`indefinite`(不定)にしています。

[完成ページへ](https://yscyber.github.io/svg/ "https://yscyber.github.io/svg/")

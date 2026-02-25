// npm install lucide-react recharts
import { useState, useEffect } from 'react';
import { Check, X, Home, ChevronRight, List, RefreshCw, AlertCircle, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const QUIZ_DATA = [
  {
    id: 1,
    title: "問題 1 コンピュータの5大装置",
    text: "コンピュータの5大装置に関する次の文中の空欄Ａ～Ｄに入る語句の組み合わせとして、最も適切なものを下記の解答群から選べ。コンピュータのハードウェアには、5種類の装置がある。それは、入力装置、出力装置、記憶装置、（　Ａ　）、（　Ｂ　）である。　記憶装置は、データを保存しておくための装置であり、 （　Ｃ　）であるハードディスクなどや、（　Ｄ　）であるメモリがある。　（　Ａ　）の指示により、記憶装置に格納されているデータが（　Ｂ　）に転送されて処理される。その結果は再び記憶装置に転送された後、出力装置に転送されてディスプレイなどに表示される。",
    choices: [
      { id: "ア", text: "Ａ：制御装置　Ｂ：演算装置　Ｃ：主記憶装置　Ｄ：補助記憶装置" },
      { id: "イ", text: "Ａ：演算装置　Ｂ：制御装置　Ｃ：主記憶装置　Ｄ：補助記憶装置" },
      { id: "ウ", text: "Ａ：制御装置　Ｂ：演算装置　Ｃ：補助記憶装置　Ｄ：主記憶装置" },
      { id: "エ", text: "Ａ：演算装置　Ｂ：制御装置　Ｃ：補助記憶装置　Ｄ：主記憶装置" }
    ],
    answer: "ウ",
    explanation: "ここが重要：本問ではコンピュータの5大装置について問われています。コンピュータの5大装置とは、ハードウェアを構成する要素であり、入力装置、出力装置、記憶装置、演算装置、制御装置のことを言います。\nＡ：制御装置、Ｂ：演算装置 制御装置は、プログラムに従って他の装置に命令を出す装置です。 演算装置は、その名の通り、四則演算や論理演算などの演算を行う装置です。 制御装置からの命令により、記憶装置からデータが取り出されて、演算装置で計算が実行されます。\nＣ：補助記憶装置、Ｄ：主記憶装置 記憶装置には主記憶装置と補助記憶装置に分けられます。 主記憶装置はメモリと言われるもので、パソコン上で実行するプログラムやデータを一時的に記憶します。主記憶装置は高速ですが、記憶容量が小さく、電源を切ると記憶した内容が失われてしまうという特徴があります。 補助記憶装置はハードディスクやDVDなどであり、プログラムやデータを保存します。主記憶装置に比べると低速ですが、記憶容量が大きく、電源を落としても記録したデータを保持できるという特徴があります。",
    hasDiagram: "q1"
  },
  {
    id: 2,
    title: "問題 2 CPU",
    text: "PCの処理能力に関する次の文中の空欄Ａ～Ｄに入る語句の組み合わせとして、最も適切なものを下記の解答群から選べ。　CPUはクロック周波数に合わせて動作している。クロック周波数が （　Ａ　）のCPUより（　Ｂ　）のCPUの方が処理速度が速い。\nCPUが演算を行うときに、CPU内部でデータを一時的に格納しておく場所を（　Ｃ　）と呼ぶ。（　Ｃ　）の容量は（　Ｄ　）で表され、一般的に容量が大きくなるほど、CPUの処理速度は高速になる。",
    choices: [
      { id: "ア", text: "Ａ：1GHz　Ｂ：500MHz　Ｃ：キャッシュ　Ｄ：bps" },
      { id: "イ", text: "Ａ：500MHz　Ｂ：1GHz　Ｃ：レジスタ　Ｄ：bit" },
      { id: "ウ", text: "Ａ：1GHz　Ｂ：500MHz　Ｃ：レジスタ　Ｄ：bit" },
      { id: "エ", text: "Ａ：500MHz　Ｂ：1GHz　Ｃ：キャッシュ　Ｄ：bps" }
    ],
    answer: "イ",
    explanation: "ここが重要：本問ではCPUについて問われています。CPUは、コンピュータの頭脳にあたる部分で、記憶装置からプログラムを読み込んで演算処理を行います。クロック周波数が大きいほど、CPU は高速に動作します。単位はヘルツ（Hz）です。CPU内部でデータを一時的に置いておく場所をレジスタと呼びます。\nＡ：500MHz、Ｂ：1GHz クロック周波数は大きいほどCPUの処理速度は速くなります。1GHzは1000MHzを表しており、1GHzのCPUの方が速く動作します。\nＣ：レジスタ レジスタは、CPUの中にある非常に高速で小さいメモリです。\nＤ：bit レジスタの容量の単位はビット（bit）で表されます。"
  },
  {
    id: 3,
    title: "問題 3 画面処理",
    text: "コンピュータのグラフィック出力に関する次の文中の空欄Ａ～Ｃに入る語句の組み合わせとして、最も適切なものを下記の解答群から選べ。　ディスプレイに動画などを表示する場合、CPUはディスプレイへの画面出力のための処理を高速に行う必要がある。そこで、画面出力のための処理を専用で行う（　Ａ　）が開発された。\n（　Ａ　）のグラフィック出力に関する性能は、（　Ｂ　）の処理速度や（　Ｃ　）の容量などによって変わる。（　Ｂ　）は画面処理を担当するプロセッサであり、（　Ｃ　）は画面処理専用のメモリである。",
    choices: [
      { id: "ア", text: "Ａ：ビデオカード　Ｂ：CPU Ｃ：DRAM" },
      { id: "イ", text: "Ａ：ビデオカード　Ｂ：GPU　Ｃ：VRAM" },
      { id: "ウ", text: "Ａ：CAD　Ｂ：ハードディスク　Ｃ：ROM" },
      { id: "エ", text: "Ａ：マルチタスク　Ｂ：LAN　Ｃ：SRAM" }
    ],
    answer: "イ",
    explanation: "ここが重要：本問ではビデオカードについて問われています。ビデオカードは、画面処理を専用で行う装置のことです。GPUという画面処理を担当するプロセッサと、VRAMという画面処理専用のメモリが搭載されています。\nＡ：ビデオカード ビデオカードは、グラフィック出力に関する処理を専門に行い、CPUをこの処理から解放します。\nＢ：GPU ビデオカードにおいて、画面処理を担当するプロセッサをGPUと呼びます。\nＣ：VRAM ビデオカードに搭載されている画面処理専用のメモリをVRAMと呼びます。"
  },
  {
    id: 4,
    title: "問題 4 記憶装置の種類と階層",
    text: "コンピュータの記憶装置には階層構造がある。次の文中の空欄Ａ～Ｄに入る語句の組み合わせとして、最も適切なものを下記の解答群から選べ。",
    choices: [
      { id: "ア", text: "Ａ：キャッシュメモリ　Ｂ：レジスタ　Ｃ：ディスクキャッシュ　Ｄ：メモリ" },
      { id: "イ", text: "Ａ：メモリ　Ｂ：ディスクキャッシュ　Ｃ：キャッシュメモリ　Ｄ：レジスタ" },
      { id: "ウ", text: "Ａ：ディスクキャッシュ　Ｂ：メモリ　Ｃ：レジスタ　Ｄ：キャッシュメモリ" },
      { id: "エ", text: "Ａ：レジスタ　Ｂ：キャッシュメモリ　Ｃ：メモリ　Ｄ：ディスクキャッシュ" }
    ],
    answer: "エ",
    explanation: "ここが重要：記憶装置の階層構造は、上からレジスタ、キャッシュメモリ、主記憶装置、ディスクキャッシュ、補助記憶装置の順となっています。上の方が高速ですが高価という特徴があります。\nＡ：レジスタ レジスタは記憶装置の中で最も高速であり、その速度は数百ピコ秒から数ナノ秒です。\nＢ：キャッシュメモリ メモリより高速なキャッシュメモリを置くことにより、メモリへのアクセスを減らして処理を高速化します。\nＣ：メモリ 主記憶装置のことです。\nＤ：ディスクキャッシュ ハードディスクより高速なディスクキャッシュを置くことにより、ハードディスクへのアクセスを減らして処理を高速化します。",
    hasDiagram: "q4"
  },
  {
    id: 5,
    title: "問題 5 キャッシュメモリ",
    text: "主記憶装置のアクセス時間60ナノ秒、キャッシュメモリのアクセス時間10ナノ秒のコンピュータがある。CPUからデータにアクセスするときにかかる平均アクセス時間が15ナノ秒であるとき、キャッシュメモリのヒット率として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "60%" },
      { id: "イ", text: "70%" },
      { id: "ウ", text: "80%" },
      { id: "エ", text: "90%" }
    ],
    answer: "エ",
    explanation: "ここが重要：本問ではキャッシュメモリのヒット率について問われています。平均アクセス時間は次の式で求められます。キャッシュメモリのアクセス時間 × ヒット率 ＋ 主記憶装置のアクセス時間 × （1 － ヒット率）\n平均アクセス時間 ＝ キャッシュメモリのアクセス時間 × H ＋ 主記憶装置のアクセス時間×（1 － H）\n15ナノ秒 ＝ 10ナノ秒 × H ＋ 60ナノ秒 × （1 － H）\n15 ＝ 60 － 50 × Ｈ\n50 × Ｈ ＝ 45\nＨ ＝ 45 ÷ 50 ＝ 0.9\nよって、キャッシュメモリのヒット率は0.9つまり90%となります。"
  },
  {
    id: 6,
    title: "問題 6 主記憶装置1",
    text: "RAMおよびROMに関する記述として、最も不適切なものはどれか。",
    choices: [
      { id: "ア", text: "メモリには、大きくRAMとROMという種類があり、コンピュータの主記憶装置は通常はRAMである。" },
      { id: "イ", text: "電源を落としたときにメモリの内容が消えてしまうことを揮発性があると言う。" },
      { id: "ウ", text: "RAMには、DRAMとSRAMの2種類があり、主記憶装置として使われるのはSRAMである。" },
      { id: "エ", text: "近年、ROMの1種として、フラッシュメモリが普及してきた。フラッシュメモリは、書き換えが可能なROMであり、電源を落としてもデータは消えない。" }
    ],
    answer: "ウ",
    explanation: "ここが重要：RAMはデータを自由に読み書きできますが、電源を消すと内容が消えるタイプのメモリです。RAMにはDRAMとSRAMがあり、SRAMはキャッシュメモリ、DRAMは主記憶装置として使われます。\nア ○：主記憶装置としてはRAMが用いられます。\nイ ○：メモリの揮発性とは、電源を供給しないと記憶している情報を保持できないということです。\nウ ×：主記憶装置として使用されているのはDRAMです。SRAMは高速ですが高価であるため、キャッシュメモリとして使用されています。\nエ ○：ROMはもともと読み込み専用のメモリですが、最近では書き込みができるタイプのフラッシュメモリが出てきています。"
  },
  {
    id: 7,
    title: "問題 7 主記憶装置2",
    text: "フラッシュメモリの説明として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "電気的に書換え可能な、不揮発性のメモリである。" },
      { id: "イ", text: "紫外線で全データを一括消去できる。" },
      { id: "ウ", text: "周期的にデータの再書込みが必要である。" },
      { id: "エ", text: "データ読出し速度が速いメモリで、CPUと主記憶の性能差を埋めるキャッシュメモリによく使われる。" }
    ],
    answer: "ア",
    explanation: "ここが重要：フラッシュメモリはPROMの一種で、書き込み可能なROMになります。電気的にデータを書き換える、不揮発性（電源を落としてもデータが消えない）メモリです。\nア ○：フラッシュメモリは、電気的に書換え可能な、不揮発性のメモリです。\nイ ×：紫外線で全データを一括消去できるのは、紫外線消去型EPROMの特徴です。\nウ ×：フラッシュメモリは不揮発性のメモリです。周期的なデータの再書込みが不要です。\nエ ×：キャッシュメモリによく使われるのは、SRAMです。",
    hasDiagram: "q7"
  },
  {
    id: 8,
    title: "問題 8 補助記憶装置",
    text: "仮想記憶装置、スワッピングに関する記述として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "仮想記憶装置は、補助記憶装置の容量不足を補うための仕組みである。" },
      { id: "イ", text: "仮想記憶領域は、キャッシュメモリ上に設けられる。" },
      { id: "ウ", text: "光磁気ディスクを用いることによって、スワッピングは減少する。" },
      { id: "エ", text: "物理メモリを追加することによって、スワッピングは減少する。" }
    ],
    answer: "エ",
    explanation: "ここが重要：仮想記憶装置は、補助記憶装置（ハードディスクなど）を使って、仮想的に主記憶装置（メモリ）を拡張する方法です。メモリとハードディスクなどの間でのデータのやり取りが発生することをスワッピングと言います。\nア ×：仮想記憶装置は、主記憶装置（メモリ）の容量不足を補うための仕組みです。\nイ ×：仮想記憶領域は、補助記憶装置（ハードディスクなど）の中に設けられます。\nウ ×：光磁気ディスクを用いてもスワッピングは減少しません。\nエ ○：物理メモリを追加することによって、メモリ内で保持できるデータやプログラムのサイズが大きくなります。そのため、仮想記憶領域へ移す頻度が減り、スワッピングは減少します。"
  },
  {
    id: 9,
    title: "問題 9 入出力装置の種類",
    text: "入出力装置に関する記述として、最も不適切なものはどれか。",
    choices: [
      { id: "ア", text: "デジタイザは、ペン型の装置と板状の装置の組み合わせで、図形などの入力を行う装置である。" },
      { id: "イ", text: "フラットベッドスキャナは、機器を手で持ちながら原稿を読み込むタイプのスキャナである。" },
      { id: "ウ", text: "レーザープリンタの印字精度はdpiで表され、この数値が大きいほど解像度が高くなる。" },
      { id: "エ", text: "イメージスキャナの読み取り精度はdpiで表され、この数値が大きいほど解像度が高くなる。" }
    ],
    answer: "イ",
    explanation: "ここが重要：入出力装置の種類とそれぞれの特徴を押さえておきましょう。\nア ○：デジタイザの説明として正しい記述です。\nイ ×：機器を手で持ちながら原稿を読み込むタイプのスキャナはハンディスキャナと言います。\nウ ○：dpiは、1インチの幅の中にどれだけのドットを表現できるかを表します。dpiの数値が大きいほど、プリンタの解像度が高くなります。\nエ ○：スキャナの読み取り精度もdpiで表されます。"
  },
  {
    id: 10,
    title: "問題 10 インタフェースの種類1",
    text: "周辺機器接続に関する以下のa～dの記述と、その記述に適合するインタフェース名称の組み合わせとして、最も適切なものを下記の解答群から選べ。a デジタルビデオカメラなどを接続するためのインタフェースであり、最大で63台の機器を接続することができる。\nb 無線通信の規格であり、機器の間に障害物があっても、距離が10m程度までであれば通信できる。\nc パソコンに内蔵されているハードディスクやDVD装置などを接続するためのインタフェースである。\nd 液晶ディスプレイなどの表示装置を接続するためのインタフェースであり、デジタル伝送によって信号を伝える。",
    choices: [
      { id: "ア", text: "a：IEEE1394　b：Bluetooth　c：ATA　d：DVI" },
      { id: "イ", text: "a：ATA 　b：Bluetooth　c：IEEE1394 d：DVI" },
      { id: "ウ", text: "a：DVI　b：Bluetooth　c：ATA　d：IEEE1394" },
      { id: "エ", text: "a：Bluetooth　b：ATA　c：DVI　d：IEEE1394" }
    ],
    answer: "ア",
    explanation: "ここが重要：それぞれのインタフェースの名称と特徴を押さえておきましょう。\na：IEEE1394 デジタルビデオカメラなどのマルチメディア機器を接続するためのインタフェースであり、最大で63台の機器を接続することができます。\nb：Bluetooth 無線通信の規格であり、電波を使って通信するため、障害物があっても、距離が10m程度までであれば通信できます。\nc：ATA パソコンに内蔵されているハードディスクやDVD装置などを接続するためのインタフェース規格の１つです。\nd：DVI 液晶ディスプレイなどを接続するためのインタフェースであり、コンピュータから直接デジタル信号を送ることができます。"
  },
  {
    id: 11,
    title: "問題 11 インタフェースの種類2",
    text: "インタフェースの機能に関する記述として、最も不適切なものはどれか。",
    choices: [
      { id: "ア", text: "インタフェースを大きく分けると、シリアル伝送とパラレル伝送があり、パラレル伝送のインタフェースには、USB、IEEE1394、IrDA、Bluetoothなどがある。" },
      { id: "イ", text: "パソコンにUSBメモリを接続する際に、パソコンの電源を落とさなくても接続できる機能はホットプラグと呼ばれる。" },
      { id: "ウ", text: "プリンタを使用する際に、パソコンとプリンタを接続すると、OSがプリンタを自動的に検知して必要な設定が行われる機能はプラグアンドプレイと呼ばれる。" },
      { id: "エ", text: "プリンタで印刷を行う場合、一時的にハードディスクに印刷データを置き、プリンタの印刷の進行状況に応じて、少しずつ処理を行うことをスプーリングと言う。" }
    ],
    answer: "ア",
    explanation: "ここが重要：それぞれのインタフェースの機能について理解しておきましょう。\nア ×：シリアル伝送はデータを順番に転送するのに対して、パラレル伝送は並列に転送します。USB、IEEE1394、IrDA、Bluetoothは、シリアル伝送のインタフェースです。\nイ ○：パソコンの電源を落として再起動しなくても、周辺機器であるUSBメモリを接続して使用できるような機能をホットプラグと言います。\nウ ○：OSが自動的に検知して必要な最適な設定を行ってくれる機能をプラグアンドプレイと言います。\nエ ○：ハードディスクなどに一時的に印刷データを置き、プリンタの印刷の進行状況に応じて、少しずつ処理を行います。このような処理方法をスプーリングと言います。"
  },
  {
    id: 12,
    title: "問題 12 インタフェースの種類3",
    text: "コンピュータに接続するインタフェースに関する記述として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "NASとは、映像機器の入出力端子であるD端子の一種である。" },
      { id: "イ", text: "PCIとは、コンピュータ内部でグラフィックスカードなどを接続するためのシステムバスのインタフェースである。" },
      { id: "ウ", text: "e-SATAは、PC本体の電源を切らずに外付けHDDの接続が可能なパラレルインタフェースである。" },
      { id: "エ", text: "シリアルATAは、外付けHDD、モデムやマウスの接続が可能なインタフェースである。" }
    ],
    answer: "イ",
    explanation: "ここが重要：ハードディスクを接続する主なインタフェースの特徴を押さえておきましょう。\nア ×：NASは、映像機器の入出力端子であるD端子の一種ではありません。LANに接続して利用するファイルサーバです。\nイ 〇：PCIは、コンピュータ内部でグラフィックスカードやネットワークカードなどを接続するためのシステムバスのインタフェースです。\nウ ×：e-SATAはPC本体の電源を切らずに外付けHDDの接続が可能ですが、パラレルインタフェースではなくシリアルインタフェースです。\nエ ×：シリアルATAは、外付けハードディスクではなく、内蔵ハードディスクをパソコン本体と接続するための規格です。",
    hasDiagram: "q12"
  },
  {
    id: 13,
    title: "問題 13 ソフトウェアの種類",
    text: "次のソフトウェアに関する記述のうち、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "キーボードやプリンタなどの周辺装置を制御し、OSとの間で情報をやり取りするには、ミドルウェアを使用する。" },
      { id: "イ", text: "BIOSは、ハードディスクが破損すると、読み込むことはできない。" },
      { id: "ウ", text: "アプリケーションプログラムはOSの上で動作するが、必要に応じてミドルウェアにアクセスする。" },
      { id: "エ", text: "オープンソースソフトウェアは、企業内での使用には適さない。" }
    ],
    answer: "ウ",
    explanation: "ここが重要：ソフトウェアは、大きく分けて OS、ミドルウェア、アプリケーションソフトウェアに分類されます。\nア ×：キーボードやプリンタなどの周辺装置を制御し、OS との間で情報をやり取りするのは、デバイスドライバという特別なプログラムです。\nイ ×：一般的なパソコンでは、BIOS はマザーボード等の ROM に組み込まれて出荷されており、ハードディスクが壊れても起動するようになっています。\nウ ○：アプリケーションプログラムは、必要に応じてデータベース管理システムなどのミドルウェアにアクセスします。\nエ ×：オープンソースソフトウェア（OSS）は、近年利用が拡大してきており、企業・自治体での採用も進んでいます。"
  },
  {
    id: 14,
    title: "問題 14 ミドルウェア",
    text: "ミドルウェアに関する記述として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "ユーザが直接利用するソフトウェアであり、インターネットブラウザなど目的に応じて様々なものがある。" },
      { id: "イ", text: "プログラムのソースコードを一文ずつ機械語に翻訳しながら実行する。" },
      { id: "ウ", text: "データベース管理システムなど、オペレーティングシステムとアプリケーションソフトウェアの間で機能して、共通的なサービスを提供する。" },
      { id: "エ", text: "プリンタなど周辺機器を制御するためのソフトウェアで、利用する周辺機器に応じて必要なものをオペレーティングシステムに組み込んで利用する。" }
    ],
    answer: "ウ",
    explanation: "ここが重要：ソフトウェアの種類とそれぞれの役割を押さえておきましょう。\nア ×：ユーザが直接利用するソフトウェアということですから、アプリケーションソフトウェアに関する説明です。\nイ ×：ソースコードを一文ずつ機械語に変換するソフトウェアということですから、インタプリタに関する説明です。\nウ ○：ミドルウェアに関する説明です。データベース管理システムやアプリケーションサーバなどが該当します。\nエ ×：周辺機器を制御するためのソフトウェアということですから、デバイスドライバに関する説明です。"
  },
  {
    id: 15,
    title: "問題 15 OS",
    text: "オペレーティングシステム（OS）に関する記述として、最も不適切なものはどれか。",
    choices: [
      { id: "ア", text: "メモリ、ファイルの管理を行い、これらをアプリケーションソフトで利用できるようにする。" },
      { id: "イ", text: "キーボードからの入力、プリンタへの印字出力、外部記憶装置に対する読み書きなど、入出力デバイスの管理を行う。" },
      { id: "ウ", text: "複数のユーザアカウントを作成して、ファイルシステムに存在する各種ファイルの参照や実行、作成や削除の権限をユーザごとに設定できる。" },
      { id: "エ", text: "家電やパソコンの周辺機器などに組み込まれて使用されるOSは、パソコンなどの汎用OSを利用したものは無く、その機器ごとに最適なOSが設計され組み込まれている。" }
    ],
    answer: "エ",
    explanation: "ここが重要：オペレーティングシステムの機能について押さえておきましょう。\nア ○：OSの機能の１つとして、コンピュータリソース（CPUやメモリ、ファイルなど）の管理が挙げられます。\nイ ○：OSでは、キーボードやプリンタ、外部記憶装置などの入出力デバイスの管理を行います。\nウ ○：OSでは、ファイルごとに作成や参照、削除といったアクセスに対する許可情報を設定できます。\nエ ×：家電や周辺機器などに内蔵されるOSは、最近では LinuxやWindowsなどパソコン用OSをベースにしたOSを採用されるケースも増えています。"
  },
  {
    id: 16,
    title: "問題 16 オープンソースOS",
    text: "オープンソースのオペレーティングシステムに関する記述として、最も適切なものはどれか。",
    choices: [
      { id: "ア", text: "オペレーティングシステムは、基本的な機能を提供するソフトウェアであるため、オープンソースソフトウェアは提供されていない。" },
      { id: "イ", text: "オープンソースのオペレーティングシステムは、ソースコードが公開されており、自由に改変することができる。" },
      { id: "ウ", text: "オープンソースのオペレーティングシステムは、企業では利用されていない。" },
      { id: "エ", text: "オープンソースのオペレーティングシステムは、無料で利用できるオペレーティングシステムのことを指している。" }
    ],
    answer: "イ",
    explanation: "ここが重要：オープンソースソフトウェアの定義と用途について押さえておきましょう。\nア ×：Linuxなどオープンソースのオペレーティングシステムが提供されています。\nイ ○：オープンソースソフトウェアは、ソースコードが公開されているソフトウェアのことを指します。そのため、ユーザーが自由に改変することができます。\nウ ×：Linuxなどオープンソースのオペレーティングシステムは企業でも利用されています。\nエ ×：ソースコードが公開されているソフトウェアのことであり、無料で利用できるソフトウェアという意味ではありません。有料で販売されているものもあります。"
  }
];

export default function App() {
  const [appState, setAppState] = useState('menu');
  const [quizMode, setQuizMode] = useState('all');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [reviewFlags, setReviewFlags] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    try {
      console.log("Loading user data from localStorage...");
      const savedReview = localStorage.getItem('reviewFlags');
      const savedHistory = localStorage.getItem('historyData');
      if (savedReview) setReviewFlags(JSON.parse(savedReview));
      if (savedHistory) setHistoryData(JSON.parse(savedHistory));
    } catch (e) {
      console.error("Error loading from localStorage", e);
      setReviewFlags([]);
      setHistoryData([]);
    }
  }, []);

  useEffect(() => {
    try {
      console.log("Saving user data to localStorage...");
      localStorage.setItem('reviewFlags', JSON.stringify(reviewFlags));
      localStorage.setItem('historyData', JSON.stringify(historyData));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }, [reviewFlags, historyData]);

  const startQuiz = (mode) => {
    console.log(`Starting quiz in mode: ${mode}`);
    setQuizMode(mode);
    let questionsToAsk = [...QUIZ_DATA];

    if (mode === 'incorrect') {
      const incorrectIds = historyData
        .filter(h => !h.isCorrect)
        .map(h => h.questionId);
      questionsToAsk = QUIZ_DATA.filter(q => incorrectIds.includes(q.id));
    } else if (mode === 'review') {
      questionsToAsk = QUIZ_DATA.filter(q => reviewFlags.includes(q.id));
    }

    if (questionsToAsk.length === 0) {
      alert("該当する問題がありません！");
      return;
    }

    setCurrentQuestions(questionsToAsk);
    setCurrentIndex(0);
    setUserAnswers([]);
    setShowExplanation(false);
    setAppState('quiz');
  };

  const handleAnswerSelect = (choiceId) => {
    if (showExplanation) return;
    const currentQ = currentQuestions[currentIndex];
    const isCorrect = choiceId === currentQ.answer;

    setUserAnswers(prev => [...prev, {
      questionId: currentQ.id,
      selected: choiceId,
      isCorrect: isCorrect
    }]);

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    console.log("Finishing quiz, updating history...");
    let newHistory = [...historyData];
    userAnswers.forEach(ans => {
      const existingIndex = newHistory.findIndex(h => h.questionId === ans.questionId);
      if (existingIndex >= 0) {
        newHistory[existingIndex] = ans;
      } else {
        newHistory.push(ans);
      }
    });
    setHistoryData(newHistory);
    setAppState('history');
  };

  const toggleReviewFlag = (qId) => {
    setReviewFlags(prev => {
      if (prev.includes(qId)) {
        return prev.filter(id => id !== qId);
      } else {
        return [...prev, qId];
      }
    });
  };

  const renderDiagram = (diagramKey) => {
    switch(diagramKey) {
      case 'q1':
        return (
          <div className="my-4 p-4 border border-gray-200 bg-gray-50 rounded flex flex-col items-center text-sm font-semibold text-gray-700">
            <div className="mb-2 p-2 border-2 border-blue-400 bg-white shadow w-48 text-center rounded">
              制御装置・演算装置<br/><span className="text-blue-600">CPU</span>
            </div>
            <div className="text-xl text-orange-400">↕</div>
            <div className="flex gap-2 sm:gap-4 items-center w-full justify-center overflow-x-auto">
              <div className="p-2 border-2 border-gray-400 bg-white shadow w-28 sm:w-32 text-center rounded">
                入力装置<br/><span className="text-xs text-blue-600 font-normal">キーボード等</span>
              </div>
              <div className="text-2xl text-orange-400">→</div>
              <div className="p-2 border-2 border-gray-400 bg-white shadow w-28 sm:w-32 text-center rounded relative">
                記憶装置<br/><span className="text-xs text-blue-600 font-normal">メモリ(主記憶)</span>
              </div>
              <div className="text-2xl text-orange-400">→</div>
              <div className="p-2 border-2 border-gray-400 bg-white shadow w-28 sm:w-32 text-center rounded">
                出力装置<br/><span className="text-xs text-blue-600 font-normal">ディスプレイ</span>
              </div>
            </div>
            <div className="text-xl text-orange-400">↕</div>
            <div className="mt-2 p-2 border-2 border-gray-400 bg-white shadow w-48 text-center rounded">
              ハードディスク<br/><span className="text-xs text-blue-600 font-normal">(補助記憶)</span>
            </div>
          </div>
        );
      case 'q4':
        return (
          <div className="my-4 p-4 flex flex-col items-center bg-gray-50 border rounded w-full max-w-md mx-auto relative text-sm">
            <div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between items-center text-xs text-gray-500">
              <span>↑ 高速・高価</span>
              <div className="w-px bg-gray-400 flex-grow my-1"></div>
            </div>
            <div className="w-1/3 border-b border-t border-l border-r border-gray-400 text-center py-2 bg-white shadow-sm font-semibold mb-1">A (レジスタ)</div>
            <div className="w-1/2 border border-gray-400 text-center py-2 bg-white shadow-sm font-semibold mb-1">B (キャッシュ)</div>
            <div className="w-2/3 border border-gray-400 text-center py-2 bg-white shadow-sm font-semibold mb-1">C (メモリ)</div>
            <div className="w-5/6 border border-gray-400 text-center py-2 bg-white shadow-sm font-semibold mb-1">D (ディスクキャッシュ)</div>
            <div className="w-full border border-gray-400 text-center py-2 bg-white shadow-sm font-semibold">補助記憶装置</div>
          </div>
        );
      case 'q7':
        return (
          <div className="my-4 text-sm font-semibold">
            <div className="flex mb-2">
              <div className="w-24 p-2 bg-orange-100 border border-orange-300 rounded text-center mr-4 shadow-sm flex items-center justify-center">RAM</div>
              <div className="flex flex-col gap-2 flex-grow">
                 <div className="p-2 bg-orange-50 border border-orange-200 rounded">DRAM <span className="text-xs font-normal text-gray-600 ml-2">主記憶として使用</span></div>
                 <div className="p-2 bg-orange-50 border border-orange-200 rounded">SRAM <span className="text-xs font-normal text-gray-600 ml-2">高速、キャッシュメモリ</span></div>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 p-2 bg-green-100 border border-green-300 rounded text-center mr-4 shadow-sm flex items-center justify-center">ROM</div>
              <div className="flex flex-col gap-2 flex-grow">
                 <div className="p-2 bg-green-50 border border-green-200 rounded">マスクROM <span className="text-xs font-normal text-gray-600 ml-2">読み込み専用</span></div>
                 <div className="p-2 bg-green-50 border border-green-200 rounded flex flex-col gap-2">
                    <div>PROM <span className="text-xs font-normal text-gray-600 ml-2">書き込み可能</span></div>
                    <div className="ml-4 pl-4 border-l-2 border-green-300 flex flex-col gap-2 mt-2">
                      <div className="p-2 bg-white border border-green-200 rounded">EPROM <span className="text-xs font-normal text-gray-600 ml-2">紫外線で消去</span></div>
                      <div className="p-2 bg-white border border-green-200 rounded text-blue-700 font-bold">フラッシュメモリ <span className="text-xs font-normal text-gray-600 ml-2">電気的に書き換え</span></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'q12':
        return (
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-gray-300">
              <thead className="bg-orange-100 text-gray-800">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">規格</th>
                  <th className="border border-gray-300 px-4 py-2">伝送方式</th>
                  <th className="border border-gray-300 px-4 py-2">特徴</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">SCSI</td>
                  <td className="border border-gray-300 px-4 py-2">パラレル</td>
                  <td className="border border-gray-300 px-4 py-2">外付けのハードディスクとの接続などに用いられる。</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">ATA</td>
                  <td className="border border-gray-300 px-4 py-2">シリアル / パラレル</td>
                  <td className="border border-gray-300 px-4 py-2">内蔵ハードディスクの接続に用いられる。IDEを標準化した規格。</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">eSATA</td>
                  <td className="border border-gray-300 px-4 py-2">シリアル</td>
                  <td className="border border-gray-300 px-4 py-2">内部接続用のシリアルATAを外付け機器向けに拡張した規格。</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">USB</td>
                  <td className="border border-gray-300 px-4 py-2">シリアル</td>
                  <td className="border border-gray-300 px-4 py-2">ハードディスク以外に、マウス、キーボードなど様々な機器との接続で使われる。</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  if (appState === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6 flex items-center justify-center gap-2">
            <RefreshCw className="w-6 h-6" /> スマート問題集
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => startQuiz('all')}
              className="w-full flex items-center justify-between p-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors border border-indigo-200 font-semibold"
            >
              <span>すべての問題 ({QUIZ_DATA.length}問)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => startQuiz('incorrect')}
              className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors border border-red-200 font-semibold"
            >
              <span>前回不正解の問題のみ</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => startQuiz('review')}
              className="w-full flex items-center justify-between p-4 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg transition-colors border border-yellow-200 font-semibold"
            >
              <span>要復習の問題のみ ({reviewFlags?.length || 0}問)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setAppState('history')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors border border-gray-200 font-semibold mt-4"
            >
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5" />
                <span>学習履歴を見る</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'quiz') {
    const currentQ = currentQuestions[currentIndex];
    const isReviewed = reviewFlags.includes(currentQ?.id);
    const result = showExplanation ? userAnswers[currentIndex] : null;

    return (
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex justify-center">
        <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full flex flex-col overflow-hidden relative">
          <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
             <span className="font-bold">{currentQ?.title}</span>
             <span className="text-sm font-medium bg-indigo-800 px-3 py-1 rounded-full">
               {currentIndex + 1} / {currentQuestions.length}
             </span>
          </div>

          <div className="p-6 flex-grow overflow-y-auto">
            <div className="text-gray-800 text-lg mb-6 leading-relaxed whitespace-pre-wrap">
              {currentQ?.text}
            </div>

            <div className="space-y-3">
              {currentQ?.choices.map((choice) => {
                const isSelected = result?.selected === choice.id;
                const isCorrectChoice = choice.id === currentQ.answer;
                
                let btnStyle = "bg-white border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300";
                if (showExplanation) {
                  if (isCorrectChoice) {
                    btnStyle = "bg-green-100 border-green-500 text-green-800 font-bold";
                  } else if (isSelected && !isCorrectChoice) {
                    btnStyle = "bg-red-100 border-red-500 text-red-800";
                  } else {
                    btnStyle = "bg-gray-50 border-gray-200 text-gray-400 opacity-70";
                  }
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleAnswerSelect(choice.id)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded border-2 transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-bold border">
                      {choice.id}
                    </span>
                    <span className="mt-1">{choice.text}</span>
                    
                    {showExplanation && isCorrectChoice && <Check className="w-6 h-6 text-green-600 ml-auto shrink-0" />}
                    {showExplanation && isSelected && !isCorrectChoice && <X className="w-6 h-6 text-red-600 ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-8 animate-fade-in">
                <div className={`p-4 rounded-t-lg font-bold text-lg flex items-center gap-2 ${result?.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                   {result?.isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                   {result?.isCorrect ? '正解！' : '不正解'}
                </div>
                <div className="bg-gray-50 p-6 border-x border-b border-gray-200 rounded-b-lg">
                  <h3 className="font-bold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">解説</h3>
                  
                  {currentQ.hasDiagram && renderDiagram(currentQ.hasDiagram)}

                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                    {currentQ?.explanation}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                    <label className="flex items-center gap-2 cursor-pointer bg-yellow-50 px-4 py-2 rounded border border-yellow-200 hover:bg-yellow-100 transition-colors">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 accent-yellow-500"
                        checked={isReviewed}
                        onChange={() => toggleReviewFlag(currentQ.id)}
                      />
                      <span className="font-semibold text-yellow-800 flex items-center gap-1">
                        <AlertCircle className="w-5 h-5" /> 要復習にチェック
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {showExplanation && (
            <div className="bg-gray-100 border-t border-gray-200 p-4 flex justify-between items-center mt-auto">
              <button onClick={() => setAppState('menu')} className="text-gray-500 hover:text-gray-800 flex items-center gap-1">
                <Home className="w-5 h-5" /> 中断
              </button>
              <button 
                onClick={nextQuestion}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                {currentIndex + 1 < currentQuestions.length ? '次の問題へ' : '結果を見る'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (appState === 'history') {
    const correctCount = historyData.filter(h => h?.isCorrect).length;
    const incorrectCount = historyData.length - correctCount;
    const chartData = [
      { name: '正解', count: correctCount, fill: '#10b981' },
      { name: '不正解', count: incorrectCount, fill: '#ef4444' }
    ];

    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 flex justify-center">
        <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
             <span className="font-bold text-lg flex items-center gap-2"><List className="w-6 h-6" /> 学習履歴</span>
             <button onClick={() => setAppState('menu')} className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors">
               <Home className="w-4 h-4" /> ホームへ戻る
             </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {historyData.length > 0 && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-700 mb-4 text-center">全体正答状況 ({quizMode === 'all' ? '全体' : quizMode})</h3>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: 'transparent'}} />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            <h3 className="font-bold text-gray-800 text-lg mb-4 border-b pb-2">問題ごとのステータス</h3>
            <div className="grid gap-3">
              {QUIZ_DATA.map(q => {
                const historyRecord = historyData.find(h => h.questionId === q.id);
                const isReview = reviewFlags.includes(q.id);
                
                return (
                  <div key={q.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800 mb-2 sm:mb-0 pr-4">
                      {q.title}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {historyRecord ? (
                         historyRecord.isCorrect ? 
                         <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><Check className="w-3 h-3"/> 正解</span> : 
                         <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><X className="w-3 h-3"/> 不正解</span>
                      ) : (
                         <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold">未解答</span>
                      )}
                      
                      <button 
                        onClick={() => toggleReviewFlag(q.id)}
                        className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border transition-colors ${isReview ? 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200' : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'}`}
                      >
                        <AlertCircle className="w-3 h-3" /> 要復習
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
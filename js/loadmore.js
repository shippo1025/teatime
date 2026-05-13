

$(function () {
  // --- 変数の設定 ---
  var initialShow = 6; // 最初に表示するアイテムの数

  // '.grid' というクラスを持つ各要素（イラストとデザインのギャラリー）に対して処理を実行
  $('.grid').each(function () {
    var $grid = $(this); // 現在処理中のギャラリー
    var $items = $grid.find('.item'); // ギャラリー内の全アイテム
    var $button = $grid.siblings('.roundbutton'); // 対応する「もっと見る」ボタンのコンテナ

    // アイテムの数が最初に表示する数より多い場合のみ、以下の処理を行う
    if ($items.length > initialShow) {
      // 最初の6個（initialShowの数）を除く、それ以降のアイテムをすべて隠す
      $items.slice(initialShow).hide();

      // 「もっと見る」ボタンがクリックされた時の動作
      $button.find('a').on('click', function (e) {
        // aタグのデフォルトのリンク動作を無効化
        e.preventDefault(); 

        // 隠れているアイテムをふわっと表示（slideDown）
        $items.slice(initialShow).fadeIn();

        // ボタン自体を非表示にする
        $button.hide();
      });
    } else {
      // アイテム数が6個以下の場合は、「もっと見る」ボタンは不要なので隠す
      $button.hide();
    }
  });
});
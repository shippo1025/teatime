$(function () {
  // --- ポップアップのロジック ---

  // 1. ギャラリーの画像がクリックされたときの処理
  $('.grid .item').on('click', function (e) {
    // aタグなどのデフォルトの挙動をキャンセル
    e.preventDefault(); 

    // クリックされた.item要素から画像とキャプションの情報を取得
    var imgSrc = $(this).find('img').attr('src');
    var captionText = $(this).data('caption'); 

    // もし拡大画像が別フォルダならパスを置換
    // var fullImgSrc = imgSrc.replace('/thumbnail/', '/full/');
    // $('#popup-image').attr('src', fullImgSrc);
    
    // サムネイルと同じ画像を表示
    $('#popup-image').attr('src', imgSrc);

    // ★★★ ここを変更 ★★★
    // .text() を .html() に変更して、<br>タグを改行として解釈させる
    $('#popup-caption').html(captionText || ''); 

    // .is-visibleクラスを追加してポップアップを表示
    $('#popup-overlay').addClass('is-visible');
  });


  // 2. ポップアップの背景または閉じるボタンがクリックされたときの処理
  $('#popup-overlay, #popup-close').on('click', function () {
    // .is-visibleクラスを削除してポップアップを非表示
    $('#popup-overlay').removeClass('is-visible');
  });

  // 3. ポップアップ内の画像やキャプション部分をクリックしてもポップアップが閉じないようにする
  $('#popup-content').on('click', function (e) {
    // 親要素へのイベント伝播を停止
    e.stopPropagation();
  });
});
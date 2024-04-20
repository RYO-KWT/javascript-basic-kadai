// 現在の日付を取得
let today = new Date();

// 年、月、日を取得
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月は0から始まるため、+1する
let day = today.getDate();

// 日本の表記に変換して表示
console.log(`${year}年${month}月${day}日`);
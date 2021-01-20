# 環境
- Express
  - http://localhost:8000
- React
  - http://localhost:3000

# 検証
- package.json に "proxy": "http://localhost:8000" を書いたときの挙動
```
■リクエスト1 ★★★ブラウザから見ると Same Prigin★★★
React(3000) ----[Request]----> Proxy(3000)

■リクエスト2 ★★★Proxy は Node.js プログラム(?)★★★
Proxy(3000) ----[Request]----> Server(8000)
```

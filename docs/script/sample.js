// 読み込みたいファイルのパス（同じフォルダにある場合）
        const filePath = 'server.txt'; 

        // fetchを使ってファイルを取得
        fetch(filePath)
            .then(response => {
                // エラーチェック
                if (!response.ok) {
                    throw new Error('ファイルの読み込みに失敗しました: ' + response.statusText);
                }
                return response.text(); // テキストとして処理
            })
            .then(data => {
                // コードブロックの要素を取得して中身を書き換える
                document.getElementById('code-content').textContent = data;
            })
            .catch(error => {
                // エラー時の処理
                document.getElementById('code-content').textContent = 'エラー: ' + error.message;
                console.error(error);
            });

    // 読み込みたいファイルのパス（同じフォルダにある場合）
        const filePath2 = 'client.txt'; 

        // fetchを使ってファイルを取得
        fetch(filePath2)
            .then(response => {
                // エラーチェック
                if (!response.ok) {
                    throw new Error('ファイルの読み込みに失敗しました: ' + response.statusText);
                }
                return response.text(); // テキストとして処理
            })
            .then(data => {
                // コードブロックの要素を取得して中身を書き換える
                document.getElementById('code-content2').textContent = data;
            })
            .catch(error => {
                // エラー時の処理
                document.getElementById('code-content2').textContent = 'エラー: ' + error.message;
                console.error(error);
            });
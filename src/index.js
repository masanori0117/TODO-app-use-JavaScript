// TODOを未完了のTODOに追加
const addFormText = () => {
  const formText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了TODOの作成
  createIncompleteList(formText);
};

// TODO追加
document
  .getElementById("add-button")
  .addEventListener("click", () => addFormText());

const deleteTodo = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // buttonタグ(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //TODOを削除
    deleteTodo(completeButton.parentNode);

    // TODOを完了エリアに移動
    const completeTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグ追加
    const li = document.createElement("li");
    li.innerText = text;

    // Buttonタグを追加(戻る)
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;

      createIncompleteList(text);
    });

    console.log(li);
    console.log(backButton);

    // completetTargetタグに追加
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // complete-iistに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // buttonタグ(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //TODOを削除
    deleteTodo(deleteButton.parentNode);
  });

  // divタグの中にliタグ・buttonタグを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了エリアにTODOリストを生成
  document.getElementById("incomplete-list").appendChild(div);
};

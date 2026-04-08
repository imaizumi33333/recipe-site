let activeTag = 'all';

let recipes = [
  {
    "id": 1,
    "name": "いちごチョコクッキー",
    "photo": "photos/いちごクッキー.JPG",
    "servings": "9枚分",
    "tags": ["スイーツ", "春", "クッキー"],
    "oven": { "temperature": 180, "time": "15分（焼き色がなければ+3分）" },
    "ingredients": [
      { "name": "いちご", "amount": "15個（乾燥させる）" },
      { "name": "バター", "amount": "65g（常温に戻す）" },
      { "name": "ホワイトチョコ", "amount": "40g" },
      { "name": "砂糖", "amount": "15g" },
      { "name": "塩", "amount": "1g" },
      { "name": "小麦粉", "amount": "75g" },
      { "name": "ベーキングパウダー", "amount": "1g" }
    ],
    "steps": [
      "いちごを乾燥させておく。",
      "バターと砂糖、塩を合わせてよく混ぜる。",
      "小麦粉・ベーキングパウダーを加えてさっくり混ぜる。",
      "いちごとホワイトチョコをさっくり混ぜる。",
      "180℃で15分焼く。焼き色がつかなければさらに3分焼く。"
    ]
  },
  {
    "id": 2,
    "name": "ハンバーガー",
    "photo": "photos/ハンバーガー.JPG",
    "servings": "6個分",
    "tags": ["パーティー", "パン"],
    "oven": { "temperature": 210, "time": "15分" },
    "ingredients": [
      { "name": "強力粉", "amount": "315g" },
      { "name": "小麦粉", "amount": "75g" },
      { "name": "砂糖", "amount": "45g" },
      { "name": "イースト", "amount": "3g" },
      { "name": "塩", "amount": "3g" },
      { "name": "バター", "amount": "37g" },
      { "name": "牛乳", "amount": "300ml" },
      { "name": "牛肉", "amount": "600g" },
      { "name": "レタス・トマト・ピクルス・アボカド・卵・ケチャップ", "amount": "各適量" }
    ],
    "steps": [
      "牛肉をミンチにして100gずつ6個に成形しておく。",
      "強力粉・小麦粉・砂糖・イースト・塩・バター・牛乳を全部混ぜてこねる。",
      "まとまったら1時間発酵させる。",
      "倍の大きさになったら6分割してベンチタイム20分。",
      "丸く成形して1時間発酵させる。",
      "卵を塗ってごまを振り、210℃で15分焼く。",
      "パティを焼いてバンズに具材を挟んで完成。"
    ]
  },
  {
    "id": 3,
    "name": "チョコレートサブレ",
    "photo": "photos/チョコサブレ.jpg",
    "servings": "9枚分（15cm角型1枚を3×6でカット×2枚）",
    "tags": ["スイーツ", "クッキー", "チョコ"],
    "oven": { "temperature": 170, "time": "25分" },
    "ingredients": [
      { "name": "バター（溶かす）", "amount": "120g" },
      { "name": "砂糖", "amount": "85g" },
      { "name": "卵黄", "amount": "28g" },
      { "name": "小麦粉", "amount": "185g" },
      { "name": "ココア", "amount": "13g" },
      { "name": "チョコレート（ガナッシュ用）", "amount": "300g" },
      { "name": "生クリーム（ガナッシュ用）", "amount": "200g" }
    ],
    "steps": [
      "チョコレートと生クリームを500Wレンジで2分加熱して混ぜ、型に流して固める（ガナッシュ）。",
      "溶かしバター・砂糖・卵黄・小麦粉・ококаをすべて混ぜる。",
      "170℃で25分焼く。",
      "熱いうちに6×3にカットする。",
      "冷めたらガナッシュをサンドして完成。"
    ]
  },
  {
    "id": 4,
    "name": "バターチキンカレー",
    "photo": "photos/バターチキン.jpg",
    "servings": "5人分",
    "tags": ["パーティー", "カレー"],
    "oven": null,
    "ingredients": [
      { "name": "ミックススパイス", "amount": "6g（コリアンダー15g・クミン2g・ターメリック2g・カルダモン2g）" },
      { "name": "鶏もも肉", "amount": "2枚" },
      { "name": "塩（マリネ用）", "amount": "4g" },
      { "name": "ヨーグルト", "amount": "60g" },
      { "name": "にんにく（マリネ用）", "amount": "4g" },
      { "name": "生姜（マリネ用）", "amount": "4g" },
      { "name": "レモン汁", "amount": "8g" },
      { "name": "ガラムマサラ", "amount": "4g" },
      { "name": "玉ねぎ", "amount": "240g" },
      { "name": "にんにく（カレー用）", "amount": "8g" },
      { "name": "生姜（カレー用）", "amount": "8g" },
      { "name": "塩（カレー用）", "amount": "4g" },
      { "name": "バター", "amount": "60g" },
      { "name": "トマト缶", "amount": "1缶" },
      { "name": "カシューナッツ", "amount": "30g" },
      { "name": "生クリーム", "amount": "120g" },
      { "name": "はちみつ", "amount": "10g" },
      { "name": "砂糖", "amount": "10g" },
      { "name": "塩（仕上げ用）", "amount": "4g" },
      { "name": "パクチー", "amount": "適量（飾り用）" }
    ],
    "steps": [
      "ミックススパイスを合わせておく。",
      "鶏もも肉に塩・ヨーグルト・にんにく・生姜・レモン汁・ガラムマサラ・ミックススパイスを合わせて一晩漬け込む。",
      "油で両面こんがり焼く。",
      "バターで玉ねぎ・にんにく・生姜・塩を5分炒める。",
      "トマト缶と残りのミックススパイスを加える。",
      "焼いた鶏肉を合わせる。",
      "カシューナッツをミキサーでペースト状にして加える。",
      "生クリーム・はちみつ・砂糖・塩で味を調える。",
      "仕上げに生クリームとパクチーを飾る。"
    ]
  },
  {
    "id": 5,
    "name": "プリン",
    "photo": "photos/プリン.JPG",
    "servings": "10個分",
    "tags": ["スイーツ", "定番"],
    "oven": { "temperature": 160, "time": "25分（湯煎焼き）" },
    "ingredients": [
      { "name": "卵", "amount": "6個" },
      { "name": "卵黄", "amount": "4個" },
      { "name": "牛乳", "amount": "570g" },
      { "name": "砂糖", "amount": "90g" },
      { "name": "バニラエッセンス", "amount": "少々" },
      { "name": "砂糖（カラメル用）", "amount": "85g" },
      { "name": "水（カラメル用）", "amount": "10g" }
    ],
    "steps": [
      "砂糖と水を煮詰めてカラメルを作り、型に入れておく。",
      "卵・卵黄・砂糖を混ぜる。",
      "牛乳を温めて加え、バニラエッセンスを入れてよく混ぜる。",
      "こし器でこしてカラメルの上に流す。",
      "160℃のオーブンで60℃のお湯を使って湯煎焼き25分。"
    ]
  },
  {
    "id": 6,
    "name": "クレープ",
    "photo": "photos/クレープ.JPG",
    "servings": "24cm 12枚分",
    "tags": ["スイーツ", "定番"],
    "oven": null,
    "ingredients": [
      { "name": "卵", "amount": "2個" },
      { "name": "砂糖", "amount": "25g" },
      { "name": "塩", "amount": "2g" },
      { "name": "牛乳", "amount": "250g" },
      { "name": "小麦粉", "amount": "100g" },
      { "name": "バター", "amount": "20g" }
    ],
    "steps": [
      "全ての材料を混ぜ合わせる。",
      "一晩冷蔵庫で寝かせる。",
      "フライパンで薄く焼く。"
    ]
  },
  {
    "id": 7,
    "name": "ふきみそ",
    "photo": "photos/ふきみそ.jpg",
    "servings": "味噌一パック分",
    "tags": ["春", "ソース"],
    "oven": null,
    "ingredients": [
      { "name": "蕗の薹", "amount": "200g" },
      { "name": "白味噌", "amount": "300g" },
      { "name": "砂糖", "amount": "20g（お好みで）" }
    ],
    "steps": [
      "蕗の薹を茹でて水気をよく切り、刻む。",
      "白味噌と和える。",
      "お好みで砂糖を加えながら味見して調整する（甘くなりすぎ注意）。"
    ]
  },
  {
    "id": 8,
    "name": "肉まん",
    "photo": "photos/肉まん.jpg",
    "servings": "16個分",
    "tags": ["パーティー", "せいろ"],
    "oven": null,
    "ingredients": [
      { "name": "強力粉（皮）", "amount": "100g" },
      { "name": "小麦粉（皮）", "amount": "300g" },
      { "name": "砂糖（皮）", "amount": "50g" },
      { "name": "塩（皮）", "amount": "4g" },
      { "name": "油（皮）", "amount": "15g" },
      { "name": "イースト（皮）", "amount": "6g" },
      { "name": "ベーキングパウダー（皮）", "amount": "10g" },
      { "name": "ぬるま湯（皮）", "amount": "200cc" },
      { "name": "豚肉（具）", "amount": "330g" },
      { "name": "玉ねぎ（具）", "amount": "1個" },
      { "name": "たけのこ（具）", "amount": "150g" },
      { "name": "パン粉（具）", "amount": "50g" },
      { "name": "ごま油（具）", "amount": "10g" },
      { "name": "砂糖（具）", "amount": "30g" },
      { "name": "しょうゆ（具）", "amount": "33g" },
      { "name": "鶏がらスープ（具）", "amount": "15g" },
      { "name": "片栗粉（具）", "amount": "10g" },
      { "name": "オイスターソース（具）", "amount": "8g" }
    ],
    "steps": [
      "皮の材料を全部混ぜてこね、30分発酵させる。",
      "16分割する（1個40g前後）。",
      "具の材料を全部混ぜて16分割する（1個45g前後）。",
      "皮を麺棒で伸ばして具を包む。",
      "せいろで20分蒸す。"
    ]
  },
  {
    "id": 9,
    "name": "カスタードクリーム",
    "photo": "",
    "servings": "約350g",
    "tags": ["スイーツ", "クリーム"],
    "oven": null,
    "ingredients": [
      { "name": "卵黄", "amount": "3個" },
      { "name": "砂糖", "amount": "60g" },
      { "name": "牛乳", "amount": "250g" },
      { "name": "小麦粉", "amount": "20g" },
      { "name": "バター", "amount": "35g" }
    ],
    "steps": [
      "卵黄と砂糖を混ぜる。",
      "小麦粉をさっくり混ぜる。",
      "温めた牛乳を加えてこしながら鍋に移す。",
      "中火にかけてふつふつと泡が立ってきたら火からおろす。",
      "バターを加えてバットに入れて冷ます。",
      "※生クリーム200gと合わせるとディプロマクリームになる。"
    ]
  }
];

function init() {
  renderTags();
  renderCards();
}

function renderTags() {
  const allTags = [...new Set(recipes.flatMap(r => r.tags))].sort();
  const container = document.getElementById('tag-list');

  const allBtn = document.createElement('button');
  allBtn.className = 'tag-btn all-btn active';
  allBtn.textContent = 'すべて';
  allBtn.dataset.tag = 'all';
  allBtn.addEventListener('click', () => setTag('all'));
  container.appendChild(allBtn);

  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-btn';
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.addEventListener('click', () => setTag(tag));
    container.appendChild(btn);
  });
}

function setTag(tag) {
  activeTag = tag;
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tag === tag);
  });
  renderCards();
}

function renderCards() {
  const grid = document.getElementById('recipe-grid');
  grid.innerHTML = '';

  const filtered = activeTag === 'all'
    ? recipes
    : recipes.filter(r => r.tags.includes(activeTag));

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">該当するレシピがありません</p>';
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.addEventListener('click', () => openModal(recipe));

    const photoHtml = recipe.photo
      ? `<img class="card-photo" src="${recipe.photo}" alt="${recipe.name}" onerror="this.outerHTML='<div class=\\'card-photo-placeholder\\'>🍽</div>'">`
      : `<div class="card-photo-placeholder">🍽</div>`;

    const ovenHtml = recipe.oven
      ? `<div class="card-oven">🔥 ${recipe.oven.temperature}℃ / ${recipe.oven.time}</div>`
      : '';

    const tagsHtml = recipe.tags
      .map(t => `<span class="tag-badge">${t}</span>`)
      .join('');

    card.innerHTML = `
      ${photoHtml}
      <div class="card-body">
        <div class="card-name">${recipe.name}</div>
        <div class="card-servings">${recipe.servings}</div>
        ${ovenHtml}
        <div class="card-tags">${tagsHtml}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openModal(recipe) {
  const modal = document.getElementById('modal-overlay');

  const photoHtml = recipe.photo
    ? `<img class="modal-photo" src="${recipe.photo}" alt="${recipe.name}" onerror="this.outerHTML='<div class=\\'modal-photo-placeholder\\'>🍽</div>'">`
    : `<div class="modal-photo-placeholder">🍽</div>`;

  const ovenHtml = recipe.oven
    ? `<div class="modal-oven">🔥 ${recipe.oven.temperature}℃ ／ ${recipe.oven.time}</div>`
    : '';

  const tagsHtml = recipe.tags
    .map(t => `<span class="tag-badge">${t}</span>`)
    .join('');

  const ingredientsHtml = recipe.ingredients
    .map(i => `<li><span>${i.name}</span><span class="ingredient-amount">${i.amount}</span></li>`)
    .join('');

  const stepsHtml = recipe.steps
    .map(s => `<li>${s}</li>`)
    .join('');

  document.getElementById('modal-content').innerHTML = `
    ${photoHtml}
    <div class="modal-body">
      <div class="modal-name">${recipe.name}</div>
      <div class="modal-meta">${recipe.servings}</div>
      ${ovenHtml}
      <div class="modal-tags">${tagsHtml}</div>

      <h3>材料</h3>
      <ul class="ingredient-list">${ingredientsHtml}</ul>

      <h3>作り方</h3>
      <ol class="step-list">${stepsHtml}</ol>

      <button class="close-btn" onclick="closeModal()">閉じる</button>
    </div>
  `;

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target.id === 'modal-overlay') closeModal();
});

init();

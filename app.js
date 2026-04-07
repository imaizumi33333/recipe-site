let activeTag = 'all';

let recipes = [
  {
    "id": 1,
    "name": "チョコレートガトーショコラ",
    "photo": "photos/gateau_chocolat.jpg",
    "servings": "18cm丸型 1台分",
    "tags": ["ケーキ", "スイーツ", "クリスマス", "パーティー"],
    "oven": { "temperature": 170, "time": "35〜40分" },
    "ingredients": [
      { "name": "ダークチョコレート", "amount": "150g" },
      { "name": "バター（無塩）", "amount": "80g" },
      { "name": "卵", "amount": "3個" },
      { "name": "グラニュー糖", "amount": "80g" },
      { "name": "薄力粉", "amount": "30g" },
      { "name": "ココアパウダー（無糖）", "amount": "20g" },
      { "name": "生クリーム", "amount": "50ml" }
    ],
    "steps": [
      "チョコレートとバターを湯煎で溶かし、よく混ぜる。",
      "卵黄と砂糖の半量を白っぽくなるまで泡立てる。",
      "チョコレート液に卵黄を加えて混ぜ、薄力粉とコニアをふるい入れてさっくり混ぜる。",
      "卵白に残りの砂糖を加えてツノが立つまで泡立てメレンゲを作る。",
      "生地にメレンゲを3回に分けて加え、切るように混ぜる。",
      "型に流し込み、170℃に予熱したオーブンで35〜40分焼く。",
      "粗熱が取れたら冷蔵庫で1時間冷やして完成。"
    ]
  },
  {
    "id": 2,
    "name": "グリーンカレー",
    "photo": "",
    "servings": "2〜3人分",
    "tags": ["エスニック", "カレー", "辛い", "パーティー"],
    "oven": null,
    "ingredients": [
      { "name": "鶏もも肉", "amount": "300g" },
      { "name": "グリーンカレーペースト", "amount": "大さじ2" },
      { "name": "ココナッツミルク", "amount": "400ml" },
      { "name": "ナスビ", "amount": "2本" },
      { "name": "ピーマン", "amount": "2個" },
      { "name": "タケノコ水煮", "amount": "100g" },
      { "name": "ナンプラー", "amount": "大さじ1.5" },
      { "name": "砂糖", "amount": "小さじ1" },
      { "name": "バイマックルー（こぶみかんの葉）", "amount": "4〜5枚" },
      { "name": "サラダ油", "amount": "大さじ1" }
    ],
    "steps": [
      "鶏肉はひと口大に切る。ナスは乱切り、ピーマンは細切りにする。",
      "フライパンに油を熱し、カレーペーストを中火で1〜2分炒める。",
      "鶏肉を加えて表面が白くなるまで炒める。",
      "ココナッツミルクを加えて中火で5分煮る。",
      "ナス・タケノコを加えてさらに5分煮る。",
      "ナンプラー・砂糖で味を調え、バイマックルーを加えて一煮立ちしたら完成。",
      "白ごはんやジャスミンライスと一緒に盛り付ける。"
    ]
  },
  {
    "id": 3,
    "name": "ローストチキン",
    "photo": "",
    "servings": "4〜5人分",
    "tags": ["クリスマス", "パーティー", "肉料理"],
    "oven": { "temperature": 200, "time": "60〜70分" },
    "ingredients": [
      { "name": "丸鶏", "amount": "1羽（約1.2kg）" },
      { "name": "にんにく", "amount": "4片" },
      { "name": "ローズマリー（生）", "amount": "3〜4枝" },
      { "name": "タイム（生）", "amount": "3〜4枝" },
      { "name": "オリーブオイル", "amount": "大さじ3" },
      { "name": "塩", "amount": "小さじ2" },
      { "name": "黒こしょう", "amount": "小さじ1" },
      { "name": "レモン", "amount": "1個" }
    ],
    "steps": [
      "丸鶏は焼く3時間前に冷蔵庫から出して常温に戻す。",
      "にんにくをみじん切りにし、オリーブオイル・塩・こしょうと混ぜてペーストを作る。",
      "丸鶏の皮と肉の間にペーストを塗り込み、表面にも全体的に塗る。",
      "お腹の中にレモン（半分に切ったもの）とハーブを詰める。",
      "200℃に予熱したオーブンで60〜70分焼く。途中30分で肉汁を表面に塗る。",
      "竹串を刺して透明な肉汁が出れば完成。5分休ませてからカットする。"
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

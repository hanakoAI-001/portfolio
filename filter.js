/**
 * Works セクション フィルター機能
 * フィルターボタンのクリックでカードの表示/非表示を切り替える
 */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');
  const grid = document.querySelector('.grid');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const isVisible = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !isVisible);
      });

      // 0件時の空状態メッセージ
      const visibleCount = [...cards].filter(c => !c.classList.contains('hidden')).length;
      let emptyMsg = grid.querySelector('.grid-empty');
      if (visibleCount === 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('p');
          emptyMsg.className = 'grid-empty';
          emptyMsg.textContent = '該当する作品がありません。';
          grid.appendChild(emptyMsg);
        }
      } else {
        emptyMsg?.remove();
      }
    });
  });
});

/**
 * Works セクション フィルター機能
 * フィルターボタンのクリックでカードの表示/非表示を切り替える
 */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // アクティブ状態の更新
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;

      // カードの表示/非表示切り替え
      cards.forEach(card => {
        const isVisible = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !isVisible);
      });
    });
  });
});

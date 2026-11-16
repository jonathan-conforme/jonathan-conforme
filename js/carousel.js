let modalSlides = [];
let modalIndex = 0;

function moveCarousel(btn, step) {
  const carousel = btn.closest('[data-carousel]');
  const track = carousel.querySelector('.carousel-track');
  const badge = carousel.querySelector('.carousel-badge');
  const total = track.children.length;
  const index = (parseInt(track.dataset.index || '0', 10) + step + total) % total;

  track.dataset.index = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  if (badge) badge.textContent = `${index + 1} / ${total}`;
}

function openImageModal(imgEl) {
  const track = imgEl.closest('.carousel-track');
  const imgs = Array.from(track.querySelectorAll('img'));
  modalSlides = imgs.map(img => ({ src: img.src, alt: img.alt }));
  modalIndex = imgs.indexOf(imgEl);

  updateModalView();
  const modal = document.getElementById('imageModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function stepModal(step) {
  if (!modalSlides.length) return;
  modalIndex = (modalIndex + step + modalSlides.length) % modalSlides.length;
  updateModalView();
}

function updateModalView() {
  const current = modalSlides[modalIndex];
  const modalImg = document.getElementById('modalImage');
  modalImg.src = current.src;
  modalImg.alt = current.alt;
  document.getElementById('modalCounter').textContent = `${current.alt} (${modalIndex + 1} / ${modalSlides.length})`;
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('imageModal');
  if (!modal || modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeImageModal();
  if (e.key === 'ArrowLeft') stepModal(-1);
  if (e.key === 'ArrowRight') stepModal(1);
});
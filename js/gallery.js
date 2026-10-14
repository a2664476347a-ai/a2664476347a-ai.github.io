
(async function () {
  const grid = document.getElementById('gallery-grid');
  const filters = document.getElementById('gallery-filters');
  const status = document.getElementById('gallery-status');
  const viewer = document.getElementById('gallery-viewer');
  const largeImage = viewer.querySelector('.gallery-large');
  const caption = viewer.querySelector('.gallery-caption');

  let images = [];
  let visibleImages = [];
  let currentIndex = 0;

  try {
    const response = await fetch('gallery-data.json');

    if (!response.ok) {
      throw new Error('无法读取图片清单');
    }

    const data = await response.json();
    images = data.images || [];

    if (!images.length) {
      status.textContent = '暂时没有找到图片。';
      return;
    }

    const categories = [...new Set(
      images.map(image => image.category)
    )];

    categories.forEach(category => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.category = category;
      button.textContent = category;
      filters.appendChild(button);
    });

    filters.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;

      filters.querySelectorAll('button').forEach(item => {
        item.classList.toggle('active', item === button);
      });

      render(button.dataset.category);
    });

    function render(category) {
      visibleImages = category === 'all'
        ? images
        : images.filter(image => image.category === category);

      grid.replaceChildren();

      visibleImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', '查看 ' + image.title);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';
        img.decoding = 'async';

        const title = document.createElement('span');
        title.className = 'gallery-item-title';
        title.textContent = image.title;

        item.append(img, title);

        item.addEventListener('click', () => openViewer(index));
        item.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openViewer(index);
          }
        });

        grid.appendChild(item);
      });

      status.textContent =
        '共 ' + visibleImages.length + ' 张照片';
    }

    function openViewer(index) {
      currentIndex = index;
      updateViewer();
      viewer.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function updateViewer() {
      const image = visibleImages[currentIndex];
      if (!image) return;

      largeImage.src = image.src;
      largeImage.alt = image.title;
      caption.textContent =
        image.title + ' · ' + image.category;
    }

    function closeViewer() {
      viewer.hidden = true;
      document.body.style.overflow = '';
      largeImage.removeAttribute('src');
    }

    function move(step) {
      if (!visibleImages.length) return;

      currentIndex =
        (currentIndex + step + visibleImages.length)
        % visibleImages.length;

      updateViewer();
    }

    viewer.querySelector('.gallery-close')
      .addEventListener('click', closeViewer);

    viewer.querySelector('.gallery-prev')
      .addEventListener('click', () => move(-1));

    viewer.querySelector('.gallery-next')
      .addEventListener('click', () => move(1));

    viewer.addEventListener('click', event => {
      if (event.target === viewer) closeViewer();
    });

    document.addEventListener('keydown', event => {
      if (viewer.hidden) return;

      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    });

    render('all');
  } catch (error) {
    console.error('Gallery error:', error);
    status.textContent =
      '图片清单加载失败，请检查生成文件和网站路径。';
  }
})();

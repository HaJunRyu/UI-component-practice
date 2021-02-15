let state = {
  nowActive: null,
  isOpen: false
};

const $accordion = document.querySelector('.accordion');

const render = () => {
  [...$accordion.children].forEach(menuContainer => {
    const menu = menuContainer.firstElementChild.textContent;
    const submenu = menuContainer.lastElementChild;

    menuContainer.classList.toggle('active', menu === state.nowActive && state.isOpen);
    submenu.style.height = state.isOpen ? menu === state.nowActive ? `${submenu.scrollHeight}px` : '0' : '0';
  });
};

// 이벤트 핸들러 등록
document.addEventListener('DOMContentLoaded', () => {
  state = { nowActive: document.querySelector('.active > .menu').textContent, isOpen: true };
  document.querySelector('.active > .submenu').style.height = 'auto';
  render();
});

$accordion.addEventListener('click', ({ target }) => {
  if (!target.classList.contains('menu')) return;

  const clickMenu = target.textContent;

  state = { nowActive: clickMenu === state.nowActive ? null : clickMenu, isOpen: clickMenu !== state.nowActive };
  render();
});

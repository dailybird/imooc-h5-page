activeNav(0);
setTimeout(function(){
  renderNav();
  renderScreen1();
}, 500);

document.onscroll = function(){
  var top = document.body.scrollTop;
  const screen_1 = 0;
  const screen_2 = 600 * 1 - 10;
  const screen_3 = 600 * 2 - 10;
  const screen_4 = 600 * 3 - 10;
  const screen_5 = 600 * 4 - 10;
  if(top >= screen_5){
    renderScreen5();
    activeNavigation(4);
  }else if(top >= screen_4){
    renderScreen4();
    activeNavigation(3);
  }else if(top >= screen_3){
    renderScreen3();
    activeNavigation(2);
  }else if(top >= screen_2){
    renderScreen2();
    activeNavigation(1);
  }else{
    activeNavigation(0);
  }
  if(top >= screen_2){
    toggleNavigation("show");
  }else{
    toggleNavigation("hide");
  }
}

var navItems = document.querySelectorAll('.header__nav-item');
for(var navItemIndex = 0; navItemIndex < navItems.length; navItemIndex++ ){
  navItems[navItemIndex].onmouseover = function(){
    var index= getIndexOfElement(this, document.querySelectorAll('.header__nav-item'));
    if(index >= 0 && index <= 4){
      slideNavTip(index);
    }
  }
  navItems[navItemIndex].onmouseout = function(){
    document.onscroll();
  }
}

/**
 * 滑动门导航条
 * @param  {number} index 索引
 * @return
 */
function slideNavTip(index){
  var $headerTip = document.querySelector('.header__nav-tip');
  $headerTip.style.marginLeft = index * 100 + "px";
}

function renderNav(){
  document.querySelector('.header').className += ' header--after';
}

function toggleNavigation(status){
  switch (status) {
    case "show":
        addClass(document.querySelector('.header'), 'header--display');
        addClass(document.querySelector('.aside'), 'aside--after');
      break;
    case "hide":
        removeClass(document.querySelector('.header'), 'header--display');
        removeClass(document.querySelector('.aside'), 'aside--after');
      break;
  }
}

function renderScreen1(){
  addClass(document.querySelector('.screen-1__heading-head--init'), 'screen-1__heading-head--after');
  addClass(document.querySelector('.screen-1__heading-subhead--init'), 'screen-1__heading-subhead--after');
}

function renderScreen2(){
  addClass(document.querySelector('.screen-2__heading-head--init'), 'screen-2__heading-head--after');
  addClass(document.querySelector('.screen2__divider--init'), 'screen2__divider--after');
  addClass(document.querySelector('.screen-2__heading-subhead--init'), 'screen-2__heading-subhead--after');
  addClass(document.querySelector('.screen-2__pics-1--init'), 'screen-2__pics-1--after');
  addClass(document.querySelector('.screen-2__pics-2'), 'screen-2__pics-2--after');
}

function renderScreen3(){
  addClass(document.querySelector('.screen-3__wrap__panel__heading-head--init'), 'screen-3__wrap__panel__heading-head--after');
  addClass(document.querySelector('.screen-3__wrap__panel__heading__divider--init'), 'screen-3__wrap__panel__heading__divider--after');
  addClass(document.querySelector('.screen-3__wrap__panel__heading-subhead--init'), 'screen-3__wrap__panel__heading-subhead--after');
  addClass(document.querySelector('.screen-3__wrap__panel__pics'), 'screen-3__wrap__panel__pics--after');
  addClass(document.querySelector('.screen-3__pic--init'), 'screen-3__pic--after');
}

function renderScreen4(){
  addClass(document.querySelector('.screen-4__wrap__panel__heading-head--init'), 'screen-4__wrap__panel__heading-head--after');
  addClass(document.querySelector('.screen-4__wrap__panel__heading-subhead--init'), 'screen-4__wrap__panel__heading-subhead--after');
  addClass(document.querySelector('.screen-4__wrap__panel__heading-divider--init'), 'screen-4__wrap__panel__heading-divider--after');
  var $pics = document.querySelectorAll('.screen-4__wrap__panel__pic');
  for(var i = 0; i < $pics.length; i++){
    addClass($pics[i], 'screen-4__wrap__panel__pic--after');
  }
}

function renderScreen5(){
  addClass(document.querySelector('.screen-5__wrap__pic--init'), 'screen-5__wrap__pic--after');
  addClass(document.querySelector('.screen-5__wrap__heading-head--init'), 'screen-5__wrap__heading-head--after');
  addClass(document.querySelector('.screen-5__wrap__heading--divider--init'), 'screen-5__wrap__heading--divider--after');
  addClass(document.querySelector('.screen-5__wrap__heading-subhead--init'), 'screen-5__wrap__heading-subhead--after');
}

/**
 * 添加类
 * @param {document} element   DOM 对象
 * @param {number} className  类名
 */
function addClass(element, className){
  if(element.className.indexOf(className) == -1){
    element.className += ' ' + className;
  }
}

/**
 * 删除类名
 * @param  {document} element   DOM 对象
 * @param  {string} className  类名
 */
function removeClass(element, className){
  var reg = new RegExp(className + '\s*', 'g');
  element.className = element.className.replace(reg, '').replace(/\s+/, ' ');
}

/**
 * 设置置顶导航条和侧边导航条的 active 项
 * @param  {number} index 索引
 */
function activeNavigation(index){
  // activeNav(index);
  slideNavTip(index);
  activeAside(index);
}

function activeNav(index){
  var $items = document.querySelectorAll('.header__nav-item');
  for(var i = 0; i<$items.length; i++){
    removeClass($items[i], 'header__nav-item--active');
  }
  addClass($items[index], 'header__nav-item--active');
}

function activeAside(index){
  var $items = document.querySelectorAll('.aside__link');
  for(var i = 0; i<$items.length; i++){
    removeClass($items[i], 'aside__link--active');
  }
  addClass($items[index], 'aside__link--active');
}

function getIndexOfElement(element, parent) {
    for (var i = 0; i < parent.length; i++) {
        if (parent[i] == element) return i;
    }
    return -1;
}

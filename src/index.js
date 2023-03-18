import throttle from 'lodash.throttle';

const refs = {
    incrementBtn: document.querySelector('.increment'),
    addClickBtn: document.querySelector('.add-click'),
    removeClickBtn: document.querySelector('.remove-click'),
    addScrollBtn: document.querySelector('.add-scroll'),
    removeScrollBtn: document.querySelector('.remove-scroll'),
    addThrottleScrollBtn: document.querySelector('.add-scroll-throttle'),
    removeThrottleScrollBtn: document.querySelector('.remove-scroll-throttle'),
    collectionBox: document.querySelector('.collection'),
    collectionThrottleBox: document.querySelector('.collection--throttle'),
    clickResInput: document.querySelector('.res-click'),
    scrollResInput: document.querySelector('.res-scroll'),
    scrollThrottleResInput: document.querySelector('.res-scroll-throttle'),
};

// on click functions
let res = 0;

const onIncrementBtnClick = () => {
    res += 1;
    refs.clickResInput.value = res;
};

const onAddClickBtnClick = () => {
    refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
};
const onRemoveClickBtnClick = () => {
    refs.clickResInput.value = '';
    refs.incrementBtn.removeEventListener('click', onIncrementBtnClick);
};

refs.addClickBtn.addEventListener('click', onAddClickBtnClick);

refs.removeClickBtn.addEventListener('click', onRemoveClickBtnClick);

// on scroll functions without throttle
const onScroll = e => {
    const clientWidth = e.target.clientWidth;
    const scrollPosition = clientWidth - e.target.scrollTop;
    refs.scrollResInput.value = scrollPosition;
};

const onAddScrollBtnClick = () => {
    refs.collectionBox.addEventListener('scroll', onScroll);
};

const onRemoveScrollBtnClick = () => {
    refs.scrollResInput.value = '';
    refs.collectionBox.removeEventListener('scroll', onScroll);
};

refs.addScrollBtn.addEventListener('click', onAddScrollBtnClick);

refs.removeScrollBtn.addEventListener('click', onRemoveScrollBtnClick);

// on scroll functions with throttle
const onThrottleScroll = e => {
    const clientWidth = e.target.clientWidth;
    const scrollPosition = clientWidth - e.target.scrollTop;
    refs.scrollThrottleResInput.value = scrollPosition;
};

const onAddThrottleScrollBtnClick = () => {
    refs.collectionThrottleBox.addEventListener(
        'scroll',
        throttle(onThrottleScroll, 500)
    );
};

const onRemoveThrottleScrollBtnClick = () => {
    refs.scrollThrottleResInput.value = '';
    refs.collectionThrottleBox.removeEventListener(
        'scroll',
        throttle(onThrottleScroll, 500)
    );
};

refs.addThrottleScrollBtn.addEventListener(
    'click',
    onAddThrottleScrollBtnClick
);

refs.removeThrottleScrollBtn.addEventListener(
    'click',
    onRemoveThrottleScrollBtnClick
);

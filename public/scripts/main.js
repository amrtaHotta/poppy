gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".marker01 , .marker02").forEach((element) => {
  ScrollTrigger.create({
    trigger: element,
    start: "top 80%", // 要素の上がビューポートの80%に到達したとき
    onEnter: () => element.classList.add("active"),
  });
});

window.addEventListener("DOMContentLoaded", function () {
  new ScrollHint(".js-scrollable", {
    scrollHintIconAppendClass: "scroll-hint-icon-white",
    suggestiveShadow: true,
    i18n: {
      scrollable: "スクロールできます",
    },
  });
});

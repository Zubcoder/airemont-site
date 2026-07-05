/*
 * AI Ремонт — общий скрипт сайта.
 * Партнёрские ссылки и ссылка на приложение настраиваются здесь.
 * Замените PARTNERS[].url на реальные партнёрские (Admitad, Ozon, WB) ссылки.
 */
(function () {
  "use strict";

  window.APP_RUSTORE_URL = "https://apps.rustore.ru/app/com.zubcoder.ai_remont";

  window.PARTNERS = [
    { ico: "🧰", name: "Инструменты", desc: "Дрели, отвёртки, наборы — Ozon", url: "#" },
    { ico: "🔩", name: "Запчасти и крепёж", desc: "Комплектующие для ремонта", url: "#" },
    { ico: "🎨", name: "Краски и материалы", desc: "Всё для отделки — Wildberries", url: "#" },
    { ico: "🛠️", name: "Вызвать мастера", desc: "Проверенные специалисты рядом", url: "#" }
  ];

  function renderPartners() {
    document.querySelectorAll("[data-partners]").forEach(function (box) {
      var items = window.PARTNERS.map(function (p) {
        return (
          '<div class="partner-item">' +
          '<span class="p-ico">' + p.ico + "</span>" +
          '<div><div class="p-name">' + p.name + "</div>" +
          '<div class="p-desc">' + p.desc + "</div></div>" +
          '<a class="p-cta" href="' + p.url + '" rel="nofollow sponsored" target="_blank">Открыть</a>' +
          "</div>"
        );
      }).join("");
      box.insertAdjacentHTML("beforeend", items);
    });
    document.querySelectorAll("[data-app-link]").forEach(function (a) {
      a.setAttribute("href", window.APP_RUSTORE_URL);
    });
  }

  function initBurger() {
    var burger = document.querySelector(".nav-burger");
    var links = document.querySelector(".nav-links");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("open"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderPartners();
    initBurger();
  });
})();

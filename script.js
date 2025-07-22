const tg = window.Telegram.WebApp;
tg.expand();

function sendRoute(route) {
    const data = { route: route };
    tg.sendData(JSON.stringify(data));
    document.body.innerHTML = `<h2 style="text-align:center; color: green;">✅ Спасибо, ждите...</h2>`;
}

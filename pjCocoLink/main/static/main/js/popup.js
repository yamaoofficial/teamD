// ===== ポップアップを開く =====
function openPopup() {
    const popup = document.getElementById("popup-overlay");
    if (popup) {
        popup.style.display = "flex";
    } else {
        console.error("popup-overlay が見つかりません");
    }
}

// ===== ポップアップを閉じる =====
function closePopup() {
    const popup = document.getElementById("popup-overlay");
    if (popup) {
        popup.style.display = "none";
    } else {
        console.error("popup-overlay が見つかりません");
    }
}

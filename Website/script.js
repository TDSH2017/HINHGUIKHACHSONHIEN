function checkPassword() {
  const password = document.getElementById("password").value;
  const errorText = document.getElementById("error");

  // Mật khẩu "2418" chỉ là ví dụ
  if (password === "2418") {
    // Nếu đúng, chuyển sang trang download.html
    window.location.href = "download.html";
  } else {
    // Nếu sai, hiện thông báo
    errorText.innerText = "Mật khẩu sai. Vui lòng thử lại!";
  }
}
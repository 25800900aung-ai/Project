const forYouBtn = document.getElementById("forYouBtn");
  const bookshopBtn = document.getElementById("bookshopBtn");
  const shareBtn = document.getElementById("shareBtn");
  const forYouContent = document.getElementById("forYouContent");

  forYouBtn.onclick = () => {
    forYouContent.style.display = "block";
  };

  bookshopBtn.onclick = () => {
    forYouContent.style.display = "none";
  };

  shareBtn.onclick = () => {
    forYouContent.style.display = "none";
  };
const translationForm = document.querySelector(".site-header__form");
const translationInput = document.querySelector(".site-header__form-input");
const translationSelect = document.querySelector(".translation-select");
const translationOptions = document.querySelectorAll("option");
const url = "https://translate281.p.rapidapi.com/";

translationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const search_value = translationInput.value;
  const selectedLanguage = translationSelect.value;
  const english_language = translationOptions[0].value;
  const russian_language = translationOptions[1].value;
  const chinese_language = translationOptions[2].value;
  const korean_language = translationOptions[3].value;
  const turkish_language = translationOptions[4].value;
  const arabic_language = translationOptions[5].value;
  const afghan_language = translationOptions[6].value;
  const uzbek_language = translationOptions[7].value;
  let language = "";

  switch (selectedLanguage) {
    case english_language:
      language += english_language;
      break;
    case russian_language:
      language += russian_language;
      break;
    case chinese_language:
      language += chinese_language;
      break;
    case korean_language:
      language += korean_language;
      break;
    case turkish_language:
      language += turkish_language;
      break;
    case arabic_language:
      language += arabic_language;
      break;
    case afghan_language:
      language += afghan_language;
      break;
    case uzbek_language:
      language += uzbek_language;
      break;
    default:
      language += english_language;
      break;
  }

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "5fd7907023msh19637a342b9f0f1p11409cjsnfc5029119030",
      "X-RapidAPI-Host": "translate281.p.rapidapi.com",
    },
    body: new URLSearchParams({
      text: search_value,
      from: "auto",
      to: language,
    }),
  };

  const fetchData = async () => {
    const loader_container = document.querySelector(".loader__container");
    const messageText = document.querySelector(".hero__message-text");
    try {
      loader_container.style.display = "inline-block";
      loader_container.innerHTML = "";
      const loader = document.createElement("div");
      loader_container.append(loader);
      loader.classList.add("loader");
      messageText.innerHTML = "";
      const response = await fetch(url, options);
      const data = await response.json();
      loader.classList.remove("loader");
      loader_container.style.display = "none";
      messageText.textContent = data.response;
    } catch (error) {
      console.error(error.message);
    }
  };
  fetchData();
});

document.addEventListener("DOMContentLoaded", () => {
  const messageText = document.querySelector(".hero__message-text");
  const messageCopy = document.querySelector(".hero__message-copy");

  messageCopy.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNode(messageText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });
});

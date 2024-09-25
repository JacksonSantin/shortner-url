import { ref } from "vue";
import { Url } from "../domain/model/url";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const shortnerController = (createUrlShortnerUseCase) => () => {
  const loading = ref(false);
  const copy = ref(true);
  const formScreen = ref(true);
  const linkToShrt = ref("");
  const urlGenerated = ref("");
  const fullUrl = ref("");
  const url = ref(new Url({}));

  const shrtLink = async () => {
    try {
      loading.value = true;
      formScreen.value = true;

      if (!checkURL(linkToShrt.value)) {
        Toastify({
          text: "Invalid URL. Please enter a valid URL.",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "red",
            borderRadius: "10px",
          },
        }).showToast();
        loading.value = false;
        return;
      }

      const param = {
        url: linkToShrt.value,
      };

      url.value = await createUrlShortnerUseCase(param);
      fullUrl.value = linkToShrt.value;
      urlGenerated.value = url.value.shrtlnk;

      if (url.value) {
        formScreen.value = false;
      }
    } catch (error) {
      Toastify({
        text: error,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: "red",
          borderRadius: "10px",
        },
      }).showToast();
    } finally {
      loading.value = false;
    }
  };

  const returnToFormScreen = async () => {
    formScreen.value = true;
    loading.value = false;
    linkToShrt.value = "";
  };

  const copyUrl = async () => {
    const copyText = document.getElementById("urlToCopy");

    copyText.select();
    const t = navigator.clipboard.writeText(copyText.value);
  };

  const checkURL = (url) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
  };

  return {
    loading,
    copy,
    formScreen,
    linkToShrt,
    url,
    urlGenerated,
    fullUrl,
    shrtLink,
    returnToFormScreen,
    copyUrl,
    checkURL,
  };
};

export { shortnerController };

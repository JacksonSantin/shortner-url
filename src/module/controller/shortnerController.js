import { ref } from "vue";
import { Url } from "../domain/model/url";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const shortnerController = (
  createUrlShortnerUseCase
) => () => {
  const loading = ref(false)
  const copy = ref(true)
  const linkToShrt = ref("")
  const urlGenerated = ref("")
  const fullUrl = ref("")
  const url = ref(new Url({}))

  const shrtLink = async () => {
    try {
      loading.value = true

      const param = {
        url: linkToShrt.value
      }

      url.value = await createUrlShortnerUseCase(param)

    } catch (error) {
      Toastify({
        text: error,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: "red",
          borderRadius: "10px"
        },
      }).showToast();
    } finally {
      loading.value = false
    }
  }

  const copyUrl = async () => {
    const copyText = document.getElementById("urlToCopy")

    copyText.select()
    const t = navigator.clipboard.writeText(copyText.value)
    console.log("🚀 ~ file: shortnerController.js:46 ~ copyUrl ~ t:", t)
  }

  return {
    loading,
    copy,
    linkToShrt,
    url,
    urlGenerated,
    fullUrl,
    shrtLink,
    copyUrl,
  }
}

export { shortnerController }
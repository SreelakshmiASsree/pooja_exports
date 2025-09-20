//navbar
const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");
const closeBtns = document.querySelectorAll(".close-btn");

menuBtn.addEventListener("click", () => { mobileMenu.classList.remove("hidden"); });

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});



//factory


const products = {
  1: ["./images/coconutcharcolone.webp"],
  2: ["./images/hardwoodone.webp", "./images/hardwoodtwo.webp"],
  3: ["./images/sawdustone.webp", "./images/sawdusttwo.webp"],
 4:["./images/charcoalbriquettestwo.webp", "./images/charcoalbriquettesone.webp"],
  5: ["./images/coconutfibreone.webp",],
  6: ["./images/coconutpeatone.webp", "./images/coconutpeattwo.webp"],
  7: ["./images/coconutshelltwo.webp", "./images/coconutshellone.webp"]
};

let currentProduct = null;
let currentIndex = 0;

function openCarousel(productId) {
  currentProduct = productId;
  currentIndex = 0;
  renderSlides();
  const modal = document.getElementById("carouselModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCarousel() {
  const modal = document.getElementById("carouselModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function renderSlides() {
  const container = document.getElementById("carousel");
  container.innerHTML = "";
  products[currentProduct].forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = " w-[600px] " + (i === currentIndex ? "" : "hidden");
    container.appendChild(img);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % products[currentProduct].length;
  renderSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + products[currentProduct].length) % products[currentProduct].length;
  renderSlides();
}

//product caurosal

const productImages = {
  steel: ["./images/steelone.webp", "./images/steeltwo.webp", "./images/steelthree.webp", "./images/steelfour.webp", "./images/steelfive.webp", "./images/steelsix.webp"],
  grass: ["./images/grassone.webp", "./images/grasstwo.webp", "./images/grassthree.webp", "./images/grassfour.webp"],
  pebbels: ["./images/pebbelsone.webp", "./images/pebbelstwo.webp", "./images/pebbelsthree.webp", "./images/pebbelsfour.webp", "./images/pebbelsfive.webp",],
  charcoalbriquettes: ["./images/charcoalbriquettestwo.webp", "./images/charcoalbriquettesone.webp"],
  sawdust: ["./images/sawdustone.webp", "./images/sawdusttwo.webp"],
  hardwood: ["./images/hardwoodone.webp", "./images/hardwoodtwo.webp"],
  coconutcharcol: ["./images/coconutcharcolone.webp"],
  coconutshell: ["./images/coconutshelltwo.webp", "./images/coconutshellone.webp",],
  coconutcopra: ["./images/Copra.webp", "./images/copraone.webp",],
  coconutfibre: ["./images/coconutfibreone.webp",],
  coconutpeat: ["./images/coconutpeatone.webp", "./images/coconutpeattwo.webp"],
  coir: ["./images/coirthree.webp", "./images/coirfour.webp", "./images/coirfive.webp", "./images/coirsix.webp", "./images/coirone.webp", "./images/coirseven.webp", "./images/coireight.webp", "./images/coirtwo.webp", "./images/coirnine.webp", "./images/coirten.webp", "./images/Coir_mat.pdf"],
  coirmattress: ["./images/coirmattressone.webp", "./images/coirmattresstwo.webp"],
  coconutdesicated: ["./images/coconutdesicatedone.webp", "./images/coconutdesicatedtwo.webp"],
  fencing: ["./images/fencing.webp", "./images/fencingtwo.webp", "./images/fencingthree.webp", "./images/fencingfour.webp", "./images/fencingfive.webp", "./images/fencingsix.webp", "./images/fencingseven.webp", "./images/fencingeight.webp", "./images/fencingone.pdf", "./images/fencingtwo.pdf"],
  hardware: ["./images/hardwareone.webp", "./images/hardwaretwo.webp", "./images/hardwarethree.webp", "./images/hardwarefour.webp", "./images/hardwarefive.webp", "./images/hardwaresix.webp", "./images/hardwareseven.webp", "./images/hardwareeight.webp", "./images/hardwarenine.webp", "./images/hardwareten.webp", "./images/hardwareeleven.webp", "./images/hardware12.webp", "./images/hardware13.webp", "./images/hardware14.webp", "./images/hardware15.webp", "./images/hardware16.webp", "./images/hardware17.webp", "./images/hardware18.webp", "./images/hardware19.webp", "./images/hardware20.webp", "./images/hardware21.webp",],
  tiles: ["./images/tilesone.webp", "./images/tilestwo.webp", "./images/tilesthree.webp", "./images/tilesfour.webp", "./images/tilesfive.webp", "./images/tilessix.webp", "./images/tilesseven.webp"],
  tmt: ["./images/tmtone.webp", "./images/tmttwo.webp", "./images/tmtthree.webp", "./images/tmtfour.webp"],
  pvc: ["./images/pvcone.webp", "./images/pvctwo.webp"],
  semihusked: ["./images/semihuskedone.webp", "./images/semihuskedtwo.webp"],
  wood: ["./images/woodone.webp", "./images/woodtwo.webp", "./images/woodthree.webp"],
  wpc: ["./images/wpcone.webp", "./images/wpctwo.webp", "./images/wpcthree.webp", "./images/wpcfour.webp", "./images/wpcfive.webp", "./images/wpcsix.webp", "./images/wpcseven.webp", "./images/wpceight.webp", "./images/wpcnine.webp", "./images/wpcten.webp", "./images/wpc11.webp", "./images/wpc12.webp",]

};

let prodCurrentProduct = "";
let prodCurrentIndex = 0;




function showCurrentProductFile() {
  const file = productImages[prodCurrentProduct][prodCurrentIndex];
  const imgElement = document.getElementById("productCarouselImage");
  const pdfElement = document.getElementById("productCarouselPDF");
  const pdfWrapper = document.getElementById("productCarouselPDFWrapper");
  const pdfLink = document.getElementById("productCarouselPDFLink");

  if (file.endsWith(".pdf")) {
    imgElement.classList.add("hidden");

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Mobile → Show button
      pdfElement.classList.add("hidden");
      pdfWrapper.classList.remove("hidden");
      pdfLink.href = file;
    } else {
      // Desktop → Show iframe
      pdfWrapper.classList.add("hidden");
      pdfElement.classList.remove("hidden");
      pdfElement.src = file;
    }
  } else {
    pdfElement.classList.add("hidden");
    pdfWrapper.classList.add("hidden");
    imgElement.classList.remove("hidden");
    imgElement.src = file;
  }
}


function openProductCarousel(product, index = 0) {
  prodCurrentProduct = product;
  prodCurrentIndex = index; // open from clicked index
  const modal = document.getElementById("productCarouselModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  showCurrentProductFile();
}


function closeProductCarousel() {
  const modal = document.getElementById("productCarouselModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex"); // remove flex when closing
}

function nextProductImage() {
  if (!prodCurrentProduct) return;
  prodCurrentIndex = (prodCurrentIndex + 1) % productImages[prodCurrentProduct].length;
  showCurrentProductFile();
}

function prevProductImage() {
  if (!prodCurrentProduct) return;
  prodCurrentIndex = (prodCurrentIndex - 1 + productImages[prodCurrentProduct].length) % productImages[prodCurrentProduct].length;
  showCurrentProductFile();
}



let productPreviewIndex = {};

function nextProductPreview(product) {
  if (!productPreviewIndex[product]) productPreviewIndex[product] = 0;
  productPreviewIndex[product] = (productPreviewIndex[product] + 1) % productImages[product].length;
  document.getElementById(`${product}-preview`).src = productImages[product][productPreviewIndex[product]];
}

function prevProductPreview(product) {
  if (!productPreviewIndex[product]) productPreviewIndex[product] = 0;
  productPreviewIndex[product] = (productPreviewIndex[product] - 1 + productImages[product].length) % productImages[product].length;
  document.getElementById(`${product}-preview`).src = productImages[product][productPreviewIndex[product]];
}








//copy right year
  document.getElementById("year").textContent = new Date().getFullYear();

// Password required to unlock page 2 — set this to your anniversary date as MMDDYY (6 digits)
const CORRECT_PASSWORD = "020825";
let attempts = 0;

// Validate password input and show hints on failed attempts
function checkPassword() {
  const input = document.getElementById('passwordInput');
  const errorMsg = document.getElementById('errorMsg');
  const val = input.value.trim().toLowerCase();

  if (val === CORRECT_PASSWORD) {
    errorMsg.textContent = '';
    goTo('page2');
  } else {
    attempts++;
    input.classList.add('error');
    input.value = '';
    setTimeout(() => input.classList.remove('error'), 400);

    if (attempts === 1) {
      errorMsg.textContent = "❌ Wrong password! 😆"; // change hint 1
    } else if (attempts === 2) {
      errorMsg.textContent = '❌ Wrong password! 😔'; // change hint 2
    } else {
      errorMsg.textContent = '❌ Wrong password! 😡';
    }
  }
}

// Switch visible page by toggling the "hidden" class
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}
 
// PLACEHOLDER: your 12 photos — set src to your file path and caption to the popup message.
// Add class: "tall" / "wide" / "big" to reshape a tile in the grid (optional).
const photos = [
  { src: "pictures/1st.jpg", caption: "First picture natin together kasi this was after sinagot mo na ako. I was super happy to the point na never ko makakalimutan yung day na to. It was really unexpected, at the same time a surreal feeling, kasi first time ko lang din naman maexperience. It's a moment na I will forever cherish at something na I will look back forever.", size: "tall" },
  { src: "pictures/2nd.jpg", caption: "Two days after our monthsary kasi Saturday yung monthsary natin. I bought you flowers for the second time ever, erm, kasi marami pa ko pera niyan, and at the same time we ate sa Santorini before this picture. Tapos nag-Gateway lang din tayo after, tapos umuwi na. It was a simple celebration kasi parang at the time medyo align pa sched natin. At the same time, di pa tayo ginagabi, kaya I can say we had a lot of time in our hands. Namimiss ko na rin siguro na nakakapag-eat tayo after school, tapos after we can go to different places pa.", size: "wide" },
  { src: "pictures/3rd.jpg", caption: "It was my first time watching UAAP volleyball nang live, kaya something na I will remember also. To be honest, sobrang saya niya compared sa expectations ko kasi I thought it will be boring kasi I don't really watch volleyball. Pero it was really a good first-time experience. Talo nga UST non, pero okay lang, erm. Sadly, I don't know if worth it pa mag-watch ngayon kasi parang lahat ng kilala ko graduate na, kaya erm siguro tignan nalang natin if may magandang laban, diba.", size: "" },
  { src: "pictures/4th.jpg", caption: "I don't have a lot of pictures nung May, pero I have this. Something na di ko pa ginagawa before was sleep call, pero at the same time parang perfect timing siya kasi recently lang din ako nagkaroon ng sariling kwarto. Nung una parang ano naman siya, masaya kasi pagtulog ko pati pag-gising parang kasama lang din kita, pero parang masyadong malakas sa kuryente dahil sa charge at ilaw namen, erm, pero okay lang din naman. Tumagal din naman na nagca-call tayo. Buti ngayon we found a different but same approach wherein ine-end nalang yung call pag tulog na talaga. I think this is better, pero same experience lang din as before.", size: "" },
  { src: "pictures/5th.PNG", video: "pictures/5th.mp4", caption: "Never mo naman iisipin na isasama ka ng ibang family sa family outing nila, diba. Actually, masaya siya. Inisip ko nalang dati lived in na tayo, tapos bumisita lang mommy mo pati Amarah, bayt. Galing nga e kasi minsan lang din ako nakakapunta sa ibang lugar. Lalo na gusto ko rin ng parang nasa bahay lang. I hope someday makapag-ganto rin tayo na tayong dalawa lang, pero I guess matagal pa yon. Pero sana mangyare, diba.", size: "wide" },
  { src: "pictures/6th.jpg", caption: "Ito naman sobrang dami natin, kaya nung una nakakahiya, pero parang wala naman din ibang mangyayare kaya okay naman siya. Di ko alam if first time ko sa farm, pero actually maganda rin yung place. Sobrang laki pa nga e, tapos sobrang feel at home ka rin naman. Mas maraming beses akong pumunta ng Pampanga na kayo kasama kesa sa family ko e, erm. Pero kasi wala na rin kaming gagawin don. Di rin gusto nila mama yung mga outing-outing kasi gusto nila may pool or hot spring, erm. Parang ang saya rin umalis sa Quezon City paminsan-minsan, lalo na pag family outing, kaya siguro yung mga outing natin hindi ko nakakalimutan.", size: "" },
  { src: "pictures/7th.jpg", caption: "Ngayon baliktad naman, kami naman yung marami, erm. Sana na-meet mo yung buong family ko, like as in usap talaga, erm. Kasi feel ko lahat sila pare-parehas lang na kakausapin ka talaga, lalo na mga tita ko pati pinsan, or siguro mga babae sa family namen in general. Siguro next time, if ever magkaroon ulit ng time na uuwi buong family ko, sana makasama ka sa mga plans, ganon, para maexperience mo rin sila kasama, diba. Ikaw lang din yung nakilala ng personal sa family ko, kaya erm lagot ka, bayt.", size: "" },
  { src: "pictures/8th.jpg", caption: "UAAP opening, na ang lakas ng ulan, ano yon, erm. Pero kahit na umuulan, sobrang enjoyable pa rin kasi may mga first time tayong narinig na artist. Tapos kahit anlayo natin, ang saya pa rin kasi nakakalibot tayo nang hindi na need makipagsiksikan, diba. Nalimutan ko if ito yung time na nag N-word ka, pero alam ko UAAP yon e. Di ko malilimutan yon kasi racist ka, erm. Naalala mo pa yung muntik na tayo di makabalik sa loob, erm, pero parang lahat nag-align para satin. I mean, ang ganda ng pwesto natin don sa main building, pati na rin sa grandstand, pwede na, kaya erm sobrang swerte natin.", size: "" },
  { src: "pictures/9th.jpg", caption: "Quick random date lang sa Cubao Expo. First time ko lang pumunta don e, pero I mean okay lang siya kasi onti lang magagawa, tapos parang sobrang pang-teenager yung vibes niya. Pero before nag-samgyup tayo e, super sarap don, erm. Nalimutan ko pano pa ko nagkapera sa time na to kasi nag-Tagaytay kaming bagagsh before tayo mag-date, erm. Pero sana ganon ulet pera ko para kakain lang tayo nang kakain kung saan-saan, erm. Sana sa third year makapag-ipon ako nang marami para maaya kita nang maaya.", size: "tall" },
  { src: "pictures/10th.jpg", caption: "Opening ng lights sa UST, second nating experience pero first as boyfriend and girlfriend, diba. I mean wala naman talagang nangyare this time, pero one of the best pictures na meron tayo is eto, diba. Kakamiss tuloy UST, pero sana sa lahat ng events katulad nito kasama kita pati friends ko. So sana 4/4 tayo sa lahat ng event, unless busy sa 4th year. Yun lang dapat yung exception, bayt.", size: "" },
  { src: "pictures/11th.jpg", caption: "Paskuhan naman na naka-red tayo, erm. I mean compared sa first natin, mas maganda yung experience nung first time para saken, pero di naman siya panget sobra siguro. Nakabawi naman sa fireworks kaya maganda pa rin. Also, haba rin ng araw natin kasi nag-eat tayo sa Hokkaido, pati na rin bili flowers sa Gateway. Tapos na-stranded pa tayo sa parang daanan don sa kalsada, erm. Buti di tayo nabasa super, tapos di rin ganon katagal para makapasok. Pero same rin sa ibang events, sana makaattend tayo lagi ng Paskuhan nang magkasama, erm.", size: "" },
  { src: "pictures/12th.jpg", caption: "Random date lang din kasi Saturday. Nag-try tayo ng new place. I mean di naman siya panget, pero siguro may better options. Pero it was very quick lang kasi nag-KKV lang din tayo after, tapos yun lang. Pero yung mga ganong time talaga feel ko kahit na quick dates lang, pero at least we get to spend time with each other. Sana we have more of those sa future kasi tbh pag kumain ako masaya na ko e, erm. Pero sana rin may mga mapuntahan tayong new experience, so sana di super busy and broke, bayt.", size: "" },
];
 
// Build the photo grid from the `photos` array above
function buildPhotoGrid() {
  const grid = document.getElementById('photoGrid');
  photos.forEach((photo, i) => {
    const tile = document.createElement('div');
    tile.className = `photo-tile ${photo.size || ''}`.trim();
    tile.innerHTML = `<img src="${photo.src}" alt="" onerror="this.closest('.photo-tile').style.display='none'">`;
    tile.addEventListener('click', () => openPhotoModal(i));
    grid.appendChild(tile);
  });
}
 
// Open the popup with the clicked photo's image (or video) + caption
function openPhotoModal(i) {
  const photo = photos[i];
  const img = document.getElementById('photoModalImg');
  const video = document.getElementById('photoModalVideo');
  if (photo.video) {
    img.style.display = 'none';
    video.style.display = 'block';
    video.src = photo.video;
    video.currentTime = 0;
    video.play();
  } else {
    video.pause();
    video.currentTime = 0;
    video.src = '';
    video.style.display = 'none';
    img.style.display = 'block';
    img.src = photo.src;
  }
  document.getElementById('photoModalCaption').textContent = photo.caption;
  document.getElementById('photoModal').classList.remove('hidden');
}
 
// Close the photo popup — reset the video back to the start so it's fresh next time
function closePhotoModal() {
  document.getElementById('photoModal').classList.add('hidden');
  const video = document.getElementById('photoModalVideo');
  video.pause();
  video.currentTime = 0;
}
 
buildPhotoGrid();
 
// Birthday page: tap the candle to blow it out + trigger a wish burst
function blowCandle() {
  const flame = document.getElementById('flame');
  const hint = document.getElementById('candleHint');
  if (flame.classList.contains('out')) return; // already blown, don't re-trigger
  flame.classList.add('out');
  hint.textContent = '🎉 happy birthday! 🎉'; // change if you like
  spawnWishBurst();
}
 
// Emoji pool used only for the candle wish burst
const burstEmojis = ['🎉', '🎈', '✨', '🎂', '💖'];
 
// Quick celebratory burst of particles (reuses the floating-heart layer/animation)
function spawnWishBurst() {
  for (let i = 0; i < 22; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'heart-particle';
      el.textContent = burstEmojis[Math.floor(Math.random() * burstEmojis.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
      const dur = 3 + Math.random() * 2;
      el.style.animationDuration = dur + 's';
      el.style.animationDelay = '0s';
      heartsBg.appendChild(el);
      setTimeout(() => el.remove(), (dur + 1) * 1000);
    }, i * 35);
  }
}
 
// Emoji pool used for the floating hearts animation
const heartsBg = document.getElementById('heartsBg');
const heartEmojis = ['❤️','🩷','💕','💗','💓','🌸','💖','🫶'];
 
// Spawn a single floating heart with random position/size/timing
function spawnHeart() {
  const el = document.createElement('span');
  el.className = 'heart-particle';
  el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = (Math.random() * 4) + 's';
  heartsBg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 4) * 1000);
}
 
// Kick off initial burst of hearts, then keep spawning periodically
for (let i = 0; i < 18; i++) setTimeout(spawnHeart, i * 300);
setInterval(spawnHeart, 700);
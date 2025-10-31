const characterContainer = document.getElementById("character-container");
const doneButton = document.getElementById("done-button");
const resultContainer = document.getElementById("result-container");

const characters = [
  { name: "Albedo", image: "/static/api/images/Albedo_Icon.png" },
  { name: "Amber", image: "/static/api/images/Amber_Icon.png" },
  { name: "Barbara", image: "/static/api/images/Barbara_Icon.png" },
  { name: "Bennett", image: "/static/api/images/Bennett_Icon.png" },
  { name: "Diluc", image: "/static/api/images/Diluc_Icon.png" },
  { name: "Eula", image: "/static/api/images/Eula_Icon.png" },
  { name: "Fischl", image: "/static/api/images/Fischl_Icon.png" },
  { name: "Jean", image: "/static/api/images/Jean_Icon.png" },
  { name: "Kaeya", image: "/static/api/images/Kaeya_Icon.png" },
  { name: "Klee", image: "/static/api/images/Klee_Icon.png" },
  { name: "Lisa", image: "/static/api/images/Lisa_Icon.png" },
  { name: "Mika", image: "/static/api/images/Mika_Icon.png" },
  { name: "Noelle", image: "/static/api/images/Noelle_Icon.png" },
  { name: "Razor", image: "/static/api/images/Razor_Icon.png" },
  { name: "Rosaria", image: "/static/api/images/Rosaria_Icon.png" },
  { name: "Sucrose", image: "/static/api/images/Sucrose_Icon.png" },
  { name: "Venti", image: "/static/api/images/Venti_Icon.png" },

  // Liyue
  { name: "Baizhu", image: "/static/api/images/Baizhu_Icon.png" },
  { name: "Beidou", image: "/static/api/images/Beidou_Icon.png" },
  { name: "Chongyun", image: "/static/api/images/Chongyun_Icon.png" },
  { name: "Ganyu", image: "/static/api/images/Ganyu_Icon.png" },
  { name: "Hu Tao", image: "/static/api/images/Hu_Tao_Icon.png" },
  { name: "Keqing", image: "/static/api/images/Keqing_Icon.png" },
  { name: "Ningguang", image: "/static/api/images/Ningguang_Icon.png" },
  { name: "Qiqi", image: "/static/api/images/Qiqi_Icon.png" },
  { name: "Shenhe", image: "/static/api/images/Shenhe_Icon.png" },
  { name: "Xiangling", image: "/static/api/images/Xiangling_Icon.png" },
  { name: "Xiao", image: "/static/api/images/Xiao_Icon.png" },
  { name: "Xingqiu", image: "/static/api/images/Xingqiu_Icon.png" },
  { name: "Xinyan", image: "/static/api/images/Xinyan_Icon.png" },
  { name: "Yanfei", image: "/static/api/images/Yanfei_Icon.png" },
  { name: "Yelan", image: "/static/api/images/Yelan_Icon.png" },
  { name: "Zhongli", image: "/static/api/images/Zhongli_Icon.png" },

  // Inazuma
  { name: "Arataki Itto", image: "/static/api/images/Arataki_Itto_Icon.png" },
  { name: "Ayaka", image: "/static/api/images/Kamisato_Ayaka_Icon.png" },
  { name: "Ayato", image: "/static/api/images/Kamisato_Ayato_Icon.png" },
  { name: "Gorou", image: "/static/api/images/Gorou_Icon.png" },
  { name: "Heizou", image: "/static/api/images/Shikanoin_Heizou_Icon.png" },
  { name: "Kazuha", image: "/static/api/images/Kaedehara_Kazuha_Icon.png" },
  { name: "Kokomi", image: "/static/api/images/Sangonomiya_Kokomi_Icon.png" },
  { name: "Kujou Sara", image: "/static/api/images/Kujou_Sara_Icon.png" },
  { name: "Raiden Shogun", image: "/static/api/images/Raiden_Shogun_Icon.png" },
  { name: "Sayu", image: "/static/api/images/Sayu_Icon.png" },
  { name: "Thoma", image: "/static/api/images/Thoma_Icon.png" },
  { name: "Yoimiya", image: "/static/api/images/Yoimiya_Icon.png" },
  { name: "Yae Miko", image: "/static/api/images/Yae_Miko_Icon.png" },

  // Sumeru
  { name: "Alhaitham", image: "/static/api/images/Alhaitham_Icon.png" },
  { name: "Candace", image: "/static/api/images/Candace_Icon.png" },
  { name: "Collei", image: "/static/api/images/Collei_Icon.png" },
  { name: "Cyno", image: "/static/api/images/Cyno_Icon.png" },
  { name: "Dehya", image: "/static/api/images/Dehya_Icon.png" },
  { name: "Dori", image: "/static/api/images/Dori_Icon.png" },
  { name: "Faruzan", image: "/static/api/images/Faruzan_Icon.png" },
  { name: "Kaveh", image: "/static/api/images/Kaveh_Icon.png" },
  { name: "Layla", image: "/static/api/images/Layla_Icon.png" },
  { name: "Nahida", image: "/static/api/images/Nahida_Icon.png" },
  { name: "Nilou", image: "/static/api/images/Nilou_Icon.png" },
  { name: "Tighnari", image: "/static/api/images/Tighnari_Icon.png" },
  { name: "Wanderer", image: "/static/api/images/Wanderer_Icon.png" },
  { name: "Kuki Shinobu", image: "/static/api/images/Kuki_Shinobu_Icon.png" },

  // Fontaine
  { name: "Arlecchino", image: "/static/api/images/Arlecchino_Icon.webp" },
  { name: "Clorinde", image: "/static/api/images/Clorinde_Icon.webp" },
  { name: "Furina", image: "/static/api/images/Furina_Icon.webp" },
  { name: "Freminet", image: "/static/api/images/Freminet_Icon.png" },
  { name: "Lyney", image: "/static/api/images/Lyney_Icon.png" },
  { name: "Lynette", image: "/static/api/images/Lynette_Icon.png" },
  { name: "Navia", image: "/static/api/images/Navia_Icon.webp" },
  { name: "Neuvillette", image: "/static/api/images/Neuvillette_Icon.webp" },
  { name: "Sigewinne", image: "/static/api/images/Sigewinne_Icon.webp" },
  { name: "Charlotte", image: "/static/api/images/Charlotte_Icon.webp" },
  { name: "Chevreuse", image: "/static/api/images/Chevreuse_Icon.webp" },
  { name: "Wriothesley", image: "/static/api/images/Wriothesley_Icon.png" },

  // Natlan (6.0+ new region)
  { name: "Mualani", image: "/static/api/images/Mualani_Icon.webp" },
  { name: "Kinich", image: "/static/api/images/Kinich_Icon.webp" },
  { name: "Kachina", image: "/static/api/images/Kachina_Icon.webp" },
  { name: "Chasca", image: "/static/api/images/Chasca_Icon.webp" },
  { name: "Ororon", image: "/static/api/images/Ororon_Icon.webp" },
  { name: "Xilonen", image: "/static/api/images/Xilonen_Icon.webp" },
  { name: "Citlali", image: "/static/api/images/Citlali_Icon.webp" },
];

let selected = [];

function renderCharacters() {
  characterContainer.innerHTML = "";
  characters.forEach((char) => {
    const card = document.createElement("div");
    card.className = "character-card";
    if (selected.includes(char.name)) card.classList.add("selected");

    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <p>${char.name}</p>
    `;

    card.onclick = () => toggleSelect(char.name);
    characterContainer.appendChild(card);
  });
}

function toggleSelect(name) {
  if (selected.includes(name)) {
    selected = selected.filter((n) => n !== name);
  } else {
    selected.push(name);
  }
  renderCharacters();
}

doneButton.onclick = async () => {
  if (selected.length === 0) {
    alert("Please select at least one character!");
    return;
  }

  resultContainer.innerHTML = "<p>Analyzing team...</p>";

  const res = await fetch("/api/analyze_team/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ characters: selected }),
  });

  const data = await res.json();
  console.log("Raw API response:", data);

  document.getElementById("result-container").innerHTML = `
  <h2>Recommended Team:</h2>
  <p>${data.result.replace(/\n/g, "<br>")}</p>
  `;
/*
  if (!data.teams) {
    resultContainer.innerHTML = "<p>No recommendation found.</p>";
    return;
  }
*/
  resultContainer.innerHTML = data.teams
    .map(
      (team) => `
      <h3>${team.name}</h3>
      <p>${team.core_concept}</p>
      <ul>${team.members
        .map(
          (m) =>
            `<li><strong>${m.name}</strong> — ${m.role}: ${m.description}</li>`
        )
        .join("")}</ul>
      <p><em>${team.why_optimal}</em></p>
    `
    )
    .join("<hr>");
};

renderCharacters();

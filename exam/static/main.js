let apiKey = "8dbf1df8-2894-4854-b301-21b5b7431798";
let apiUrl = "http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants";

let restaurantsJson;

window.onload = function () {
    getRestaurants().then(renderRecords);
    document.querySelector("#find").onclick = filterRecords;
  };
  
  async function getRestaurants() {
    let url = new URL(apiUrl);
    url.searchParams.set("api_key", apiKey);
    let response = await fetch(url);
  
    let json = await response.json();
    restaurantsJson = json;
    return json;
  }

   function renderRecords(records) {
    let restaurantTable = document.querySelector("tbody");
    for (let i = 0; i < 5; i++) {
      restaurantTable.append(createRestaurantTableItem(records[i]));
    }
    getFilter();
  }

  function createRestaurantTableItem(record) {
    let item = document.querySelector("#tr-template").cloneNode(true);
    item.classList.remove("d-none");
    item.querySelector(".restaurant-name").innerHTML = record.name;
    item.querySelector(".restaurant-type").innerHTML = record.typeObject;
    item.querySelector(".restaurant-addr").innerHTML = record.address;
    item.querySelector(".restaurant-id").value = record.id;
  
    return item;
  }
  
  function getFilter() {
    let arrType = [];
    for (let i = 0; i < restaurantsJson.length; i++) {
      arrType.push(restaurantsJson[i].typeObject);
    }
    var unarr = new Set(arrType);
  
    for (let value of unarr) {
      let qwe = document.createElement("option");
      qwe.innerHTML = value;
      document.querySelector("#type").appendChild(qwe);
    }
  
    var arrAdm = [];
    for (let i = 0; i < restaurantsJson.length; i++) {
      arrAdm.push(restaurantsJson[i].admArea);
    }
    var unarr = new Set(arrAdm);
  
    for (let value of unarr) {
      let qwe = document.createElement("option");
      qwe.innerHTML = value;
      document.querySelector("#area").appendChild(qwe);
    }
  
    var arrDistrict = [];
    for (let i = 0; i < restaurantsJson.length; i++) {
      arrDistrict.push(restaurantsJson[i].district);
    }
    var unarr = new Set(arrDistrict);
  
    for (let value of unarr) {
      let qwe = document.createElement("option");
      qwe.innerHTML = value;
      document.querySelector("#district").appendChild(qwe);
    }

    var arrSocialPrivileges = [];
    for (let i = 0; i < restaurantsJson.length; i++) {
      arrSocialPrivileges.push(restaurantsJson[i].socialPrivileges);
    }
    var unarr = new Set(arrSocialPrivileges);
  
    for (let value of unarr) {
      let qwe = document.createElement("option");
      qwe.innerHTML = value;
      document.querySelector("#socialPrivileges").appendChild(qwe);
    }
  }

 
  
  
  
  function filterRecords() {
    let selectedAdm = document.getElementById("area").value;
    let selectedDistrict = document.getElementById("district").value;
    let selectedType = document.getElementById("type").value;
    let selectedSocialPrivileges = document.getElementById("socialPrivileges").value;
  
    let restaurantTable = document.querySelector("tbody");
    while (restaurantTable.children.length > 1) {
      restaurantTable.removeChild(restaurantTable.lastChild);
    }
  
    for (let i = 0; i < restaurantsJson.length; i++) {
      if (
        (selectedAdm == "Не выбрано" ||
          selectedAdm == restaurantsJson[i].admArea) &&
        (selectedDistrict == "Не выбрано" ||
          selectedDistrict == restaurantsJson[i].district) &&
        (selectedSocialPrivileges == "Не выбрано" ||
          selectedSocialPrivileges == restaurantsJson[i].socialPrivileges) &&
        (selectedType == "Не выбрано" ||
          selectedType == restaurantsJson[i].typeObject)
      ) {
        restaurantTable.append(createRestaurantTableItem(restaurantsJson[i]));
      }
    }
  }
  
 
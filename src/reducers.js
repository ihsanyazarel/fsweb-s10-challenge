import { NOT_EKLE, NOT_SIL } from "./actions";


const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyBgs8JLehAr0Lr5v3p",
      date: "Fri May 27 2023 01:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün Aytaç çok mutsuz :(|Ayşegül her şeye atarlı :)|Serkan bizi ekti | Biz de Yaşar'ı ektik",
    }, 
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri May 27 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    }, 
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);
  if (eskiNotlar == null) {
    return baslangicDegerleri;
  } 
  else if(JSON.parse(eskiNotlar).notlar.length === 0){
    return baslangicDegerleri
  }
  else {
  return localStorageStateOku(key);
  }
}

export function reducer(state = baslangicNotlariniGetir(s10chLocalStorageKey), action){
  switch(action.type){
     case NOT_EKLE:
    const notEkleState ={
      ...state,
      notlar: [action.payload , ...state.notlar],
     };
     localStorageStateYaz(s10chLocalStorageKey, notEkleState)
     return notEkleState;

     case NOT_SIL:
      const notSilState = {
        ...state,
        notlar: state.notlar.filter(not => not.id !== action.payload)
      };
     localStorageStateYaz(s10chLocalStorageKey, notSilState)
      return notSilState;

    default:
      return state;
  }
  
}
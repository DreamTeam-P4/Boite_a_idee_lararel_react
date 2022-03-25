import { atom } from "recoil";

export const descriptions = atom({
    key: 'descriptions',
    default: null
});

export const statistiques = atom({
    key: 'statistiques',
    default: { Valider: 0, Refuser: 0 }
});
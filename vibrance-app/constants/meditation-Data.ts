import riseOneBeach from "@assets/Meditation-Images/pexels-alexazabache-beach.jpg";
import riseTwoSitting from "@assets/Meditation-Images/pexels-josh-hild-sitting-shadow.jpg";
import riseThreeSunrise from "@assets/Meditation-Images/pexels-sachin-c-nair-elevate-sunrise.jpg";
import riseFourBlueMountainSky from "@assets/Meditation-Images/pexels-travelswithkrishna-bluesky-river.jpg";

import starShoppingOneRetroCamp from "@assets/Meditation-Images/pexels-bylukemiller-retro-camp-stars.jpg";
import starShoppingTwoSnowAurora from "@assets/Meditation-Images/pexels-kristian-bechthold-snow-aurora.jpg";
import starShoppingThreeVacuum from "@assets/Meditation-Images/pexels-toni-ivanov-ship-vacuum.jpg";
import starShoppingFourBeacon from "@assets/Meditation-Images/pexels-bertellifotografia-beacon.jpg";

import wanderlustOnePurpleSky from "@assets/Meditation-Images/pexels-eberhardgross-purplesky-river.jpg";
import wanderlustTwoJungleRiver from "@assets/Meditation-Images/pexels-rifkyilhamrd-jungle-river.jpg";
import wanderlustThreePinkWave from "@assets/Meditation-Images/pexels-souvenirpixels-pink-wave.jpg";
import wanderlustFourMountainReflection from "@assets/Meditation-Images/pexels-eberhardgross-hyperview-mountain-reflection.jpg";

/*
import stockImagesOneAquaLake from "@assets/Meditation-Images/pexels-snowy-mountains-blue-aqua-lake.jpg";
import stockImagesTwoTreeHalo from "@assets/vibrance/vibrance-app/assets/Meditation-Images/pexels-timmossholder-tree-halo.jpg";
import stockImagesThreeBlueAbyss from "@assets/Meditation-Images/pexels-vishal-amin-blue-mountain-abyss.jpg";
import stockImagesFourWaterfall from "@assets/Meditation-Images/pexels-taryn-elliott-waterfall.jpg";
*/

export interface MeditationType {
    id: number;
    title: string;
    image: any;
    audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "rise",
        image:  riseOneBeach,
        audio: "trees.mp3",
    },
    {
        id: 2,
        title: "rise",
        image:  riseTwoSitting,
        audio: "river.mp3",
    },
    {
        id: 3,
        title: "rise",
        image:  riseThreeSunrise,
        audio: "meditate-under-tree.mp3",
    },
    {
        id: 4,
        title: "rise",
        image: riseFourBlueMountainSky,
        audio: "beach.mp3",
    },
    {
        id: 5,
        title: "Star Shopping",
        image: starShoppingOneRetroCamp,
        audio: "yosemite-stars.mp3",
    },
    {
        id: 6,
        title: "Star Shopping",
        image: starShoppingTwoSnowAurora,
        audio: "waterfall.mp3",
    },
    {
        id: 7,
        title: "Star Shopping",
        image: starShoppingThreeVacuum,
        audio: "waterfall.mp3",
    },
    {
        id: 8,
        title: "Star Shopping",
        image: starShoppingFourBeacon,
        audio: "waterfall.mp3",
    },
    {
        id: 9,
        title: "Wanderlust",
        image: wanderlustOnePurpleSky,
        audio: "waterfall.mp3",
    },
    {
        id: 10,
        title: "Wanderlust",
        image: wanderlustTwoJungleRiver,
        audio: "waterfall.mp3",
    },
    {
        id: 11,
        title: "Wanderlust",
        image: wanderlustThreePinkWave,
        audio: "waterfall.mp3",
    },
    {
        id: 12,
        title: "Wanderlust",
        image: wanderlustFourMountainReflection,
        audio: "waterfall.mp3",
    },
    /*
        {
        id: 13,
        title: "Star Shopping",
        image: starShoppingFourBeacon,
        audio: "waterfall.mp3",
    },
    {
        id: 14,
        title: "Wanderlust",
        image: wanderlustOnePurpleSky,
        audio: "waterfall.mp3",
    },
    {
        id: 15,
        title: "Wanderlust",
        image: wanderlustTwoJungleRiver,
        audio: "waterfall.mp3",
    },
    {
        id: 16,
        title: "Wanderlust",
        image: wanderlustThreePinkWave,
        audio: "waterfall.mp3",
    },
    {
        id: 17,
        title: "Wanderlust",
        image: wanderlustFourMountainReflection,
        audio: "waterfall.mp3",
    },
*/
];

export const AUDIO_FILES: { [key: string]: any } = {
    "trees.mp3": require("@assets/meditation-audio/audio/trees.mp3"),
    "river.mp3": require("@assets/meditation-audio/audio/river.mp3"),
    "meditate-under-tree.mp3": require("@assets/meditation-audio/audio/meditate-under-tree.mp3"),
    "beach.mp3": require("@assets/meditation-audio/audio/beach.mp3"),
    "yosemite-stars.mp3": require("@assets/meditation-audio/audio/yosemite-stars.mp3"),
    "waterfall.mp3": require("@assets/meditation-audio/audio/waterfall.mp3"),
};
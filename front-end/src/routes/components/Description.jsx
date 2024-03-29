import React from "react";
import DwarfImage from "../../assets/dwarf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import GnomeImage from "../../assets/gnome.png";
import ElfImage from "../../assets/elf.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalforcImage from "../../assets/halforc.png";
import TieflingImage from "../../assets/tiefling.png";
import HalflingImage from "../../assets/halfling.png";
import DefaultImage from "../../assets/default.jpg";
import { GlobalStateContext } from "../../App";
import { useEffect } from "react";
import { useState } from "react";
export default function Description() {
  const { globalRace, globalClass, globalDescription, globalBackground, globalAbilities, globalTraits, setGlobalTraits, setGlobalStats } = React.useContext(GlobalStateContext);
  // speed: raceData['speed'],
  //                                   age: raceData['age'],
  //                                   size: raceData['size'],
  //                                   sizeDescription: raceData['size_description'],
  //                                   traits: traitNames,
  //                                   traitsDescription: traitDescriptions,
  const [traits, setTraits] = useState(globalAbilities[0]?.['traits']);
  const [traitsDescription, setTraitsDescription] = useState(globalAbilities[0]?.['traitsDescription']);
  useEffect(() => {
    setTraits(globalAbilities[0]?.['traits'])
    setTraitsDescription(globalAbilities[0]?.['traitsDescription'])
  }, [globalAbilities])
  const getImageSource = () => {
    switch (globalRace) {
      case "":
        return DefaultImage;
      case "Goblin":
        return GoblinImage;
      case "Dwarf":
        return DwarfImage;
      case "Human":
        return HumanImage;
      case "Gnome":
        return GnomeImage;
      case "Elf":
        return ElfImage;
      case "Half Elf":
        return HalfElfImage;
      case "Half Orc":
        return HalforcImage;
      case "Halfling":
        return HalflingImage;
      case "Tiefling":
        return TieflingImage;
      default:
        return DefaultImage;
    }
  };
  const [stats, setStats] = useState([0, 0, 0, 0, 0, 0]);
  const handleInputChange = (index, value) => {
    const newStats = [...stats];
    newStats[index] = value;
    setStats(newStats);
    setGlobalStats(stats);
  };
 
 
  return (
    <div className="card flex w-4/5 shadow-xl">
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-center">
          <img
            className="w-1/3"
            src={getImageSource()}
            alt={globalRace}
          />
        </div>
        <div className="flex max-w-sm mx-auto">
      <input
        type="number"
        placeholder="Dex"
        value={stats[0]}
        onChange={(e) => handleInputChange(0, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 mr-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
      <input
        type="number"
        placeholder="Str"
        value={stats[1]}
        onChange={(e) => handleInputChange(1, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 mr-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
      <input
        type="number"
        placeholder="Con"
        value={stats[2]}
        onChange={(e) => handleInputChange(2, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 mr-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
      <input
        type="number"
        placeholder="Int"
        value={stats[3]}
        onChange={(e) => handleInputChange(3, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 mr-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
      <input
        type="number"
        placeholder="Wis"
        value={stats[4]}
        onChange={(e) => handleInputChange(4, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 mr-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
      <input
        type="number"
        placeholder="Cha"
        value={stats[5]}
        onChange={(e) => handleInputChange(5, parseInt(e.target.value))}
        className="w-1/6 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
    </div>

    
        <div className="text-black p-6">
          <div className="uppercase tracking-wide text-sm font-semibold">
            Class: {globalClass}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Race: {globalRace}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Background: {globalBackground}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Description:
          </div>
          <p className="text-lg">
            {globalDescription}
          </p>
          <div className="flex flex-col">
            <div className="flex flex-col max-w-1/2"> {/* Added max-w-1/2 class */}
              <div className="uppercase tracking-wide text-sm font-semibold mt-4">
                Race Abilities
              </div>
              <p className="text-lg max-w-80">
                <b>Age:</b> {globalAbilities[0]?.['age']}
              </p>
              <p className="text-lg">
                <b>Speed:</b> {globalAbilities[0]?.['speed']}
              </p>
              <p className="text-lg max-w-80">
                <b>Size:</b> {globalAbilities[0]?.['sizeDescription']}
              </p>
              
            </div>
            <div className="flex flex-col max-w-1/2"> {/* Added max-w-1/2 class */}
              <div className="uppercase tracking-wide text-sm font-semibold mt-4">
                Class Abilities
              </div>
              <p className="text-lg max-w-80">
                <b>Hit Dice</b> {globalAbilities[1]?.['hitDie']}
              </p>
              {globalAbilities[1]?.['proficiencies'].map((proficiency, index) => {
                return <p key={index} className="text-lg"><b>Proficient In: </b>{proficiency}</p>
              })}
              {globalAbilities[1]?.['startingEquipment'].map((equipment, index) => {
               return <p key={index} className="text-lg"><b>Starting Equipment: </b>{equipment}</p>
              })}
              {/* {globalAbilities[1]?.['levelDescriptions'].map((description, index) => {
                return <p key={index} className="text-lg"><b>Level {index + 1}: </b> Ability Score Improvement: {description['ability_score_bonuses']}, Prof Bonus: {description['prof_bonus']}</p>
              })} */}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
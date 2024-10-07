import React from 'react';
import { Button } from "@/components/ui/button";

const songs = [
  { title: "Five Little Ducks", lyrics: "Five little ducks went out one day..." },
  { title: "Ten in the Bed", lyrics: "There were ten in the bed and the little one said..." },
  { title: "One, Two, Buckle My Shoe", lyrics: "One, two, buckle my shoe..." },
];

const CountingSongs = ({ onClose }) => {
  return (
    <div className="bg-blue-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Counting Songs</h2>
      <ul className="space-y-4">
        {songs.map((song, index) => (
          <li key={index} className="bg-blue-700 p-4 rounded">
            <h3 className="font-bold mb-2">{song.title}</h3>
            <p className="text-sm mb-2">{song.lyrics}</p>
            <Button className="bg-yellow-500 text-blue-900">Sing Along</Button>
          </li>
        ))}
      </ul>
      <Button onClick={onClose} className="mt-4 bg-purple-600">Back to Challenges</Button>
    </div>
  );
};

export default CountingSongs;
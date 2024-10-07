import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const stories = [
  { title: "The Counting Castle", content: "Once upon a time, in a castle filled with numbers..." },
  { title: "Fraction Fairy Tale", content: "In a magical land where everything was divided..." },
  { title: "Geometry Jungle", content: "Deep in the jungle of shapes and angles..." },
];

const MathStories = ({ onClose }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="bg-indigo-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Math Stories</h2>
      {selectedStory ? (
        <div>
          <h3 className="text-xl mb-2">{selectedStory.title}</h3>
          <p className="mb-4">{selectedStory.content}</p>
          <Button onClick={() => setSelectedStory(null)} className="bg-yellow-500 text-indigo-900">
            Back to Stories List
          </Button>
        </div>
      ) : (
        <ul className="space-y-4">
          {stories.map((story, index) => (
            <li key={index} className="bg-indigo-700 p-4 rounded">
              <h3 className="font-bold mb-2">{story.title}</h3>
              <Button onClick={() => setSelectedStory(story)} className="bg-yellow-500 text-indigo-900">
                Read Story
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button onClick={onClose} className="mt-4 bg-purple-600">Back to Learning</Button>
    </div>
  );
};

export default MathStories;
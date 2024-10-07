import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import AnimatedNumber from './AnimatedNumber';

const ProfileCard = ({ level, experience }) => {
  const [avatarUrl, setAvatarUrl] = useState('/placeholder.svg');

  useEffect(() => {
    const fetchRandomAvatar = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'portrait',
            orientation: 'squarish',
          },
          headers: {
            Authorization: 'Client-ID YOUR_UNSPLASH_ACCESS_KEY'
          }
        });
        setAvatarUrl(response.data.urls.small);
      } catch (error) {
        console.error('Error fetching random avatar:', error);
      }
    };

    fetchRandomAvatar();
  }, []);

  const getRangerTitle = (level) => {
    if (level === 1) return "Network Novice";
    if (level <= 3) return "Signal Scout";
    if (level <= 5) return "Bandwidth Warrior";
    if (level <= 7) return "Protocol Pioneer";
    return "Cyber Commander";
  };

  return (
    <Card className="bg-purple-800 border-yellow-500">
      <CardHeader>
        <CardTitle className="font-cinzel">Your Tech Ranger</CardTitle>
      </CardHeader>
      <CardContent>
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src={avatarUrl} alt="Random profile avatar" />
          <AvatarFallback>TR</AvatarFallback>
        </Avatar>
        <Progress value={experience} className="mb-2" />
        <p className="text-center">Level <AnimatedNumber value={level} /> {getRangerTitle(level)}</p>
        <p className="text-center">XP: <AnimatedNumber value={experience} /> / 100</p>
        <p className="text-center text-sm mt-2">Signal Range: {level * 10} meters</p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
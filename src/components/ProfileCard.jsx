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

  return (
    <Card className="bg-purple-800 border-yellow-500">
      <CardHeader>
        <CardTitle className="font-cinzel">Your Ranger</CardTitle>
      </CardHeader>
      <CardContent>
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src={avatarUrl} alt="Random profile avatar" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Progress value={experience} className="mb-2" />
        <p className="text-center">Level <AnimatedNumber value={level} /> Ranger</p>
        <p className="text-center">XP: <AnimatedNumber value={experience} /> / 100</p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
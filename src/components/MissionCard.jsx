import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MissionCard = ({ icon: Icon, title, buttonText, onClick, buttonColor }) => (
  <Card className="bg-purple-800 border-yellow-500">
    <CardHeader>
      <CardTitle className="font-cinzel flex items-center">
        <Icon className="mr-2" /> {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Button className={`w-full ${buttonColor}`} onClick={onClick}>{buttonText}</Button>
    </CardContent>
  </Card>
);

export default MissionCard;
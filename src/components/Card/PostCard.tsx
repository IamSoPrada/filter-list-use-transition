import React from "react";
import { Card, Title, Text, Span } from "@/styles";

type PostCardProps = {
  children?: React.ReactNode;
  text: string;
  userId: number;
};

export const PostCard: React.FC<PostCardProps> = ({
  children,
  text,
  userId,
}) => {
  return (
    <Card>
      <Span>{userId}</Span>
      <Text>{text}</Text>
    </Card>
  );
};

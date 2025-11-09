import { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

// Use string keys to simplify TypeScript
const reviewsData: Record<string, Review[]> = {
  "1": [
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing beachfront view!" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Very comfortable stay." },
  ],
  "2": [
    {
      id: 3,
      name: "Aliyu Bello",
      rating: 5,
      comment: "Clean and well-furnished.",
    },
    {
      id: 4,
      name: "Grace Nwosu",
      rating: 3,
      comment: "Good location but noisy at night.",
    },
  ],
  "3": [
    {
      id: 5,
      name: "Efe Johnson",
      rating: 4,
      comment: "Perfect for a weekend getaway!",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Ensure id is a string
  const reviews = typeof id === "string" ? reviewsData[id] : undefined;

  if (!reviews) {
    return res
      .status(404)
      .json({ message: "No reviews found for this property." });
  }

  res.status(200).json(reviews);
}

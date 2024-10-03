import React, { useEffect, useState } from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import exerciseData from "../constants/exercise_data"; // Assuming this contains exercise info

const AiComp = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<
    { heading: string; improvements: string[] }[]
  >([]);
  const [feedback, setFeedback] = useState("");

  const currentPlan = useSelector((state: any) => state.templates);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyCRgvnhF-6sULIBrctCYg9WOOaavzJ8oTs"
  );

  const getExercise = (id: string) => {
    return exerciseData.find((exercise: any) => exercise.id === id);
  };

  const convertPlanToString = (plan: any) => {
    return plan
      .map((template: any) => {
        const exercises = template.exercises
          .map((id: string) => {
            const ex = getExercise(id);
            return ex ? `${ex.name} (${ex.bodyPart})` : "Unknown exercise";
          })
          .join(", ");
        return `Template: ${template.templateName}, Exercises: ${exercises}`;
      })
      .join("\n");
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const detailedPlan =
          convertPlanToString(currentPlan) +
          "\nthese are my weekly exercise plan suggest me to improvements over it only give improvements no other text. Format should be like heading of the template and improvements as description.";

        console.log(detailedPlan);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(detailedPlan);
        const response = await result.response.text();

        if (response) {
          const lines = response.split("\n");
          const formattedRecommendations: {
            heading: string;
            improvements: string[];
          }[] = [];

          lines.forEach((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine) {
              const [heading, ...improvementLines] = trimmedLine.split("\n");
              const improvements = improvementLines
                .map((improvement) => improvement.replace("* ", "").trim())
                .filter((imp) => imp); // Filter out any empty strings

              // Check if we already have this heading
              const existing = formattedRecommendations.find(
                (rec) => rec.heading === heading.trim()
              );
              if (existing) {
                existing.improvements.push(...improvements); // Combine improvements if heading exists
              } else {
                formattedRecommendations.push({
                  heading: heading.trim(),
                  improvements,
                }); // Add new section
              }
            }
          });

          setRecommendations(formattedRecommendations);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentPlan]);

  return (
    <View className="bg-cyan-900 h-screen w-screen relative p-4">
      <Text className="text-white text-lg mt-10">
        AI-Generated Recommendations
      </Text>

      {loading ? (
        <Text className="text-white mt-4">Loading recommendations...</Text>
      ) : (
        <ScrollView className="mt-4 mb-6">
          {recommendations.length > 0 ? (
            recommendations.map((rec, index) => (
              <View key={index} className="bg-cyan-700 p-4 mb-2 rounded-lg">
                <Text className="text-orange-100 font-bold text-xl">
                  {rec.heading}
                </Text>
                {rec.improvements.map((improvement, i) => (
                  <Text key={i} className="text-white ml-4">
                    -- {improvement}
                  </Text>
                ))}
              </View>
            ))
          ) : (
            <Text className="text-white">
              No recommendations available yet.
            </Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default AiComp;

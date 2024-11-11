import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import exerciseData from "../constants/exercise_data"; // Assuming this contains exercise info

const AiComp = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<
    { dayName: string; improvements: string[]; diet: string[] }[]
  >([]);

  const currentPlan = useSelector((state: any) => state.templates);
  const [previousPlan, setPreviousPlan] = useState<any>(null);

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
    // const fetchRecommendations = async () => {
    //   setLoading(true);
    //   try {
    //     const detailedPlan = `
    //       ${convertPlanToString(currentPlan)}
    //       \nThese are my weekly exercise plan. Suggest improvements and relevant diet plans for each day or exercise. Format your response like this:
    //       - The Day Name (e.g., "Chest Day")
    //       - Improvements: Provide improvements as a description
    //       - Diet Suggestions: Provide diet suggestions as a list
    //       Please avoid using stars or bullet points, and instead, use clean text to describe each section clearly.
    //     `;

    //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    //     const result = await model.generateContent(detailedPlan);
    //     const response = await result.response.text();

    //     if (response) {
    //       const lines = response.split("\n");
    //       const groupedRecommendations: { dayName: string; improvements: string[]; diet: string[] }[] = [];

    //       let currentDay: string | null = null;
    //       let currentImprovements: string[] = [];
    //       let currentDiet: string[] = [];

    //       lines.forEach((line) => {
    //         const trimmedLine = line.trim();
    //         if (trimmedLine) {
    //           if (trimmedLine.includes("Day") || trimmedLine.includes("Exercise")) {
    //             // If a new day/exercise starts, push the current day data and reset
    //             if (currentDay) {
    //               groupedRecommendations.push({
    //                 dayName: currentDay,
    //                 improvements: currentImprovements,
    //                 diet: currentDiet,
    //               });
    //             }
    //             currentDay = trimmedLine; // Assign new day/exercise name
    //             currentImprovements = [];
    //             currentDiet = [];
    //           } else if (trimmedLine.toLowerCase().includes("improvements")) {
    //             // The next lines are improvements
    //             // Skip the "Improvements:" text
    //             const improvementText = trimmedLine.replace("Improvements:", "").trim();
    //             if (improvementText) currentImprovements.push(improvementText);
    //           } else if (trimmedLine.toLowerCase().includes("diet suggestions")) {
    //             // The next lines are diet suggestions
    //             // Skip the "Diet Suggestions:" text
    //             const dietText = trimmedLine.replace("Diet Suggestions:", "").trim();
    //             if (dietText) currentDiet.push(dietText);
    //           } else {
    //             // Capture further content under improvements or diet section, based on what is active
    //             if (currentImprovements.length > 0) {
    //               // If improvements are active, add to improvements
    //               const cleanImprovement = trimmedLine.replace("* ", "").trim();
    //               if (cleanImprovement) currentImprovements.push(cleanImprovement);
    //             } else if (currentDiet.length > 0) {
    //               // If diet suggestions are active, add to diet
    //               const cleanDiet = trimmedLine.replace("* ", "").trim();
    //               if (cleanDiet) currentDiet.push(cleanDiet);
    //             }
    //           }
    //         }
    //       });

    //       // Push the last day data
    //       if (currentDay) {
    //         groupedRecommendations.push({
    //           dayName: currentDay,
    //           improvements: currentImprovements,
    //           diet: currentDiet,
    //         });
    //       }

    //       console.log("Response", response);
    //       console.log("groupedRecommendations", groupedRecommendations);
    //       setRecommendations(groupedRecommendations);
    //       setPreviousPlan(currentPlan);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching recommendations:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const detailedPlan = `
          ${convertPlanToString(currentPlan)}
          \nThese are my weekly exercise plan. Suggest improvements and relevant diet plans for each day or exercise. Format your response like this:
          - The Day Name (e.g., "Chest Day")
          - Improvements: Provide improvements as a description 
          - Diet Suggestions: Provide diet suggestions as a list
          Please avoid using stars or bullet points, and instead, use clean text to describe each section clearly.
        `;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(detailedPlan);
        const response = await result.response.text();

        if (response) {
          const lines = response.split("\n");
          const groupedRecommendations: {
            dayName: string;
            improvements: string[];
            diet: string[];
          }[] = [];

          let currentDay: string | null = null;
          let currentImprovements: string[] = [];
          let currentDiet: string[] = [];

          lines.forEach((line) => {
            const trimmedLine = line.trim();

            if (trimmedLine) {
              // Remove ** around the headings if present
              const cleanLine = trimmedLine.replace(/\*\*/g, "").trim();

              if (cleanLine.includes("Day") || cleanLine.includes("Exercise")) {
                // If a new day/exercise starts, push the current day data and reset
                if (currentDay) {
                  groupedRecommendations.push({
                    dayName: currentDay,
                    improvements: currentImprovements,
                    diet: currentDiet,
                  });
                }
                currentDay = cleanLine; // Assign new day/exercise name
                currentImprovements = [];
                currentDiet = [];
              } else if (cleanLine.toLowerCase().includes("improvements")) {
                // The next lines are improvements
                // Skip the "Improvements:" text
                const improvementText = trimmedLine
                  .replace(/Improvements:*/i, "")
                  .trim();
                if (improvementText) currentImprovements.push(improvementText);
              } else if (cleanLine.toLowerCase().includes("diet suggestions")) {
                // The next lines are diet suggestions
                // Skip the "Diet Suggestions:" text
                const dietText = trimmedLine
                  .replace(/Diet Suggestions:*/i, "")
                  .trim();
                if (dietText) currentDiet.push(dietText);
              } else {
                // Capture further content under improvements or diet section, based on what is active
                if (currentImprovements.length > 0) {
                  // If improvements are active, add to improvements
                  const cleanImprovement = cleanLine.replace("* ", "").trim();
                  if (cleanImprovement)
                    currentImprovements.push(cleanImprovement);
                } else if (currentDiet.length > 0) {
                  // If diet suggestions are active, add to diet
                  const cleanDiet = cleanLine.replace("* ", "").trim();
                  if (cleanDiet) currentDiet.push(cleanDiet);
                }
              }
            }
          });

          // Push the last day data
          if (currentDay) {
            groupedRecommendations.push({
              dayName: currentDay,
              improvements: currentImprovements,
              diet: currentDiet,
            });
          }

          // console.log("Response", response);
          // console.log("groupedRecommendations", groupedRecommendations);
          setRecommendations(groupedRecommendations);
          setPreviousPlan(currentPlan);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentPlan !== previousPlan) {
      fetchRecommendations();
    }
  }, [currentPlan, previousPlan]);

  return (
    <View className="bg-violet-200 h-screen w-screen relative p-4">
      <Text className="text-lg mt-10">AI-Generated Recommendations</Text>

      {loading ? (
        <Text className="mt-4">Loading recommendations...</Text>
      ) : (
        <ScrollView className="mt-4 mb-6">
          {recommendations.length > 0 ? (
            recommendations.map((rec, index) => (
              <View
                key={index}
                className="bg-violet-950 p-6 mb-4 rounded-lg shadow-lg"
              >
                {/* Day Name as Heading */}
                <Text className="text-orange-100 font-semibold text-2xl mb-4">
                  {rec.dayName}
                </Text>

                {/* Improvements Section */}
                {rec.improvements.length > 0 && (
                  <View className="mb-4">
                    <Text className="text-white font-semibold text-xl">
                      Improvements & Diet Suggestions:
                    </Text>
                    <View className="">
                      {rec.improvements.map((improvement, i) => (
                        <Text key={i} className="text-white text-lg">
                          {!improvement.startsWith("**") && `• ${improvement}`}
                        </Text>
                      ))}
                    </View>
                  </View>
                )}

                {/* Diet Suggestions Section */}
                {/* {rec.diet.length > 0 && (
                  <View>
                    <Text className="text-white font-semibold">Diet Suggestions:</Text>
                    <View className="ml-4">
                      {rec.diet.map((dietItem, i) => (
                        <Text key={i} className="text-white">
                          {dietItem}
                        </Text>
                      ))}
                    </View>
                  </View>
                )} */}
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

/* 
Write a function calculateExercises that calculates the average time of daily exercise hours, compares it to the target amount of daily hours and returns an object that includes the following values:

the number of days
the number of training days
the original target value
the calculated average time
boolean value describing if the target was reached
a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own.
a text value explaining the rating, you can come up with the explanations.

The daily exercise hours are given to the function as an array that contains the number of exercise hours for each day in the training period. Eg. a week with 3 hours of training on Monday, none on Tuesday, 2 hours on Wednesday, 4.5 hours on Thursday and so on would be represented by the following array:

[3, 0, 2, 4.5, 0, 3, 1]

If you call the function with parameters [3, 0, 2, 4.5, 0, 3, 1] and 2, it should return:
{ 
  periodLength: 7,
  trainingDays: 5,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.9285714285714286
}
*/

interface ExerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (dailyHours: number[], targetHours: number): ExerciseResults => {
    if (dailyHours.length < 7) {
        throw new Error("please, provide all weekdays hours.");
    }

    // Count how many daily hours are strictly less than targetHours
    const hoursGreater = dailyHours.filter(hour => hour >= targetHours).length;

    let ratingObj: { rating: number; ratingDescription: string };


    if (hoursGreater < 3) {
        ratingObj = {
            rating: 3,
            ratingDescription: "needs improvement"
        };
    } else if (hoursGreater < 5) {
        ratingObj = {
            rating: 2,
            ratingDescription: "not too bad but could be better"
        };
    } else {
        ratingObj = {
            rating: 1,
            ratingDescription: "going great!"
        };
    }

    const average = dailyHours.reduce((sum, hour) => sum + hour, 0) / dailyHours.length;

    return {
        periodLength: dailyHours.length,
        trainingDays: dailyHours.filter(hour => hour > 0).length,
        success: average >= targetHours,
        rating: ratingObj.rating,
        ratingDescription: ratingObj.ratingDescription,
        target: targetHours,
        average: average
    };
}



try {
    console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
} catch (error: unknown) {
    let errorMsg = "Something went wrong";
    if (error instanceof Error) {
        errorMsg += error.message;
    }
    console.log(errorMsg);
}
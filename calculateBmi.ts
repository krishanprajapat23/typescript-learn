enum BmiCategory {
    SevereThinness = "Severe Thinness",
    ModerateThinness = "Moderate Thinness",
    MildThinness = "Mild Thinness",
    Normal = "Normal",
    Overweight = "Overweight",
    Obese = "Obese"
}


const calculateBmi = (height: number, weight: number): BmiCategory => {
    if (height <= 0 || weight <= 0) {
        throw new Error("Height and weight must be positive numbers");
    }

    const BMI = (weight / (height * height)) * 10000;

    if (BMI < 16) return BmiCategory.SevereThinness;
    if (BMI < 17) return BmiCategory.ModerateThinness;
    if (BMI < 18.5) return BmiCategory.MildThinness;
    if (BMI < 25) return BmiCategory.Normal;
    if (BMI < 30) return BmiCategory.Overweight;
    return BmiCategory.Obese;

}



try {
    console.log(calculateBmi(65, 22));
} catch (error: unknown) {
    let errorMsg = "Something went wrong";
    if (error instanceof Error) {
        errorMsg += error.message;
    }
    console.log(errorMsg);
}
import pandas as pd

# Create a dictionary for the meal plan
meal_plan = {
    "Meal": ["Pre-Workout", "Breakfast", "Breakfast", "Breakfast", "Breakfast", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch", "Pre-Workout Snack", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner"],
    "Food Item": ["Black Coffee", "Idly", "Curry Leaves Powder", "Almonds", "Low-Fat Milk with Tea/Coffee", "Cooked White Rice", "Green Vegetables (e.g. spinach)", "Cooked Dal (Lentils)", "Tofu", "Olive Oil for Cooking", "Banana", "Cooked White Rice", "Green Vegetables (e.g. spinach)", "Cooked Dal (Lentils)", "Tofu", "Olive Oil for Cooking", "2 Whole Eggs"],
    "Quantity": ["150 ml", "150 g", "5 g", "8 g", "100 ml", "200 g", "150 g", "150 g", "100 g", "5 g", "80 g", "150 g", "100 g", "150 g", "50 g", "5 g", "2"],
    "Kcal": [0, 200, 0, 47, 45, 260, 30, 174, 130, 45, 74, 195, 20, 174, 65, 45, 140],
    "Protein (g)": [0, 6, 0, 1.68, 4, 6, 3, 13.5, 14, 0, 0.8, 4, 2, 13.5, 7, 0, 12],
    "Carbs (g)": [0, 38, 0, 1.6, 4, 50, 6, 30, 4, 0, 15.2, 44, 4, 30, 2, 0, 1],
    "Fat (g)": [0, 1, 0, 3.2, 1, 0, 0, 0.6, 8, 5, 0, 0, 0, 0.6, 4, 5, 10]
}

# Create a DataFrame
df = pd.DataFrame(meal_plan)

# Add the totals row manually
totals = {
    "Meal": ["Daily Totals"],
    "Food Item": ["Total"],
    "Quantity": [""],
    "Kcal": [1920],
    "Protein (g)": [109.1],
    "Carbs (g)": [229.8],
    "Fat (g)": [38.4]
}
totals_df = pd.DataFrame(totals)

# Concatenate the two DataFrames
df = pd.concat([df, totals_df], ignore_index=True)

# Save the DataFrame to an Excel file
df.to_excel("meal_plan.xlsx", index=False)

print("Meal plan Excel file created successfully!")

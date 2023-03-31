const recipes = [
    {recipe_name: 'Fresh Cheddar Burgers'},
    {recipe_name: 'Spagetti'},
    {recipe_name: 'Dill Cream Salmon'}
] 


const ingredients = [
    {ingredient_name: 'Brocholli', ingredient_unit: 'lbs'},
    {ingredient_name: 'Pesto', ingredient_unit: 'lbs'},
    {ingredient_name: 'pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'Lemon', ingredient_unit: 'lbs'},
    {ingredient_name: 'Chicken', ingredient_unit: 'lbs'},
    {ingredient_name: 'Salmon', ingredient_unit: 'lbs'},
] 

const step_ingredients = [
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1.5},
    {step_id: 3, ingredient_id: 3, quantity: 2},

    {step_id: 5, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 5, quantity: 0.4},

    {step_id: 7, ingredient_id: 6, quantity: 1},
]

const steps = [
    {step_text: 'heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'add broc', step_number: 2, recipe_id: 1},
    {step_text: 'add pesto', step_number: 3, recipe_id: 1},

    {step_text: 'heat oven', step_number: 1, recipe_id: 2},
    {step_text: 'put chicken in oven', step_number: 2, recipe_id: 2},
    {step_text: 'set oven to 500 degrees', step_number: 3, recipe_id: 2},

    {step_text: 'fish the salmon', step_number: 1, recipe_id: 3},
    {step_text: 'cook the salmon', step_number: 2, recipe_id: 3},
] 

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}
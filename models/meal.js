class Meal{
    constructor(
        id,
        categoryId,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingerdients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
        )
        {
            this.id = id;
            this.categoryId = categoryId;
            this.title = title;
            this.affordability =affordability;
            this.categoryId= categoryId;
            this.complexity = complexity;
            this.categoryId= categoryId;
            this.imageUrl = imageUrl;
            this.duration= duration;
            this.ingerdients =ingerdients;
            this.steps = steps;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVegetarian= isVegetarian;
            this.isLactoseFree = isLactoseFree;
        }
}

export default Meal;
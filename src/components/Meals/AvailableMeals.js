import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import styles from "./availableMeals.module.css"
import { MealItem } from "./MealItem/MealItem";


export const AvailableMeals = () => {
  const [ meals, setMeals ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ httpError, setHttpError ] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch("https://food-app-cbada-default-rtdb.europe-west1.firebasedatabase.app/meals.json")

      if (!response.ok) {
        throw new Error("Something went wrong !")

      }

      const data = await response.json()
      const loadedMeals = []

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[ key ].name,
          description: data[ key ].description,
          price: data[ key ].price
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) {
    return <section className={styles.mealsLoading}> <p>Loading...</p></section >
  }

  if (httpError) {
    return <section className={styles.mealsError}><p>{httpError}</p></section>
  }

  const mealsList = meals.map(meal =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}>
      {meal.name}
    </MealItem>)

  return (
    <section className={styles.meals}>
      <ul>
        <Card>
          {mealsList}
        </Card>
      </ul>
    </section>
  )
}

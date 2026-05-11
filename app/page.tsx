"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";
import { recipes } from "@/data/recipes";

export default function RecipePage() {
  const [category, setCategory] = useState("Chai");
  const [search, setSearch] = useState("");

  const filteredRecipes = useMemo(() => {
    return recipes[category]?.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, category]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <>
          <img
            className="w-[124px] h-[66px] block dark:hidden mix-blend-multiply"
            src="/chirag-logo-black-red.png"
            alt="logo"
            />

          <img
            className="w-[124px] h-[66px] hidden dark:block"
            src="/image.png"
            alt="logo"
          />
        </>
        <ThemeToggle />
      </div>

      <h1 className="text-3xl font-semibold text-center">Recipe Menu</h1>

      {/* Dropdown */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(recipes).map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search */}
      <Input
        placeholder={`Search in ${category}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Recipes */}
      <div className="grid gap-4">
        {filteredRecipes.length > 0 ? filteredRecipes?.map((recipe, index) => (
          <Card key={index} className="transition hover:shadow-lg">
            <CardHeader>
              {recipe.name.trim() && <CardTitle>{recipe.name}</CardTitle>}
              {recipe?.prepTime?.trim() && <CardDescription>Prep. Time : {recipe.prepTime}</CardDescription>}
            </CardHeader>
            <CardContent>
              <strong>Ingredients:</strong>
              <ul className="ml-2 list-disc list-inside mt-2 space-y-1">
                {recipe.ingredients.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )): 
        // <p className="border-[1px] border-zinc-800 px-4 py-2 text-center rounded-lg bg-zinc-900">No Recipes Found !</p>
        <Card>
          <CardContent>No Recipes Found !</CardContent>
        </Card>
        }
      </div>
    </div>
  );
}

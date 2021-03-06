export enum Difficulty {
  EASY = "easy",
  MEDIUM = "mediun",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await(await fetch(endpoint)).json();
};

const BASE_URL = "";

export async function getComments({ page, commentsPerPage }) {
  console.log(page, " ", commentsPerPage);
  const response = await fetch(
    `https://dummyjson.com/comments?limit=${commentsPerPage}&skip=${(page - 1) * commentsPerPage}`,
    {
      method: "GET",
    },
  );
  let newVar = await response.json();
  console.log("response", newVar);
  return newVar;
}

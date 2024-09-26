export async function fetchComments() {
    const response = await fetch("https://dummyjson.com/comments?limit=0", {method: "GET"});
    const data = await response.json();
    return data.comments;
}

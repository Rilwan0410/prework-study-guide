const topics = ["HTML", "CSS", "Git", "JavaScript"];
const card = document.querySelectorAll(".card");
const notes = document.querySelectorAll("ul");

topics.forEach(topic => {
  console.log(topic)
})


notes.forEach((note, index) => {
  let newNote = document.createElement("li");
  newNote.innerText = `Enter ${topics[index]} Your Notes Here`;

  note.replaceChildren(newNote);
});

for (let i = 0; i < card.length; i++) {
  card[i].querySelector("h2").innerText = topics[i];
}

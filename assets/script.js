const topics = ["HTML", "CSS", "Git", "JavaScript"];
const card = document.querySelectorAll(".card");
const notes = document.querySelectorAll("ul");

function listTopics() {
  console.log("Here are the topics we learned through Prework :");
  topics.forEach((topic) => {
    console.log(topic);
  });
  console.log("Which topic should we study first?");

  console.log(`Let's study ${topics[Math.floor(Math.random() * topics.length)]}!`);
}


notes.forEach((note, index) => {
  let newNote = document.createElement("li");
  newNote.innerText = `Enter ${topics[index]} Your Notes Here`;

  note.replaceChildren(newNote);
});

for (let i = 0; i < card.length; i++) {
  card[i].querySelector("h2").innerText = topics[i];
}

listTopics();

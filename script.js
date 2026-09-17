const books = [
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description: "A collection of twelve short stories featuring the famous detective.",
    image: "The Adventures of Sherlock Holmes.jpg",
     pdf:"https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
  },
  {
    title: "The Time Machine",
    author: "H. G. Wells",
    description: "A scientist builds a machine to travel through time in this sci-fi classic.",
    image: "https://covers.openlibrary.org/b/id/7222247-L.jpg",
    pdf: "https://www.gutenberg.org/files/35/35-h/35-h.htm"
  },
  
      {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description: "A historical novel set in London and Paris during the French Revolution.",
    image: "A Tale of Two Cities.webp",
    pdf: "https://www.gutenberg.org/files/98/98-h/98-h.htm"
  },
  {
  title: "Wuthering Heights",
  author: "Emily Brontë",
  description: "A haunting story of passion and revenge set on the moors.",
  image: "https://covers.openlibrary.org/b/id/8226196-L.jpg",
  pdf: "https://www.gutenberg.org/files/768/768-h/768-h.htm"
},
{
  title: "The Picture of Dorian Gray",
  author: "Oscar Wilde",
  description: "A dark tale about vanity, morality, and eternal youth.",
  image: "https://covers.openlibrary.org/b/id/8232276-L.jpg",
  pdf: "https://www.gutenberg.org/files/174/174-h/174-h.htm"
},
{
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  description: "A powerful narrative of a woman’s moral and spiritual journey.",
  image: "https://covers.openlibrary.org/b/id/8232481-L.jpg",
  pdf: "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm"
},
{
  title: "A Tale of Two Cities",
  author: "Charles Dickens",
  description: "A gripping historical novel set during the French Revolution.",
  image: "https://covers.openlibrary.org/b/id/8231940-L.jpg",
  pdf: "https://www.gutenberg.org/files/98/98-h/98-h.htm"
},
{
  title: "Les Misérables",
  author: "Victor Hugo",
  description: "An epic story of justice, love, and revolution in 19th-century France.",
  image: "https://covers.openlibrary.org/b/id/8232117-L.jpg",
  pdf: "https://www.gutenberg.org/files/135/135-h/135-h.htm"
},
{
  title: "The Call of the Wild",
  author: "Jack London",
  description: "The survival story of a sled dog in the Yukon wilderness.",
  image: "https://covers.openlibrary.org/b/id/7222248-L.jpg",
  pdf: "https://www.gutenberg.org/files/215/215-h/215-h.htm"
},
  
      
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel that explores manners, upbringing, and marriage.",
        image: "https://covers.openlibrary.org/b/id/8225261-L.jpg"
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        description: "An exploration of human history from the Stone Age to the modern era.",
        image: "https://covers.openlibrary.org/b/id/9352731-L.jpg"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A powerful story of racial injustice and childhood in the American South.",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "A novel about pursuing one's dreams by following what the heart desires.",
        image: "https://covers.openlibrary.org/b/id/8231990-L.jpg"
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The first book in the magical Harry Potter series.",
        image: "https://covers.openlibrary.org/b/id/7884866-L.jpg"
      },
      
        {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description: "A historical novel set in London and Paris during the French Revolution.",
    image: "A Tale of Two Cities.webp",
    pdf: "https://www.gutenberg.org/files/98/98-h/98-h.htm"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "A young scientist creates a sentient creature in this gothic novel.",
    image: "https://covers.openlibrary.org/b/id/8486196-L.jpg",
    pdf: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
  },
  {
    title: "The Call of the Wild",
    author: "Jack London",
    description: "A powerful tale of a dog’s survival and transformation in the Yukon.",
    image: "https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg",
    pdf: "https://www.gutenberg.org/ebooks/215"
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    description: "Follows the lives of the four March sisters as they grow into womanhood.",
    image: "https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg",
    pdf: "https://www.gutenberg.org/ebooks/514"
  },
  {
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    description: "The classic tales of Mowgli, Baloo, Bagheera, and the jungle animals.",
    image: "https://www.gutenberg.org/cache/epub/236/pg236.cover.medium.jpg",
    pdf: "https://www.gutenberg.org/ebooks/236"
  },
  {
    title: "Anne of Green Gables",
    author: "Lucy Maud Montgomery",
    description: "The heartwarming story of a spirited orphan girl adopted by mistake.",
    image: "https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg",
    pdf: "https://www.gutenberg.org/ebooks/45"
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description: "A collection of twelve short stories featuring the famous detective.",
    image: "The Adventures of Sherlock Holmes.jpg",
     pdf:"https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    description: "The classic vampire novel that defined the genre.",
    image: "https://covers.openlibrary.org/b/id/8081884-L.jpg",
    pdf: "https://www.gutenberg.org/files/345/345-h/345-h.htm"
  },
  {
    title: "Alice’s Adventures in Wonderland",
    author: "Lewis Carroll",
    description: "A fantastical journey through a whimsical underground world.",
    image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
    pdf: "https://www.gutenberg.org/files/11/11-h/11-h.htm"
  },
  {
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  description: "A psychological exploration of morality, guilt, and redemption.",
  image: "https://covers.openlibrary.org/b/id/8231993-L.jpg",
  pdf: "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm"
},
{
  title: "The Time Machine",
  author: "H.G. Wells",
  description: "A science fiction novella about time travel and dystopian futures.",
  image: "https://covers.openlibrary.org/b/id/10342599-L.jpg",
  pdf: "https://www.gutenberg.org/files/35/35-h/35-h.htm"
},
{
  title: "Meditations",
  author: "Marcus Aurelius",
  description: "Timeless Stoic philosophy from a Roman emperor's private notes.",
  image: "https://covers.openlibrary.org/b/id/8091011-L.jpg",
  pdf: "https://classics.mit.edu/Antoninus/meditations.html"
},
  
];

const bookListEl = document.getElementById("bookList");
const bookDetailsEl = document.getElementById("bookDetails");
const detailTitle = document.getElementById("detailTitle");
const detailAuthor = document.getElementById("detailAuthor");
const detailDescription = document.getElementById("detailDescription");
const detailImage = document.getElementById("detailImage");

// Create Read Now Button
const readNowBtn = document.createElement("a");
readNowBtn.className = "read-now";
readNowBtn.textContent = "📖 Read Now";
readNowBtn.target = "_blank";
bookDetailsEl.appendChild(readNowBtn);

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.author}</p>
  `;
  div.onclick = () => showDetails(book);
  bookListEl.appendChild(div);
});

function showDetails(book) {
  detailTitle.textContent = book.title;
  detailAuthor.textContent = "Author: " + book.author;
  detailDescription.textContent = book.description;
  detailImage.src = book.image;
  readNowBtn.href = book.pdf;
  bookDetailsEl.style.display = "block";
  window.scrollTo({
    top: bookDetailsEl.offsetTop - 20,
    behavior: 'smooth'
  });
}

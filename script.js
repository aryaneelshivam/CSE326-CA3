document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(
    'button[aria-label="Toggle navigation"]'
  );
  const mobileMenu = document.querySelector('ul[role="menubar"]');

  mobileMenuButton.addEventListener("click", function () {
    const isExpanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true";
    mobileMenuButton.setAttribute("aria-expanded", !isExpanded);

    mobileMenu.classList.toggle("invisible");
    mobileMenu.classList.toggle("opacity-0");

    // Optional: Prevent scrolling when menu is open
    document.body.classList.toggle("overflow-hidden");
  });
});

// Sample data for the cards
// Sample data for the cards
const cardsData = [
  {
    title: "200+ NoCode Tools to Try and Use",
    content:
      "Gumroad is an online platform that enables creators to sell digital products such as ebooks, courses, art, music, and software directly to customers. It simplifies the process of selling by handling payments, digital delivery, and customer management, making it easy for independent creators to monetize their work without needing a traditional storefront or intermediary.",
    imageUrl: "https://youtu.be/lwnTq69Medg?si=1KRNL87gOAM_IzR2", // YouTube video link
  },

  {
    title: "Start a NoCode SaaS Business",
    content:
      "Gumroad is an online platform that enables creators to sell digital products such as ebooks, courses, art, music, and software directly to customers. It simplifies the process of selling by handling payments, digital delivery, and customer management, making it easy for independent creators to monetize their work without needing a traditional storefront or intermediary.",
    imageUrl: "https://youtu.be/qlibMfRlWf4?si=u_vVdU_T5qK4L9SV", // Static image link
  },

  {
    title: "Connecting Multiple Automation Tools",
    content:
      "Gumroad is an online platform that enables creators to sell digital products such as ebooks, courses, art, music, and software directly to customers. It simplifies the process of selling by handling payments, digital delivery, and customer management, making it easy for independent creators to monetize their work without needing a traditional storefront or intermediary.",
    imageUrl: "https://youtu.be/5kJv254sebQ?si=64NNGcSs4HJK6T7k", // Static image link
  },

  {
    title: "Building an Automated Micro SaaS Using NoCode",
    content:
      "Gumroad is an online platform that enables creators to sell digital products such as ebooks, courses, art, music, and software directly to customers. It simplifies the process of selling by handling payments, digital delivery, and customer management, making it easy for independent creators to monetize their work without needing a traditional storefront or intermediary.",
    imageUrl: "https://youtu.be/pbD0-o10EgM?si=2mLw6Kper0mTya09", // Static image link
  },
];

// Function to convert YouTube URL to embed URL
function getYoutubeEmbedUrl(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? `https://www.youtube.com/embed/${match[2]}` : null;
}

// Function to create a single card
function createCard(cardData) {
  const card = document.createElement("div");
  card.className = "card";

  const youtubeEmbedUrl = getYoutubeEmbedUrl(cardData.imageUrl);

  const mediaContent = youtubeEmbedUrl
    ? `<iframe class="card-video" src="${youtubeEmbedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    : `<img src="${cardData.imageUrl}" alt="${cardData.title}" class="card-image">`;

  card.innerHTML = `
      ${mediaContent}
      <div class="card-content">
        <h2 class="card-title">${cardData.title}</h2>
        <p class="card-text">${cardData.content}</p>
        <a href="${cardData.imageUrl}" class="card-button">Watch video</a>
      </div>
    `;

  return card;
}

// Function to render all cards
function renderCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.className = "card-container";

  cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);
  });
}

// Call the renderCards function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderCards);

// Sample blog post data
const blogPosts = [
  {
    title: "10 Must-Try No-Code Tools for Aspiring Entrepreneurs",
    content:
      "If you’re an aspiring entrepreneur looking to bring your ideas to life without getting bogged down in technical complexities, this article is for you. We explore a curated list of the top ten no-code tools that can help you kickstart your entrepreneurial journey. From intuitive website builders to versatile app development platforms, discover how these user-friendly resources can streamline your workflow and empower you to create professional-grade projects. Each tool is accompanied by a detailed overview, including its key features, pricing plans, and tips on how to leverage it for your specific needs. With the right tools in your arsenal, you can focus more on your vision and less on the coding hurdles.",
    date: "2024-03-15",
    category: "Programming",
    readTime: "15 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/article/no-code-101-relational-database",
  },
  {
    title: "Building Your First App: A Step-by-Step No-Code Guide",
    content:
      "Have you ever dreamed of creating your own app but felt overwhelmed by the coding requirements? This comprehensive guide walks you through the entire process of building your first app using no-code platforms, making it accessible to everyone. We’ll cover everything from brainstorming your app concept and outlining its features to selecting the best no-code tool for your needs. With easy-to-follow steps, screenshots, and tips to avoid common pitfalls, you’ll be equipped to transform your idea into a functional app. Whether you’re aiming to solve a problem or provide a service, this guide will empower you to navigate the world of no-code development with confidence.",
    date: "2024-03-10",
    category: "NoCode Database",
    readTime: "10 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/article/no-code-101-records",
  },
  {
    title: "No-Code vs. Traditional Coding: Which is Right for You?",
    content:
      "In a world where technology is rapidly evolving, many creators find themselves torn between using no-code solutions and traditional coding methods. This article dives deep into the debate, examining the advantages and disadvantages of both approaches. We’ll discuss scenarios where no-code is ideal, such as rapid prototyping and small business solutions, versus situations where traditional coding may be more suitable, like large-scale applications requiring custom features. By comparing factors like learning curves, development speed, and project complexity, we aim to help you determine which path aligns best with your skills, goals, and project requirements. Ultimately, understanding the differences can empower you to make informed decisions that best suit your unique needs.",
    date: "2024-03-05",
    category: "Web Development",
    readTime: "6 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/academy",
  },
  {
    title: "How to Automate Your Workflow with No-Code Solutions",
    content:
      "Are repetitive tasks slowing you down and hindering your productivity? This article reveals how to enhance your efficiency by automating your workflow using no-code tools. We’ll explore various no-code platforms that specialize in automation, providing practical strategies for streamlining processes such as data entry, email marketing, and project management. Through detailed examples and case studies, you’ll learn how to implement automation in your daily tasks, allowing you to focus on more critical aspects of your work. With no-code automation, you can minimize manual effort, reduce errors, and ultimately free up your time for creativity and innovation.",
    date: "2024-03-15",
    category: "Programming",
    readTime: "5 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/academy",
  },
  {
    title: "Creating Stunning Websites Without Coding: Top Platforms Reviewed",
    content:
      "Building a beautiful website doesn’t have to involve endless hours of coding and design work. In this blog post, we review the best no-code website builders available today, comparing their features, pricing, and ease of use. Each platform is analyzed based on criteria such as customization options, templates, and customer support, helping you find the perfect fit for your needs. Whether you’re launching a personal blog, an online store, or a professional portfolio, our in-depth comparisons will guide you in choosing the right tool to create a stunning online presence that reflects your brand. Discover how you can achieve a polished, professional look without needing any technical skills.",
    date: "2024-03-10",
    category: "Web Design",
    readTime: "4 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/academy",
  },
  {
    title: "From Idea to Reality: How No-Code is Revolutionizing Innovation",
    content:
      "The no-code movement is not just a trend; it’s a game-changer that is transforming the landscape of innovation. In this article, we explore how no-code solutions are empowering startups and creators to bring their ideas to life without the barriers traditionally associated with coding. We’ll highlight success stories of individuals and companies that have leveraged no-code tools to launch products, streamline processes, and drive growth. Additionally, we’ll discuss the benefits of democratizing technology and how it opens up opportunities for diverse voices and ideas to flourish. By the end of this article, you’ll gain insights into how no-code is reshaping the future of innovation and what it means for aspiring creators everywhere.",
    date: "2024-03-05",
    category: "Web Development",
    readTime: "6 min read",
    Sourced: "nocode.tech",
    linkUrl: "https://www.nocode.tech/academy",
  },
];

function createBlogCard(post) {
  const card = document.createElement("div");
  card.className = "blog-card";
  card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <div class="metadata">
          <span class="category">${post.category}</span>
          <span class="date">${post.date}</span>
          <span class="read-time">${post.readTime}</span>
          <span class="read-time">${post.Sourced}</span>
          <a href="${blogPosts.imageUrl}" class="card-button">Read Blog Post</a>
      </div>
  `;
  return card;
}

function renderBlogPosts() {
  const blogPostsContainer = document.getElementById("blog-posts");
  blogPosts.forEach((post) => {
    const card = createBlogCard(post);
    blogPostsContainer.appendChild(card);
  });
}

// Render blog posts when the page loads
window.addEventListener("load", renderBlogPosts);

// Get modal element
var modal = document.getElementById("contactModal");

// Get button that opens the modal
var popupBtn = document.getElementById("popupBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
popupBtn.onclick = function () {
  modal.classList.add("show");
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};

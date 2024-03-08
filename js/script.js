let ideas = [
  {
    id: 0,
    name: "Full Stack E-commerce",
    category: "web",
    link: "https://www.youtube.com/watch?v=y99YgaQjgx4",
    img: "imgs/w1.jpeg",
  },
  {
    id: 1,
    name: "Full Stack Social App",
    category: "web",
    link: "https://www.youtube.com/watch?v=1RHDhtbqo94",
    img: "imgs/w2.jpeg",
  },
  {
    id: 2,
    name: "Full Stack Task Management",
    category: "web",
    link: "https://www.youtube.com/watch?app=desktop&v=m4MDt7UUu1w",
    img: "imgs/w3.jpeg",
  },
  {
    id: 3,
    name: "Full Stack E-Learning",
    category: "web",
    link: "https://www.youtube.com/watch?v=aK9Y-0AsbA4&list=PLSJxovi1IyDGkHNqlrPSU2kXu1aophIkG",
    img: "imgs/w4.png",
  },
  {
    id: 4,
    name: "Fitness App",
    category: "mobile",
    link: "https://www.youtube.com/watch?v=xTZxFKNwXD0",
    img: "imgs/m1.jpeg",
  },
  {
    id: 5,
    name: "Finance App",
    category: "mobile",
    link: "https://www.youtube.com/watch?app=desktop&v=9-QFt-cWZV8",
    img: "imgs/m2.jpeg",
  },
  {
    id: 6,
    name: "Event Plans App",
    category: "mobile",
    link: "https://www.youtube.com/watch?app=desktop&v=se4XMGSASJY",
    img: "imgs/m3.jpeg",
  },
  {
    id: 7,
    name: "Course App",
    category: "mobile",
    link: "https://www.youtube.com/watch?app=desktop&v=_LhSRbekY5k",
    img: "imgs/m4.jpeg",
  },
  {
    id: 8,
    name: "Smart Home ",
    category: "arduino",
    link: "https://www.youtube.com/watch?v=l1d2XLwCoFU",
    img: "imgs/a1.png",
  },
  {
    id: 9,
    name: "Weather Station",
    category: "arduino",
    link: "https://www.youtube.com/watch?app=desktop&v=3tu93lpeoAs",
    img: "imgs/a2.jpeg",
  },
  {
    id: 10,
    name: "Control Robot",
    category: "arduino",
    link: "https://www.youtube.com/watch?app=desktop&v=rejZmqRrKMc&t=194s",
    img: "imgs/a3.jpeg",
  },
  {
    id: 11,
    name: "Patient Health Monitor",
    category: "arduino",
    link: "https://www.youtube.com/watch?v=1LqBvkHTJXU",
    img: "imgs/a4.jpeg",
  },
  {
    id: 12,
    name: "Iot Patient Health Monitor",
    category: "ai",
    link: "https://www.youtube.com/watch?app=desktop&v=wG0TERM6og4",
    img: "imgs/p1.jpeg",
  },
  {
    id: 13,
    name: "Cancer Prediction",
    category: "ai",
    link: "https://www.youtube.com/watch?v=C04flpZJfes",
    img: "imgs/p2.jpeg",
  },
];
function renderIdeas() {
  let projects = document.getElementById("proj");
  projects.innerHTML = "";
  ideas.forEach((idea) => {
    projects.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 all ${idea.category} item"  key="${idea.id}" >
          <div class="project">
            <img src="${idea.img}" alt="${idea.name}" class="img-fluid"/>

           
              <button type="button" class="p-2 btn btn-primary btn-md btn-rounded w-25 my-3">
<a href="${idea.link}" target="_blank" class="text-white">
Details</a>
            
                
              </button>
            
            <p class="bg-danger text-center p-2 w-100 text-white">${idea.name}</p>
          </div>
        </div>`;
  });
}
renderIdeas();

let tabs = document.querySelectorAll(".tab");
let projects = document.querySelectorAll(".item");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
        setTimeout(()=>{
   tab.classList.remove("active");
        },2000)
   
    });
   e.target.classList.add("active");
   let category = e.target.dataset.category;
projects.forEach((project) => {
    project.style.display = "none";
});

document.querySelectorAll(category).forEach((categ) => {
    categ.style.display = "block";
});

  });
});

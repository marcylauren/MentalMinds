let profiles = [
  {
    name: "Ameira",
    img: "Ameira.jpg",
    desc: ""
  },
  {
    name: "Mariam",
    img: "hhh.jpg",
    desc: ""
  },
  {
    name: "Andrew",
    img: "Andrew.jpeg",
    desc: ""
  }
];

let profileSection = document.querySelector(".profiles");

profiles.forEach(profile => {
  let figure = document.createElement("figure");
  figure.classList.add("profile");

  let img = document.createElement("img");
  img.classList.add("profile-picture");
  img.src = profile.img;

  let figCaption = document.createElement("figcaption");
  figCaption.classList.add("profile-text");

  let profileName = document.createElement("h1");
  profileName.classList.add("profile-name");
  profileName.append(document.createTextNode(profile.name));

  let profileDesc = document.createElement("p");
  profileDesc.classList.add("profile-paragraph");
  profileDesc.append(document.createTextNode(profile.desc));

  figCaption.append(profileName, profileDesc);

  figure.append(img, figCaption);

  profileSection.append(figure);
})

class LinkShortener {
    title;
    container;
    actionContainer;
    inputLink;
    btnSubmit;
    result;
    label;

  
    constructor() {
      this.container = document.createElement("div");

      this.actionContainer = document.createElement("div");
      this.actionContainer.classList.add('form');
 
      this.title = document.createElement("h2")
      this.title.innerHTML = "Link Shortener"
      this.title.classList.add('title');

      this.label = document.createElement("label")
      this.label.innerHTML = "Enter a Link: "
      this.label.classList.add('label');


      this.inputLink = document.createElement("input");
      this.inputLink.classList.add('text');

      this.btnSubmit = document.createElement("button");
      this.btnSubmit.innerHTML = "Get";
      this.btnSubmit.addEventListener("click", this.handleShorten);
  
      this.result = document.createElement("div");
      this.container.appendChild(this.title);
      this.container.appendChild(this.actionContainer);
      this.actionContainer.appendChild(this.label);
      this.actionContainer.appendChild(this.inputLink);
      this.actionContainer.appendChild(this.btnSubmit);
      this.container.appendChild(this.result);
      this.result.classList.add('title');
    }
  
    handleShorten = () => {
      fetch(`https://api.shrtco.de/v2/shorten?url=${this.inputLink.value}`)
        .then((resJson) => resJson.json())
        .then((res) => {
          this.result.innerHTML = res.result.full_short_link;
        });
    };
  }
  
  let linkShortener = new LinkShortener();
  const app = document.querySelector("#app");
  app.appendChild(linkShortener.container);
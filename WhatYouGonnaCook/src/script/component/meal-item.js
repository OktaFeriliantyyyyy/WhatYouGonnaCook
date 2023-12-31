class foodItems extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set meal(food) {
        this._meal = food;
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
            <style> * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
            :host {
                background: white;
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .meal-pic {
                width: 100%;
                max-height: 500px;
                object-fit: cover;
                object-position: center;
            }
            .meal-info {
                padding: 24px;
                background:#FFBF00;
            }
            .meal-info > h2 {
                color:#540375;
            }
            .meal-info > h5 {
                color: white;
            }
            .meal-info > h3 {
                color:#540375;
            }
            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
            a {
                color: white;
            }
            @media screen and (min-width: 600px){
                :host {
                    display: flex;
                    flex-direction : row;
                }
            }
            </style>
            <img class="meal-pic" src="${this._meal.strMealThumb}" alt="Picture">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <h5>${this._meal.strArea}</h5>
                <p>${this._meal.strInstructions}</p>
                <a href= "${this._meal.strSource}">More than this...</a>
                <h3>Let's Try, and make yours!</h3>
                <a href= "${this._meal.strYoutube}">Watch receipe on Youtube!</a>
            </div>`;
    }
}
customElements.define("meal-item", foodItems);

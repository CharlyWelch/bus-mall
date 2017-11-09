class Product { //eslint-disable-line
    constructor(name, src, displayed, clicked) {
        this.name = name;
        this.src = src;
        this.displayed = displayed || 0;
        this.clicked = clicked || 0;
    }
    wasDisplayed() {
        this.displayed += 1;
    }
    wasClicked() {
        this.clicked += 1;
    }
    render() {
        const ele = document.createElement('img');
        ele.src = this.src;
        ele.name = this.name;
        return ele;
    }
}





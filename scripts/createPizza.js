class Pizza {
    constructor () {
        this.dough = '';
        this.meat = '';
        this.veges = '';
        this.sause = '';
    }
    addIngredient (field, ingredient){

        if (field === `meat` && this.meat) {
            this.meat1 = this.meat;
        }  else if (field === `veges` && this.veges){
            this.veges1 = this.veges;
        }   
        this[field] = ingredient;
    }

    deleteIngredient(field) {
        this[field] = '';
    }
};

export default new Pizza();
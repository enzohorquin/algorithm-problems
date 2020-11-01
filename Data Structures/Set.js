
//add, clear, length
class Set {
    constructor(){
        this.set = [];
    }

    has(item){
        return this.set.indexOf(item) !== -1;
    }

    add(item){
        if(!this.has(item)){
            this.set.push(item);
            return true;
        }
        return false;
    }
    clear(){
        this.set = [];
    }
    remove(item){
        if(this.has(item)){
            const index = this.set.indexOf(item);
            this.set = [...this.set.splice(0, index), ...this.set.splice(index + 1)];
            return true;
        }
        return false;
    }            

}
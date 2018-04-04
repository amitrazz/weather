class Weather{
    cosnstructor(city,state){
        this.api = "a7d5e0e4a8a3a1df";
        this.city = city;
        this.state = state;
        
    }
    //fetch wether form api
    async getWether(){
        const response = await fetch (`http://api.wunderground.com/api/${this.api}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();
        return responseData.current_observation;
    }
    //change location
    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
}
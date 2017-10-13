const URL = "http://api.icndb.com/jokes/random";
class JokeFacade {

    getJokeViaCallback = (callback) => {
        fetch(URL)
          .then(function (res) {
            return res.json();
          }).then(function(data){
             let joke = data.value.joke
             if (callback) {
              callback(joke);
            }
          });  
      }
      getJokeAndNotify = () => {
        fetch(URL)
          .then(function (res) {
            return res.json();
          }).then((data) => {
            let joke = data.value.joke
            if (this.handler) {
              this.handler(joke);
            };
          });
      }
      setObserver(handler) {
        this.handler = handler;
      }
      getJokeContiniuesly =(time) =>{
        this.timerId = setInterval(this.getJokeAndNotify,time);
    }
    stopIntervalFetching =()=>{
      if(this.timerId){
        clearInterval(this.timerId);
      }
    }
    async fetchAsync() {
        const response = await fetch(URL);
        const res =  await response.json();
        return res.value.joke;
    }
    
     
        
    
}
export default new JokeFacade();


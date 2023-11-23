<template>
<!--   
      <nav>
      <router-link to="/">sign up</router-link> |
      <router-link to="/about">log in</router-link>
  
    </nav>  -->
  
     <div class="ground">
       <div class="header">
    
         <ul>
       <span><li><h1>Weblify <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg></span>
  
        </h1></li></span>
       
       <button><li>Log In</li></button>  |
      <span><li><button>Sign Up</button></li></span>
    
           <!-- <button><li>Log In</li></button> 
            <span><li><button>Sign Up</button></li></span>  -->
      </ul>
    </div>
    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg></span>
  
    <div class="first">
  
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
  
      <h2>Effortless URL Shortening For <span>Everyone</span></h2>
  
  
      <p>Effortlessly create short links for social media, <br> marketing and more</p>
  
  
      <input v-model="longUrl" type="text" name="text"  required placeholder="Enter Your Long LInk Here">

      <button @click="shortenUrl">Shorten Url
    
</button>
<!-- <div v-if="copySuccess" class="copy-success-message">Shortened URL copied!</div> -->
 <div class="message">
<p v-if="loading">Shortening...</p>
   <p v-else-if="shortenedUrl">Shortened URL: {{ shortenedUrl }}</p>
  </div>
      <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg></h1>
  
  
      <h5>By using our url shortener you agree to our terms and conditions</h5>
     
    </div>
  
  </div>
  
  <div class="this">
    <h2>Why <span>Weblify</span> ?</h2>
  </div>
  
    <MainComponent />
    <FaqComponent />
    <FooterComponent />
    <router-view/>
   
  </template>
  <!-- 
    <MainComponents />  -->
    <script>
    import ScrollReveal from 'scrollreveal';
    import MainComponent from './components/Main.vue';
    import FaqComponent from './components/Faq.vue';
    import FooterComponent from './components/Footer.vue';
    
    export default {
      components: {
        MainComponent,
        FaqComponent,
        FooterComponent,
      },
      data() {
        return {
          longUrl: '',
          shortenedUrl: null,
          copySuccess: false,
          loading: false,
        };
      },
      mounted() {
        // Call the method to initiate ScrollReveal after the component is mounted
        this.initiateScrollReveal();
      },
      methods: {
        shortenUrl() {
          const apiUrl = "https://weblify.onrender.com/v1/urls/public";
    
          this.loading = true;
    
          const requestData = {
            originalUrl: this.longUrl
          };
    
          console.log('Long URL:', this.longUrl);
    
          fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              if (data.success && data.data.shortenedUrl) {
                this.shortenedUrl = data.data.shortenedUrl;
                console.log('Shortened URL:', this.shortenedUrl);
              } else {
                console.error('Shortened URL not found in the response:', data);
              }
            })
            .catch((error) => {
              this.shortenedUrl = null;
              console.error('Error shortening URL:', error);
            })
            .finally(() => {
              this.loading = false;
            });
        },
    
        initiateScrollReveal() {
          const sr = ScrollReveal();
          sr.reveal('.ground', {
            // specify options here
            duration: 2000,
            origin: 'top',
            distance: '100px',
            // other options...
          });
        },
      },
    };
    </script>
   
  
  
  
  <style scoped>
  *{
    margin:0;
    padding:0;
  }
  body{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    /* background-color: rgb(182, 182, 192); */
    letter-spacing: 1px;
  }
  .header span svg{
    color:white;
    width:40px;
    height:40px;
    /* position:absolute; */
    right:83%;
    bottom:90%;
  
  }
  svg{
    position:absolute;
    width:100px;
    height:100px;
    margin-left:18%;
    color:rgb(121, 121, 143);
    background:transparent;
    
  }
  span svg{
    position:absolute;
    margin-left:80%;
    padding-top:30px;
  }
  .message p{
    color:rgb(32, 32, 184);
  }
  .ground{
    background-color: rgb(182, 182, 192);
  }
  .header{
    background-color: rgb(32, 32, 184);
    color:white;
    position: static;
    height:50px;
    padding-top:25px;
  }
  .header ul{
    display:flex;
    list-style: none;
  }
  .header span li{
    padding-left:40px;
  } 
   .header ul button{
    margin-left:60%;
    background-color: rgb(32, 32, 184);
    border-color:white;
    border:1px solid;
    color:white;
    width:6%;
    height:35px;
    border-radius:8px;
    outline:none;
    text-align:center; 
    cursor:pointer;
    
  } 
  
   .header ul span li button{
    background-color: white;
    color:rgb(32, 32, 184);
    width:75px;
    height:35px;
    border:none;
    text-align:center;
    cursor:pointer;
    border-radius:8px;
    outline:none;
    right:-10px;
  } 
  
  .first h2{
    margin-top: 100px;
    text-align:center;
    font-size:xx-large;
  }
  .first span{
    color:rgb(32, 32, 184);
  }
  .first p{
    text-align:center;
    padding-top:30px;
    font-size:large
  }

  .first button{
    background-color: rgb(32, 32, 184);
    height:35px;
    width:10%;
    margin-left:5px;
    color:white;
    border-radius:8px;
    border:none;
    cursor:pointer;
  
  }
 
  .first input{
    margin-top:50px;
    height:30px;
    width:50%;
    margin-left: 20%;
    border-radius:8px;
    border:none;
  }
  .first h5{
    padding-bottom: 70px;
    padding-bottom:90px;
    font-size:large;
    z-index:7px;
    
  }
  .first h1 svg{
    position:absolute;
    margin-left:60%;
    margin-top:5%;
    z-index: 1px;
   
  }
  h5{
    text-align:center;
    font-weight:lighter;
    margin-top:60px;
  }
  .this{
    text-align: center;
    padding-top: 80px;
  }
  .this h2 span{
    color:rgb(32, 32, 184);
  }






  /* @media (max-width: 767px) { */
   /* Your CSS for mobile phones (portrait) here  */
/* .header span svg{
  color:rgb(163, 39, 39);
  width:35px;
  height:35px;
  right:10px;
  position:absolute;
  display:none;
}  */

/* .header span svg{
    color:white;
    width:35px;
    height:35px;
   
    right:83%;
  
  
  }



 .header{
  background-color: rgb(32, 32, 184);
  color:white;
  position: static;
  height:50px;
  padding-top:25px;
}
.header ul{
  display:flex;
  list-style: none;
 
  
}
.header span li{
  padding-left:40px;
  display:none;
} 
 .header ul button{
  margin-left:60%;
  background-color: rgb(32, 32, 184);
  border-color:white;
  border:1px solid;
  color:white;
  width:6%;
  height:35px;
  border-radius:8px;
  outline:none;
  text-align:center; 
  cursor:pointer;
  display:none;
} 

 .header ul span li button{
  background-color: white;
  color:rgb(32, 32, 184);
  width:75px;
  height:35px;
  border:none;
  text-align:center;
  cursor:pointer;
  border-radius:8px;
  outline:none;
  right:-10px;
  display:none;
} 
.first h1 svg{
  position:absolute;
  margin-left:60%;
  margin-top:7%;
  right:45%;
 
}
svg{
  position:absolute;
  width:100px;
  height:100px;
  right:90%;  */
 
 /* } 
 span svg{
  position:absolute;
  margin-left:80%;
  padding-top:30px;
  right:10px;
  bottom:65%;  */

  
/* } 
.first button{
  background-color: rgb(32, 32, 184);
  height:35px;
  width:70%;
  margin-left:5px;
  color:white;
  border-radius:8px;
  border:none;
  cursor:pointer;
  margin-right:30px;
  margin-left:50px;
  margin-top:15px;

}
.first p{
  margin-bottom:20px;
}
.first input{

  margin-top:50px;
  width:70%;
  margin:auto;
  margin-left:50px;
  border-radius:8px;
  border:none;
}
} */
  </style>